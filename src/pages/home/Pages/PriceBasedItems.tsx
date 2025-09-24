import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: {
    rate: number
    count: number
  }
}

function PriceBased() {
  const { categoryId } = useParams<{ categoryId?: string }>()
  const [products, setproduct] = useState<Product[]>([])

  useEffect(() => {
    let url = ''

    if (categoryId) {
      const categoryMap: Record<string, string> = {
        mens: "men's clothing",
        womens: "women's clothing",
        jewelery: 'jewelery',
        electronics: 'electronics',
      }
      const apiCategory = categoryMap[categoryId] || categoryId
      url = `https://fakestoreapi.com/products/category/${encodeURIComponent(
        apiCategory!
      )}`
    } else {
      url = 'https://fakestoreapi.com/products'
    }

    fetch(url)
      .then((res) => res.json())
      .then((data: Product[]) => {
        console.log('Fetching URL:', data)
        setproduct(data)
      })
      .catch((error) => console.error('failed to fetch data', error))
  }, [categoryId])
  return (
    <>
      <div className="pt-40">
        <h1 className="text-black text-2xl font-bold capitalize hover:text-indigo-500">
          Our products based on Priceing!!!
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ml-25">
          {products
            .slice()
            .sort((a, b) => b.price - a.price)
            .map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="rounded-2xl bg-stone-50 h-110 w-90 p-4 mt-10 hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4 items-center justify-center"
                />
                <div className="flex flex-col justify-center flex-1">
                  <h2 className="text-x font-semibold line-clamp-2 mb-5 text-center text-gray-600">
                    {product.title}
                  </h2>
                  <p className="text-x font-semibold text-gray-600 text-center">
                    ${product.price}
                  </p>
                </div>
                <button className="mb-5 w-full bg-indigo-400 text-white py-1 rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>{' '}
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default PriceBased

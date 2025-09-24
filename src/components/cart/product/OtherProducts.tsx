import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
  isOnSale?: boolean
}

type OtherProductsProps = {
  categoryId: string
  excludedId?: number
}

function OtherProducts({ categoryId, excludedId }: OtherProductsProps) {
  const [products, setproduct] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const queryParams = new URLSearchParams(location.search)
  const onSale = queryParams.get('onSale') === 'true'

  useEffect(() => {
    if (!categoryId) return
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(
      categoryId
    )}`
    // console.log('Fetching URL:', url)

    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data: Product[]) => {
        if (excludedId) {
          data = data.filter((p) => p.id !== excludedId)
        }
        // console.log('Fetching URL:', data)
        setproduct(data)
      })
      .catch((error) => console.error('failed to fetch data', error))
      .finally(() => setLoading(false))
  }, [categoryId, excludedId])

  const discount = 0.3

  //   if (loading) return <p>loading other products from this category</p>
  //   if (products.length === 0) return <p>no products found</p>

  return (
    <>
      <div className="bg-indigo-400 w-[1000px] rounded p-6 relative-z-0">
        <p className="text-indigo-50 text-2xl text-right mb-4 font-semibold">
          More from this Category
        </p>
        {/* {loading && <p>loading other products from this category</p>}
        {!loading && products.length === 0 && <p>no products found</p>} */}
        <div className="grid grid-cols-4 gap-3 mt-4 h-[280px] overflow-hidden">
          {products.map((product) => {
            const discountedPrice = (product.price * (1 - discount)).toFixed(2)
            return (
              <Link
                key={product.id}
                to={`/product/${product.id}${
                  product.isOnSale ? '?onSale=true' : ''
                }`}
                className="bg-indigo-50 rounded w-[200px] h-[285px] shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-32 object-contain mb-4"
                />
                {/* <h3 className="mt-1 text-sm font-medium text-gray-700 line-clamp-2">
                  {product.title}
                </h3>
                <s className="mb-1 font-bold text-gray-700">${product.price}</s>
                <p className="text-xs font-bold text-red-500">
                  ${discountedPrice}
                </p>
                <span className="text-green-600 font-semibold">
                  {discount * 100}% OFF
                </span> */}
                <h3 className="mt-1 text-sm font-medium text-gray-700 line-clamp-2">
                  {product.title}
                </h3>
                {onSale ? (
                  <>
                    <s className="mb-1 font-bold text-gray-700">
                      ${product.price}
                    </s>
                    <p className="text-xs font-bold text-red-500">
                      ${discountedPrice}
                    </p>
                    <span className="text-green-600 font-semibold">
                      {discount * 100}% OFF
                    </span>
                  </>
                ) : (
                  <p className="mt-5 font-bold text-gray-700">
                    ${product.price}
                  </p>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OtherProducts

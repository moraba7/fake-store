//this is to show the electronics category but with sale

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
}

function SaleCategory() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const [products, setProducts] = useState<Product[]>([])
  const discount = 0.3

  useEffect(() => {
    if (!categoryId) return
    fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(
        categoryId
      )}`
    )
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [categoryId])

  return (
    <div className="p-40 text-black">
      <h1 className="capitalize mb-6 text-indigo-800 font-bold text-3xl">
        Sale in {categoryId}
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountedPrice = (product.price * (1 - discount)).toFixed(2)

          return (
            <Link
              key={product.id}
              to={`/product/${product.id}?onSale=true`}
              className="rounded-2xl bg-stone-50 p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />

              <div className="flex flex-col flex-1 justify-center">
                <h2 className="text-sm font-semibold line-clamp-2 mb-2 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-600 line-through text-center">
                  ${product.price}
                </p>
                <p className="text-lg font-bold text-red-500 text-center">
                  ${discountedPrice}
                </p>
                <span className="text-green-600 font-semibold text-center">
                  {discount * 100}% OFF
                </span>
              </div>

              <button className="mt-4 w-full bg-indigo-400 text-white py-1 rounded hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SaleCategory

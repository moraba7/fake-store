import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../components/cart/store'
import { addToCart } from '../cart/cartSlice'
// import ProductSale from '../../pages/product/MarketSaleProducts'
// import SaleCategory from '../../pages/product/SaleCategory'

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
  discount: number
}

function SalesTab() {
  const dispatch = useDispatch<AppDispatch>()
  const { categoryId } = useParams()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const saleProducts = data
          .map((p) => {
            if (p.category === 'electronics') return { ...p, discount: 0.3 }
            if (p.category === 'jewelery') return { ...p, discount: 0.7 }
            return { ...p, discount: 0 }
          })
          .filter((p) => p.discount > 0)
        setProducts(saleProducts)
      })
  }, [categoryId])

  if (products.length === 0)
    return <p className="p-10 text-black">Loading products...</p>

  return (
    <div className="mt-40 text-black">
      <h1 className="mb-5 text-indigo-800 font-bold text-3xl">
        UNBELIEVABLE SALE ONLY ON THESE PRODUCTS AND ONLY IN FAKESHOP!!!!
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ml-25">
        {products.map((product) => {
          const discountedPrice = (
            product.price *
            (1 - product.discount)
          ).toFixed(2)
          return (
            <Link
              to={`/product/${product.id}?onSale=true`}
              key={product.id}
              className="rounded-2xl bg-stone-50 h-110 w-90 p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <div className="flex flex-col flex-1 justify-center">
                <h2 className="text-sm font-semibold mb-2 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-600 line-through text-center">
                  ${product.price}
                </p>
                <p className="text-lg font-bold text-red-500 text-center">
                  ${discountedPrice}
                </p>
                <span className="text-green-600 font-semibold text-center">
                  {product.discount * 100}% OFF
                </span>
              </div>
              <button
                className="mb-5 w-full bg-indigo-400 text-white py-1 rounded hover:bg-indigo-700 transition"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                      discount: product.discount,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SalesTab

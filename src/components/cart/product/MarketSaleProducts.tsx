import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
}

function ProductSale() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const [products, setProducts] = useState<Product[]>([])
  const discount = 0.7

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
      <h1 className="text-2xl font-bold capitalize mb-6 hover:text-indigo-500">
        Sale up to 70% in {categoryId}
      </h1>

      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const discountedPrice = (product.price * (1 - discount)).toFixed(2)
          // const priceNum = Number(product.price)
          // const discountedPrice = (priceNum * (1 - discount)).toFixed(2)
          // const discountAmount = (priceNum * discount).toFixed(2)

          return (
            <div
              key={product.id}
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
                <s className="text-gray-600 line-through text-center">
                  ${product.price}
                </s>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSale

// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'

// type Product = {
//   id: number
//   title: string
//   price: number | string
//   image: string
//   category: string
// }

// function ProductSale() {
//   const { categoryId } = useParams<{ categoryId: string }>()
//   const [products, setProducts] = useState<Product[]>([])
//   const discountRate = 0.7 // 70% off

//   useEffect(() => {
//     if (!categoryId) return
//     fetch(
//       `https://fakestoreapi.com/products/category/${encodeURIComponent(
//         categoryId
//       )}`
//     )
//       .then((res) => res.json())
//       .then((data: Product[]) => setProducts(data))
//       .catch((error) => console.error('Failed to fetch data', error))
//   }, [categoryId])

//   return (
//     <div className="p-40 text-black">
//       <h1 className="text-2xl font-bold capitalize mb-6 hover:text-indigo-500">
//         Sale up to 70% in {categoryId}
//       </h1>

//       <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => {
//           const priceNum = Number(product.price)
//           const discountedPrice = (priceNum * (1 - discountRate)).toFixed(2)
//           const discountAmount = (priceNum * discountRate).toFixed(2)

//           return (
//             <div
//               key={product.id}
//               className="rounded-2xl bg-stone-50 p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="h-40 w-full object-contain mb-4"
//               />

//               <div className="flex flex-col flex-1 justify-center">
//                 <h2 className="text-sm font-semibold line-clamp-2 mb-2 text-center">
//                   {product.title}
//                 </h2>
//                 <p className="text-gray-600 line-through text-center">
//                   ${priceNum.toFixed(2)}
//                 </p>
//                 <p className="text-lg font-bold text-red-500 text-center">
//                   ${discountedPrice}
//                 </p>
//                 <span className="text-green-600 font-semibold text-center">
//                   Save ${discountAmount} ({discountRate * 100}% OFF)
//                 </span>
//               </div>

//               <button className="mt-4 w-full bg-indigo-400 text-white py-1 rounded hover:bg-indigo-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ProductSale

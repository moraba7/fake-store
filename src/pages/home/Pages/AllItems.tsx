// import { Link } from "react-router-dom"
// import { useState, useEffect } from "react"

// function AllItems() {
//   const [item, setItem] = useState<any[]>([])

//  useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((response) => response.json())
//       .then((data) => setItem(data))
//       .catch((error) => console.error('failed to fetch data', error))
//   }, [])
//   console.log('rendred')

//   return <>
//     <div className="mb-100">
//                     {item.map((i) =>(

//                     ))}
//                     <p className="text-x font-extrabold capitalize text-indigo-600 hover:text-gray-700">
//                       All Items
//                     </p>
//                   </Link>
//                 </div>
//   </>
// }

// export default AllItems

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
}

function AllItems() {
  const [item, setItem] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [])
  console.log('rendred')

  return (
    <>
      <div className="p-40 text-black">
        <h1 className="text-2xl font-bold capitalize mb-4 hover:text-indigo-500">
          All Products in FakeShop
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {item.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="rounded-2xl bg-stone-50 h-110 w-90 p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4 items-center justify-center"
              />
              {/* <h2 className="text-x font-semibold mt-15">{product.title}</h2>
              <p className="text-gray-600 mt-5 h-15">${product.price}</p> */}
              <div className="flex flex-col justify-center flex-1">
                <h2 className="text-x font-semibold line-clamp-2 mb-5 text-center">
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

export default AllItems

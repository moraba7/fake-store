import { useState, useEffect } from 'react'
import img from '../../assets/icon.png'
import { Link } from 'react-router-dom'

function MarketSale() {
  const [product, setProduct] = useState<any[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery?limit=4')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [])
  console.log('rendred')

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[1310px] h-[100px] bg-indigo-100 rounded-2xl flex items-center justify-end px-6">
          <Link
            to={`/sale/jewelery`}
            className="w-40 h-10 bg-indigo-300 rounded-full mr-20"
          >
            <p className="text-xl pb-2 font-bold text-white cursor-pointer">
              see more
            </p>
          </Link>
          <div className="flex gap-4 mr-30">
            {product.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="w-[50px] h-[50px] bg-indigo-200 rounded-full flex flex-col items-center justify-center text-center p-2"
              >
                <img src={item.image} className="w-5 h-5 object-contain mb-2" />
              </div>
            ))}
          </div>

          <div className="w-30 h-8 mr-5 bg-indigo-400 rounded-2xl flex items-center justify-center">
            <p className="text-xl pb-2 font-bold text-white">up to 70%</p>
          </div>
          <h1 className="text-2xl text-gray-700 font-bold hover:text-indigo-500">
            UNBELIVEABE SUPERMARKET SALE
          </h1>
          <img src={img} className="w-25 h-25 ml-4" />
        </div>
      </div>
    </>
  )
}

export default MarketSale

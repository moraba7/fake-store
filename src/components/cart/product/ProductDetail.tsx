import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import OtherProducts from './OtherProducts'
import ProductInfo from './productInfo'
// import CartModal from '../../components/ui/Modal/CartModal'

import { BiSolidCategory } from 'react-icons/bi'
import { RiZoomInFill } from 'react-icons/ri'
import { RiZoomOutFill } from 'react-icons/ri'
import { TbZoomReset } from 'react-icons/tb'
import { FcRating } from 'react-icons/fc'
import { FcMoneyTransfer } from 'react-icons/fc'
// import { FcPaid } from 'react-icons/fc'
import { FcInTransit } from 'react-icons/fc'
// import { FcShop } from 'react-icons/fc'
// import { FcShipped } from 'react-icons/fc'
// import { FcOk } from 'react-icons/fc'
// import { FcDonate } from 'react-icons/fc'
// import { FcClock } from 'react-icons/fc'

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

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const [products, setProduct] = useState<Product | null>(null)
  const [scale, setScale] = useState(1)
  // const [isCart, setIsCart] = useState(false)
  const location = useLocation()

  const zoomIn = () => setScale((prev) => (prev < 1.2 ? prev + 0.2 : prev))
  const zoomOut = () => setScale((prev) => (prev > 0.4 ? prev - 0.2 : prev))
  const resetZoom = () => setScale(1)

  const queryParams = new URLSearchParams(location.search)
  const onSale = queryParams.get('onSale') === 'true'

  useEffect(() => {
    if (!productId) return
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error('Failed to fetch product', err))
  }, [productId])

  if (!products) return <p>loading.......</p>
  const discount = 0.3
  const discountedPrice = (products.price * (1 - discount)).toFixed(2)

  return (
    <>
      <div className="pt-40 mr-10 relative flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-end">
          <div className="w-[350px] h-[350px] flex items-center justify-center bg-white rounded">
            <img
              src={products.image}
              alt={products.title}
              className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300 rounded block"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.3s ease',
                transformOrigin: 'center center',
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex relative justify-end items-center gap-5 mt-12 pr-30">
        <button
          onClick={zoomIn}
          className="bg-indigo-100 h-12 w-12 text-2xl cursor-pointer text-indigo-900 rounded-4xl flex items-center justify-center"
        >
          <RiZoomInFill />
        </button>
        <button
          onClick={resetZoom}
          className="bg-indigo-100 h-12 w-12 text-2xl cursor-pointer text-indigo-900 rounded-4xl flex items-center justify-center"
        >
          <TbZoomReset />
        </button>
        <button
          onClick={zoomOut}
          className="bg-indigo-100 h-12 w-12 text-2xl cursor-pointer text-indigo-900 rounded-4xl flex items-center justify-center"
        >
          <RiZoomOutFill />
        </button>
      </div>
      <div className="flex-1 absolute space-y-6 text-right right-120 top-50">
        <div className="flex justify-end items-center gap-2">
          <span className="text-xl font-bold text-indigo-400 capitalize">
            {products.category}
          </span>
          <BiSolidCategory className="text-xl text-indigo-400" />
        </div>

        <h2 className="block max-w-[70%] whitespace-normal break-words leading-snug text-gray-700 font-bold text-2xl ml-150">
          {products.title}
        </h2>

        {/* <h2 className="text-2xl font-bold text-gray-700 line-clamp-2">
          {products.title}
        </h2> */}

        <hr className="h-px w-150 border-2 border-gray-200 px-5 md:px-12 lg:ml-355" />

        <div className="flex justify-end items-center mb-1">
          <span className="flex items-center gap-1 text-indigo-400 text-xl font-bold mb-2 -mt-4">
            Ratings
            <FcRating className="text-2xl ml-1" />{' '}
          </span>
        </div>

        {/* const Rating = ({rating}: {rating: number}) => {
  return(
    <div>
      {Array.from({length: 5}, (_, i)=>
      (
        <input
        key={i}
        type="radio" 
        name='rating'
        className={`mask mask-star ${ i < Math.round(rating)?}`}/>
      ))}
    </div>
  )
} */}

        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-indigo-800"
            checked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-indigo-800"
            checked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-indigo-800"
            checked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-gray-300"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-gray-300"
          />
          <h1 className="text-gray-600 text-2xl ml-3">
            {products.rating.rate}
          </h1>
        </div>

        <div className="flex justify-end items-center">
          {onSale ? (
            <>
              <p className="text-red-500 font-bold text-4xl mr-3">
                ${discountedPrice}
              </p>
              <span className="flex items-center gap-1 text-gray-600 text-4xl font-bold mb-8 mt-8">
                <s>${products.price}</s>
              </span>
              <span className="text-green-600 font-semibold text-4xl ml-3">
                {discount * 100}% OFF
              </span>
              <FcMoneyTransfer className="text-2xl ml-1" />
            </>
          ) : (
            <span className="flex items-center gap-1 text-gray-600 text-4xl font-bold mb-8 mt-8">
              <p>${products.price}</p>
            </span>
          )}
        </div>

        <div className="flex justify-end">
          <ProductInfo
            product={products}
            onSale={onSale}
            discountedPrice={discountedPrice}
          />
        </div>

        {/* <div className="flex justify-end items-center mb-10">
          <button className="h-10 w-100 bg-indigo-400 text-white py-1 rounded hover:bg-indigo-700 text-xl flex items-center justify-center gap-2 cursor-pointer">
            Add to cart
            <FcPaid className="text-2xl" />
          </button>
        </div> */}
        {/* <div className="whitespace-nowrap flex justify-start bg-indigo-100 rounded-1xl -mt-90 ml-25 h-80 w-70">
          <h1 className="text-left p-3 text-gray-500 font-bold flex text-x">
            <FcShop className="mr-2 mt-1 text-3xl" /> Shop with confidence
          </h1>
          <h2 className="text-right flex text-gray-600 mt-12 -ml-52">
            <FcDonate className="mr-2 mt-1 text-xl" /> Secure Checkout
          </h2>
          <h2 className="text-right flex text-gray-600 mt-22 -ml-36">
            <FcShipped className="mr-2 mt-1 text-xl" /> Fast Shipping
          </h2>
          <h2 className="text-right flex text-gray-600 mt-32 -ml-31">
            <FcOk className="mr-2 mt-1 text-xl" /> 1 Year Warranty
          </h2>
          <h2 className="text-right flex text-gray-600 mt-42 -ml-35">
            <FcClock className="mr-2 mt-1 text-xl" /> Shipping in Less than a
            Week
          </h2>
          <div className="mt-60 -ml-53">
            <button
              className="h-13 w-[200px] bg-indigo-400 text-white py-1 rounded-1xl hover:bg-indigo-700 text-xl flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => setIsCart(true)}
            >
              Add to cart
              <FcPaid className="text-2xl" />
            </button>
            <CartModal isOpen={isCart} onClose={() => setIsCart(false)} />
          </div>
        </div> */}

        <div className="flex justify-end px-5 md:px-12 lg:px-1.5 mt-6">
          <p className="text-gray-600 bg-indigo-50 rounded-1xl font-bold text-left p-4 max-h-[220px] w-[800px]">
            {products.description}
          </p>
        </div>
      </div>

      <div className="relative flex justify-end px-5 md:px-12 lg:px-5 lg:mt-4">
        <p className="text-gray-600 font-semibold w-[400px] relative bg-indigo-100 rounded-1xl mt-6 text-left p-4">
          <span className="flex items-center gap-2 mb-2">
            <FcInTransit className="text-3xl" />
            <span className="text-xl">Returns</span>
          </span>
          Not happy with your purchase? Returns are accepted within 7 days of
          delivery. Please ensure the item is in its original condition and
          packaging.
          <br />
          <br />
          <strong>How to Return:</strong>
          <br />
          1. Contact us at [email/phone] to start your return. <br />
          2. Pack the item securely and ship to [Return Address]. <br />
          <br />
          <strong>Refunds & Exchanges:</strong> <br />
          Refunds are processed to the original payment method within 5 business
          days. <br />
          Exchanges can be requested when submitting your return.
          <br />
          <br />
          <strong>Shipping Costs:</strong> $30
        </p>
      </div>

      <div className="flex justify-end lg:mr-[480px] lg:-mt-80">
        <OtherProducts
          categoryId={products.category}
          excludedId={products.id}
        />
      </div>

      <hr className="h-px w-[1300px] border-2 border-gray-200 items-center ml-40 mt-10" />

      <div className="mt-10 ml-10">
        <p className="text-gray-500 font-semibold text-2xl text-left mb-6 hover:text-indigo-400">
          More Information about this Product
        </p>
        <div>
          <p className="text-gray-500 text-left mb-6">
            <span>Name:</span>
            <span className="ml-50">{products.title}</span>
          </p>
          <hr className="h-px w-[600px] border-2 border-gray-200" />
          <p className="text-gray-500 text-left mt-6">
            <span>Category:</span>
            <span className="ml-45 pb-10">{products.category}</span>{' '}
          </p>
        </div>
      </div>
    </>
  )
}

export default ProductDetail

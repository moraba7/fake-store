import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from './store'

function CartInfo() {
  const cartItem = useSelector((state: RootState) => state.cart.items)
  const totalAmount = cartItem.reduce(
    (acc, i) => acc + (i.discountedPrice ?? i.price) * i.quantity,
    0
  )
  return (
    <>
      <div className="fixed bg-indigo-100 w-[300px] h-[320px] ml-10 rounded-xs">
        <h1 className="text-indigo-800 font-bold text-xl pt-2">Your Total</h1>
        <hr className="border-1 w-50 border-indigo-300 ml-12 mt-1" />
        <div className="text-left pl-7">
          <p className="text-gray-600 leading-13">
            <span>Product total</span>
            <span className="ml-20">${totalAmount.toFixed(2)}</span>
          </p>

          <p className="text-gray-600 leading-13">
            <span>Shipping Cost</span>
            <span className="ml-18">$30</span>
          </p>

          {/* <p className="text-gray-600">Shipping Cost</p>
          <p className="ml-20">$30</p> */}
          <hr className="border-1 w-50 border-indigo-300 ml-5 mt-7" />

          <p className="text-gray-600 mt-5 font-semibold">
            <span>Your Total</span>
            <span className="ml-25">${(totalAmount + 30).toFixed(2)}</span>
          </p>
        </div>
        <Link
          to={`/checkout`}
          className="w-[250px] mx-auto mt-7 bg-indigo-400 text-white py-1 rounded-xs hover:bg-indigo-700 text-xl flex gap-2 cursor-pointer items-center justify-center"
        >
          Checkout
        </Link>
      </div>
    </>
  )
}

export default CartInfo

import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { updateQuantity, removeCompletely } from './cartSlice'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcPaid, FcFullTrash } from 'react-icons/fc'
import CartInfo from './CartInfo'

type cartItem = {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

function HeaderCart() {
  const cartItem = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch<AppDispatch>()
  // const [inCart, setInCart] = useState(false)
  // const [quantity, setQuantity] = useState(1)

  // const handleReset = (productId: number) => {
  //   dispatch(removeFromCart({ id: productId }))
  //   // setInCart(false)
  //   // setQuantity(1)
  // }

  if (cartItem.length === 0) {
    return (
      <>
        <div className="mt-70 justify-center">
          <p className="text-3xl text-center text-indigo-900 font-bold mb-10">
            your cart is empty at the moment (◞‸◟,)
          </p>
          <Link to={'/'} className="mt-10 cursor-pointer">
            <p className="text-indigo-900 bg-indigo-200 w-50 h-10 font-semibold text-x rounded-full items-center justify-center mx-auto py-1">
              go back to main page
            </p>
          </Link>
        </div>
      </>
    )
  }
  return (
    <div className="pt-40">
      <h1 className="text-3xl text-indigo-800 font-bold justify-end mr-40 flex gap-3 mb-5">
        Items in Your Cart <FcPaid className="text-4xl" />
      </h1>

      <hr className="h-3px w-[1000px] border-2 border-gray-100 ml-[700px]" />

      <div className="mt-10 flex gap-10">
        <div className="w-1/3">
          <CartInfo />
        </div>
        <div>
          {cartItem.map((item) => (
            <div key={item.id} className="grid gap-5">
              <div className="flex justify-end mt-5 mr-30">
                <div className="flex flex-col text-right">
                  <p className="text-gray-600 text-x font-semibold text-right mr-8 mt-2">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-x font-semibold text-right mr-8 mt-2">
                    {item.category}
                  </p>

                  <div className="flex flex-col items-end pr-8">
                    {item.discount && item.discount > 0 ? (
                      <>
                        {/* <div className="flex flex-col items-end"> */}
                        <p className="text-gray-600 text-lg line-through">
                          ${item.price.toFixed(2)}
                        </p>
                        <span className="text-gray-600 font-bold text-xl">
                          ${(item.discountedPrice! * item.quantity).toFixed(2)}
                        </span>
                        <p className="text-green-600 font-semibold text-lg">
                          {Math.round(item.discount * 100)}% OFF
                        </p>
                        {/* </div> */}
                      </>
                    ) : (
                      <p className="text-gray-600 text-xl font-semibold text-right mt-2">
                        {/* ${item.price.toFixed(2)} * {item.quantity} = $ */}$
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end gap-2 mt-2 mr-8">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          })
                        )
                      }
                      className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-indigo-700 text-2xl font-semibold mt-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        dispatch(removeCompletely({ id: item.id }))
                      }
                      className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                    >
                      <FcFullTrash className="text-center" />
                    </button>
                  </div>
                </div>
                <img
                  src={item.image}
                  className="w-30 h-30 object-contain justify-end"
                />
              </div>
              <hr className="h-px w-[1000px] border-2 border-gray-100 mr-30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderCart

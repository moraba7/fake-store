import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart, removeFromCart, updateQuantity } from '../cartSlice'
import type { RootState, AppDispatch } from '../store'
// import { useParams } from 'react-router-dom'
import CartModal from '../../ui/Modal/CartModal'

import {
  FcShop,
  FcShipped,
  FcOk,
  FcDonate,
  FcClock,
  FcPaid,
  FcFullTrash,
} from 'react-icons/fc'

// type ProductInfoProps = {
//   product: {
//     id: number
//     title: string
//     price: number
//     image: string
//     category: string
//     description?: string
//   }
//   onSale: boolean
//   discountedPrice?: number
// }

function ProductInfo({ product, onSale, discountedPrice }) {
  const dispatch = useDispatch<AppDispatch>()
  const cartItem = useSelector((state: RootState) => state.cart.items)
  const [iscartModalOpen, setIsCartModalOpen] = useState(false)
  const itemInCart = cartItem.find((item) => item.id === product.id)
  const quantity = itemInCart ? itemInCart.quantity : 0
  const basePrice = product.price
  const salePrice = onSale ? discountedPrice ?? basePrice : undefined
  const unitPrice = salePrice ?? basePrice
  const totalPrice = unitPrice * quantity
  // const isINCart = cartItem.some((item) => item.id === product.id)

  // useEffect(() => {
  //   const itemInCart = cartItem.find((item) => item.id === product.id)
  //   if (itemInCart) {
  //     setQuantity(itemInCart.quantity)
  //     setInCart(true)
  //   } else {
  //     setQuantity(1)
  //     setInCart(false)
  //   }
  // }, [cartItem, product.id])

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: basePrice,
        discount: onSale ? 1 - salePrice! / basePrice : 0,
        image: product.image,
        category: product.category,
        quantity: 1,
      })
    ),
      setIsCartModalOpen(true)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }))
    } else {
      dispatch(removeFromCart({ id: product.id }))
    }
  }

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }))
  }

  const handleReset = () => {
    dispatch(removeFromCart({ id: product.id }))
    // setInCart(false)
    // setQuantity(1)
  }

  // useEffect(() => {
  //   setIsCartModalOpen(false)
  //   console.log('Cart updated:', cartItem)
  // }, [product])

  //   useEffect(() => {
  //     if (!productId) return
  //     fetch(`https://fakestoreapi.com/products/${productId}`)
  //       .then((res) => res.json())
  //       .then((data) => setProduct(data))
  //       .catch((err) => console.error('Failed to fetch product', err))
  //   }, [productId])

  return (
    <>
      <div className="whitespace-nowrap flex justify-start bg-indigo-100 rounded-1xl -mt-80 mr-[980px] h-80 w-70">
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
          <FcClock className="mr-2 mt-1 text-xl" /> Shipping in Less than a Week
        </h2>
        <div className="relative h-full w-full justify-end items-center">
          {itemInCart ? (
            <div className="relative flex flex-col grid-cols-2 items-center gap-3 mt-52 right-49">
              <p className="text-indigo-700 text-2xl font-bold text-center">
                ${totalPrice.toFixed(2)}
              </p>
              <div className="flex items-center justify-center gap-2 h-12 w-40 bg-indigo-50 rounded mt-1 mx-a">
                <button
                  onClick={handleDecrease}
                  className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="text-indigo-700 text-2xl font-semibold mt-1">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrease}
                  className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={handleReset}
                  className="h-10 w-8 bg-indigo-400 text-white rounded-2xl hover:bg-indigo-700 text-3xl font-bold items-center justify-center cursor-pointer"
                >
                  <FcFullTrash className="text-center" />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative right-53">
              <button
                className="h-13 w-[200px] mt-60 bg-indigo-400 text-white py-1 rounded-1xl hover:bg-indigo-700 text-xl flex gap-2 cursor-pointer items-center justify-center"
                onClick={handleAddToCart}
              >
                Add to cart
                <FcPaid className="text-2xl" />
              </button>
            </div>
          )}
          {/* <button
            className="h-13 w-[200px] bg-indigo-400 text-white py-1 rounded-1xl hover:bg-indigo-700 text-xl flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => setIsCart(true)}
          >
            Add to cart
            <FcPaid className="text-2xl" />
          </button> */}
          <CartModal
            isOpen={iscartModalOpen}
            onClose={() => {
              setIsCartModalOpen(false)
              // setInCart(true)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ProductInfo

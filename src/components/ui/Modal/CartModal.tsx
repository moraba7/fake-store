import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import OgModal from './OgModal'
import { FcPaid } from 'react-icons/fc'

type OgModalProps = {
  isOpen: boolean
  onClose: () => void
}

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
  isOnSale?: boolean
}

function CartModal({ isOpen, onClose }: OgModalProps) {
  const { productId } = useParams<{ productId: string }>()
  const [products, setProduct] = useState<Product[]>([])
  // const navigate = useNavigate()

  useEffect(() => {
    if (!productId) return
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [productId])

  return (
    <>
      <OgModal isOpen={isOpen} onClose={onClose} className="w-[480px]">
        <p className="text-green-700 font-bold align-text-top text-xl text-left mb-5">
          ✔ this item has been added to your cart
        </p>
        <hr className="h-px w-[420px] border-2 border-gray-200 mx-auto" />
        {products && (
          <div className="flex flex-2 gap-3">
            <img
              src={products.image}
              className="w-30 h-30 object-contain mt-4 mb-4"
            />
            <p className="text-gray-600 font-semibold text-x mt-7">
              {products.title}
            </p>
          </div>
        )}
        <Link
          to={`/cart`}
          className="h-10 w-[400px] bg-indigo-400 text-white rounded-1xl hover:bg-indigo-700 text-xl cursor-pointer object-center items-center justify-center text-center ml-4 flex gap-3"
          //   onClick={() => setIsCart(true)}
        >
          Go to cart
          <FcPaid className="text-2xl" />
        </Link>{' '}
      </OgModal>
    </>
  )
}

export default CartModal

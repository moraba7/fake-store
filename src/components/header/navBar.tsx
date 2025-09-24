import 'preline'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import logo from '../../assets/icon.png'
import Tabs from './Tabs'

import { BsBell } from 'react-icons/bs'
import { HiOutlineLogin } from 'react-icons/hi'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import NotifyModal from '../ui/Modal/NotifyModal'

function NavBar() {
  const [isNotify, setIsNotify] = useState(false)

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/signup')
  }

  const handleCartClick = () => {
    navigate('/cart')
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-5">
        <div className="navbar px-4">
          <div className="flex-1">
            <a className="text-xl text-black font-semibold"></a>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="You can find everything in FakeShop"
              className="input input-bordered w-120 bg-gray-100 text-black"
            />

            <Link to={'/'} className="flex items-center gap-4">
              <span className="text-2xl text-black font-extrabold">
                FAKE STORE
              </span>

              <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            </Link>
          </div>
        </div>
        <Tabs />
        <div className="fixed top-10 left-4 gap-5">
          <button
            className="btn bg-transparent text-stone-700 border-none shadow-none"
            onClick={handleCartClick}
          >
            <HiOutlineShoppingCart size={30} />
          </button>
          {/* <div className="indicator">
            <span className="indicator-item indicator-end indicator-bottom rounded-full badge badge-secondary h-3 w-3 bg-indigo-400 border-none"></span>
          </div> */}
          {/* <button
            className="btn bg-transparent text-stone-700 border-none shadow-none"
            onClick={handleCartClick}
          >
            <HiOutlineShoppingCart size={30} />
          </button> */}
          <button
            className="btn bg-transparent text-stone-700 border-stone-300 shadow-none"
            onClick={handleLoginClick}
          >
            Sign in | Login <HiOutlineLogin size={20} />
          </button>
          <button
            className="btn bg-transparent text-stone-700 border-none shadow-none"
            onClick={() => setIsNotify(true)}
          >
            <BsBell size={30} />
          </button>
          <NotifyModal isOpen={isNotify} onClose={() => setIsNotify(false)} />
        </div>
      </header>
    </>
  )
}

export default NavBar

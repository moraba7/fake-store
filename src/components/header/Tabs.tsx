import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import 'preline/preline'

import { HiOutlineBars3 } from 'react-icons/hi2'
import { LuBadgePercent } from 'react-icons/lu'
import { FaFire } from 'react-icons/fa'
import { BsPatchQuestion } from 'react-icons/bs'
// import { BsFillPhoneFill } from 'react-icons/bs'
// import { BsFillLaptopFill } from 'react-icons/bs'
// import { FaTablet } from 'react-icons/fa'
// import { BsFillTvFill } from 'react-icons/bs'
// import { FaHeadphones } from 'react-icons/fa6'
import { FaLaptop, FaMale, FaFemale } from 'react-icons/fa'
import { GiHeartEarrings } from 'react-icons/gi'

const categoryIcons: { [key: string]: JSX.Element } = {
  electronics: <FaLaptop size={20} />,
  jewelery: <GiHeartEarrings size={20} />,
  "men's clothing": <FaMale size={20} />,
  "women's clothing": <FaFemale size={20} />,
}

function Tabs() {
  // const [activeItem, setActiveItem] = useState('phone')
  const [category, setCategory] = useState<any[]>([])
  // const [item, setItem] = useState<any[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error('failed to fetch data', error))
  }, [])
  console.log('rendred')

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((response) => response.json())
  //     .then((data) => setItem(data))
  //     .catch((error) => console.error('failed to fetch data', error))
  // }, [])
  // console.log('rendred')

  // const navigate = useNavigate()

  // const handleBasedPriceClick = () => {
  //   navigate('/pricebased')
  // }

  // const handleAllItemsClick = () => {
  //   navigate('/allitems')
  // }

  // const handleChooseClick = () => {
  //   navigate('/chooseit')
  // }

  // const handleBrandClick = () => {
  //   navigate('/brand')
  // }

  // const routes = [{ path: 'prouducts/phone', name: 'phone', id: '' }]
  // routes.map(item=>{
  //   return <NavLink to={item.path} className={(active)=> return ''} key/>
  // })
  return (
    <div className="sticky top-0 w-full bg-white">
      <div className="w-full bg-white px-4 shadow-md">
        <div role="tablist" className="tabs text-black justify-end">
          <Link
            to={`/qanda`}
            role="tab"
            className="tab !text-black font-semibold border-b-4
  hover:border-indigo-600 gap-2"
          >
            Q & A <BsPatchQuestion size={20} className="text-indigo-600" />
          </Link>
          <Link
            to={`/popular`}
            role="tab"
            className="tab tab-active !text-black font-semibold border-b-4
               hover:border-indigo-600 gap-2"
          >
            Popular <FaFire size={20} className="text-indigo-600" />
          </Link>
          <Link
            to={`/sale?onSale=true`}
            role="tab"
            className="tab !text-black font-semibold border-b-4
               hover:border-indigo-600 gap-2"
          >
            Sales <LuBadgePercent size={20} className="text-indigo-600" />
          </Link>

          {/* category tab */}
          <div className="hs-dropdown relative [--trigger:click] dropdown-end border-l border-stone-200">
            <div
              tabIndex={0}
              role="button"
              className="tab !text-black font-semibold border-b-4
                hover:border-indigo-600 gap-2 cursor-pointer"
            >
              Categories{' '}
              <HiOutlineBars3 size={20} className="text-indigo-600" />
            </div>

            <div className="hs-dropdown-menu hidden hs-dropdown-open:block absolute top-full bg-white shadow-md rounded-lg p-6 w-[470px] h-[300px] text-left">
              <div className="grid grid-cols-2 grid-rows-4 gap-20 text-sm text-gray-800 h-[70px]">
                <div className="space-y-2">
                  {category.map((cat) => (
                    <Link
                      to={`/product/category/${encodeURIComponent(cat)}`}
                      key={cat}
                      className="flex justify-end px-3 py-2 rounded hover:bg-gray-100 hover:text-indigo-600 h-[50px] w-[200px] ml-55 gap-3"
                    >
                      {/* <div className="block px-3 py-2 rounded hover:bg-gray-100 hover:text-indigo-600"> */}
                      <p className="text-sm font-bold capitalize text-gray-700 hover:text-indigo-600">
                        {cat}
                      </p>
                      {categoryIcons[cat]}
                      {/* </div> */}
                    </Link>
                  ))}
                </div>

                <div className="-ml-40">
                  <Link
                    to={`/allitems`}
                    className="flex justify-start font-bold px-3 py-2 rounded hover:text-indigo-600 h-[50px] w-[200px] mr-60"
                  >
                    <p className="text-x font-bold capitalize text-indigo-600 hover:text-gray-700 pr-7">
                      All Items
                    </p>
                  </Link>

                  <Link
                    to={`/popular`}
                    className="flex justify-start font-bold px-3 py-2 rounded hover:text-indigo-600 h-[50px] w-[200px]"
                  >
                    <p className="text-x font-bold capitalize text-indigo-600 hover:text-gray-700 mt-2 pr-17">
                      Based on Rating
                    </p>
                  </Link>
                  <Link
                    to={`/basedonprice`}
                    className="flex justify-start font-bold px-3 py-2 rounded hover:text-indigo-600 h-[50px] w-[200px]"
                  >
                    <p className="text-x font-bold capitalize text-indigo-600 hover:text-gray-700 mt-10 pr-25">
                      Based on Priecing
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabs

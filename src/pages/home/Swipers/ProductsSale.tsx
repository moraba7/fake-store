import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import CountdownTimer from '../Countdown'
import { Link } from 'react-router-dom'

import { IoMdArrowDropleftCircle } from 'react-icons/io'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

function ProductsSale() {
  const [card, setCard] = useState<any[]>([])
  // const [setCurrentIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then((res) => res.json())
      .then((data) => setCard(data))
      .catch((error) => console.error('Failed to fetch', error))
  }, [])

  useEffect(() => {
    if (swiperRef.current && card.length > 0) {
      swiperRef.current.slideTo(card.length + 1)
    }
  }, [card])

  const lastIndex = card.length
  const discount = 0.3

  return (
    <div className="mt-5 flex justify-center items-center">
      <div className="w-[1300px] h-[350px] rounded-2xl bg-indigo-300 flex px-6 py-4 items-center">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          //this stops scrolling
          loop={false}
          freeMode={false}
          modules={[FreeMode]}
          // initialSlide={card.length + 1}
          onSwiper={(Swiper) => (swiperRef.current = Swiper)}
          onSlideChange={(swiper) => {
            // setCurrentIndex(swiper.activeIndex)
            swiper.allowSlideNext = swiper.activeIndex < lastIndex
          }}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: '200px' }}>
            <Link
              to={`/sale/electronics`}
              className="bg-indigo-50 rounded-xl shadow-md p-4 h-[320px] flex flex-col items-center justify-center"
            >
              <button className="text-gray-700 hover:text-indigo-800">
                <IoMdArrowDropleftCircle size={50} />
                See all <br />
              </button>
            </Link>
          </SwiperSlide>

          {card.map((item) => {
            const discountedPrice = (item.price * (1 - discount)).toFixed(2)

            return (
              <SwiperSlide key={item.id} style={{ width: '200px' }}>
                {/* this is your card */}
                <Link
                  to={`/product/${item.id}?onSale=true`}
                  className="bg-indigo-50 rounded-xl shadow-md p-4 h-[320px] flex flex-col"
                >
                  {/* this is your card image */}
                  <div className="flex justify-center">
                    <img
                      src={item.image.replace('http://', 'https://')}
                      alt={item.title}
                      className="h-32 w-32 object-contain mx-auto"
                    />
                  </div>
                  {/* this is your card title*/}
                  <h3 className="mt-7 text-sm font-medium text-gray-700 line-clamp-2">
                    {item.title}
                  </h3>
                  {/* this is your card price */}
                  <p className="mt-5 font-bold text-gray-700 line-through">
                    <s>${item.price}</s>
                  </p>
                  <p className="text-lg font-bold text-red-500">
                    ${discountedPrice}
                  </p>
                  <span className="text-green-600 font-semibold">
                    {discount * 100}% OFF
                  </span>
                </Link>
              </SwiperSlide>
            )
          })}

          <SwiperSlide style={{ width: '200px' }}>
            <div className="flex flex-col justify-center items-end text-right pl-5 pt-13 h-full">
              <h1 className="text-2xl font-bold text-gray-700 font-sans hover:font-serif text-right hover:text-indigo-900">
                % % % % % % <br /> UNBELIEVABLE <br /> SALE!!!! <br /> BUY NOW
              </h1>
              <div className="mt-4 text-gray-700 text-center">
                <CountdownTimer />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ProductsSale

/* 
          <div className="flex-2 flex items-center gap-4 -x-auto">
            {card.map((item) => (
              <div
                key={item.id}
                className="card bg-indigo-50 w-70 h-80 shadow-sm absolute right-80"
              >
                <figure className="p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-contain"
                  />
                </figure>
                <div className="card-body p-3">
                  <h2 className="card-title text-sm font-semibold">
                    {item.title.split(' ').slice(0, 3).join('')}
                  </h2>
                  <p className="text-xs text-gray-600">${item.price}</p>
                </div>
              </div>
            ))}
          </div> */

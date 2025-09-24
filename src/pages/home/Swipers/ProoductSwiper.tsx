// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import { Pagination } from 'swiper/modules'
// import banner from '../../../assets/thumbnail.png'

// //  import Swiper styles
// import 'swiper/css'
// import 'swiper/css/pagination'

// // import required modules

// function SwiperPart() {
//   return (
//     <>
//       <div className="top-0 left-0 w-full z-0">
//         <Swiper
//           spaceBetween={0}
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           modules={[Pagination, Autoplay]}
//           className="w-screen h-[400px]"
//         >
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//       <div className="h-[400px] w-full"></div>
//       <div className="w-full">
//         <div className="h-[1000px] bg-gray-100">
//           {/* Replace this with your real content */}
//           <h2 className="text-center pt-10">Scroll down content here</h2>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SwiperPart

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import banner from '../../../assets/thumbnail.png'

// import 'swiper/css'
// import 'swiper/css/pagination'

// function SwiperPart() {
//   return (
//     <>
//       {/* Full-width Swiper banner */}
//       <div className="relative w-screen -hidden">
//         <Swiper
//           className="w-screen h-[400px]"
//           spaceBetween={0}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Pagination, Autoplay]}
//         >
//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 1"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>

//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 2"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>

//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 3"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>

//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 4"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>

//           <SwiperSlide className="w-screen h-full">
//             <img
//               src={banner}
//               alt="Slide 5"
//               className="w-screen h-full object-cover"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       {/* Page content below */}
//       <div className="w-full">
//         <div className="min-h-[2000px] bg-gray-100">
//           <h2 className="text-center pt-10">Scrollable content here</h2>
//         </div>
//       </div>
//     </>
//   )
// }

// export default SwiperPart
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import banner from '../../../assets/thumbnail.png'

import 'swiper/css'
import 'swiper/css/pagination'

export default function SwiperPart() {
  return (
    <div className="w-screen h-[400px] overflow-hidden relative no-scrollbar">
      <Swiper
        className="w-screen h-full"
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="w-screen h-full">
          <img
            src={banner}
            alt="Slide 1"
            className="w-screen h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="w-screen h-full">
          <img
            src={banner}
            alt="Slide 2"
            className="w-screen h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide className="w-screen h-full">
          <img
            src={banner}
            alt="Slide 3"
            className="w-screen h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

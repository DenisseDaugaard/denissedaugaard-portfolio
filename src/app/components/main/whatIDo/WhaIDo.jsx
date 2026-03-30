"use client"

import { services } from "@/app/assets/items"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TechStak from "./TechStak";
import Resume from "./Resume";

export default function AboutMe(){
    return(
         <section id="home" className="content-enter w-[70%] backdrop-blur-2xl rounded-[2rem] border border-pink-500/50 p-4 mx-auto">
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <h1 className="text-2xl font-semibold text-center my-10">What I do ⚙️</h1>
                    <div className="flex justify-around mb-8">
                        {services.map((service) => (
                                <section key={service.title} className="flex flex-col items-center text-center  bg-white/20 border border-white/20 rounded-lg py-6 px-4">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="mb-4 h-16 w-16 object-contain"
                                />
                                <h3 className="mb-2 text-xl font-bold text-red-400 uppercase">
                                    {service.title}
                                </h3>
                                <p className="max-w-[220px] text-base text-white/90">
                                    {service.description}
                                </p>
                                </section>
                        ))}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <TechStak/>
                </SwiperSlide>
                <SwiperSlide>
                    <Resume/>
                </SwiperSlide>
                
            </Swiper>
        </section>
    )
}


// "use client"

// import React, { useCallback } from "react"
// import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io"
// import useEmblaCarousel from "embla-carousel-react"
// import { services } from "@/app/assets/items"
// import TechStak from "./TechStak"

// export function WhatIDo() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   return (
//     <section className="content-enter absolute top-[30%] left-1/2 w-[80%] -translate-x-1/2 rounded-[2rem] p-4 backdrop-blur-xl inset-shadow-sm inset-shadow-pink-500/50">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex gap-6">
//            {services.map((service) => (
//                 <section key={service.title} className="flex flex-col items-center text-center">
//                 <img
//                     src={service.icon}
//                     alt={service.title}
//                     className="mb-4 h-16 w-16 object-contain"
//                 />
//                 <h3 className="mb-2 text-xl font-bold text-red-400 uppercase">
//                     {service.title}
//                 </h3>
//                 <p className="max-w-[220px] text-base text-white/90">
//                     {service.description}
//                 </p>
//                 </section>
//             ))}
//               <TechStak/>
//         </div>
//       </div>

//       <button
//         onClick={scrollPrev}
//         className="absolute left-10 top-1/2 z-10 -translate-y-1/2 p-2 text-gray-500 shadow cursor-pointer"
//         type="button"
//       >
//         <IoIosArrowDropleft className="h-8 w-8" />
//       </button>

//       <button
//         onClick={scrollNext}
//         className="absolute right-10 top-1/2 z-10 -translate-y-1/2 p-2 text-gray-500 shadow cursor-pointer"
//         type="button"
//       >
//         <IoIosArrowDropright className="h-8 w-8" />
//       </button>
//     </section>
//   )
// }
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
         <section id="home" className="content-enter shadow-lg shadow-cyan-900 lg:shadow-none lg:bg-transparent lg:w-[70%] backdrop-blur-2xl lg:rounded-[2rem] lg:border border-pink-500/50 p-4 lg:mx-auto">
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <h1 className="text-2xl font-semibold text-center my-10">What I do ⚙️</h1>
                    <div className="px-10 lg:flex justify-around mb-8 gap-8">
                        {services.map((service) => (
                                <section key={service.title} className="flex flex-col items-center text-center bg-white/20 border border-white/20 rounded-lg py-2 lg:py-6 px-4">
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


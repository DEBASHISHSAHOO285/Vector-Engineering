import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function HeroSlider() {
  return (
    <div className="bg-black text-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="h-[80vh] flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              High Profit Mining Machines 🚀
            </h1>
            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Get Price on WhatsApp
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[80vh] flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Best Deals Available Now 💰
            </h1>
            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Contact Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
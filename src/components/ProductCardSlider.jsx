import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import images from "../assets";

export default function App() {
  return (
    <>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-1 gap-5">
        {/* */}
        <div className="max-md:col-span-1 py-3 px-3 lg:block hidden rounded-lg bg-white scroll-smooth overflow-hidden lg:overflow-auto lg:max-h-[600px]">
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex bg-slate-50 hover:bg-slate-200 cursor-pointer rounded-lg p-3 items-center mb-3"
            >
              <img
                src={images.product.watch}
                alt=""
                className="h-14 w-14 rounded-lg"
              />
              <p className="font-semibold text-[17px] px-5">Iphone</p>
            </div>
          ))}
        </div>

        {/* */}
        <div className="relative lg:col-span-1 py-5 px-2 rounded-lg bg-white hidden xl:block">
          <div className="absolute w-full h-full top-0 left-0 bg-cover bg-center rounded-lg object-cover bg-[url('https://th.bing.com/th/id/OIP.I74APF5RWPc7TxQbre7lRwAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')]"></div>
          <div className="relative text-white p-4 font-medium">
            <p className="text-sm pb-2 opacity-90">15% OFF</p>
            <h4 className="text-[26px] pb-2">Home Speakers</h4>
            <p className="text-sm pb-2 w-[200px] opacity-90">
              Giảm từ 8.500.00 xuống 7.500.000 vnđ
            </p>
          </div>
        </div>

        {/* slider */}
        <div className="col-span-2 py-3 bg-white rounded-lg lg:col-span-3 xl:col-span-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            rewind={true}
            modules={[Navigation]}
            className="p-2"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

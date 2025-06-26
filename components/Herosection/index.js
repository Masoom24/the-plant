"use client";
import React from "react";
import { GoDash } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const heroImages = ["img3.jpg", "img1.jpg", "img2.jpg", "img4.jpg"];

const featuredItems = [
  { img: "/Featured/img1.webp", title: "Indoor Plants" },
  { img: "/Featured/img2.webp", title: "Outdoor Plants" },
  { img: "/Featured/img3.webp", title: "Succulents" },
  { img: "/Featured/img1 (1).jpg", title: "Air Purifiers" },
  { img: "/Featured/img1 (2).jpg", title: "Low Maintenance" },
  { img: "/Featured/img1 (3).jpg", title: "Flowering Plants" },
  { img: "/Featured/img1 (4).jpg", title: "Medicinal Plants" },
  { img: "/Featured/img1 (5).jpg", title: "Desk Plants" },
  { img: "/Featured/img1 (6).jpg", title: "Herbs" },
  { img: "/Featured/img1 (7).jpg", title: "Cactus" },
  { img: "/Featured/img1 (8).jpg", title: "Bonsai" },
  { img: "/Featured/img1 (9).jpg", title: "Hanging Pots" },
];

const Herosection = () => {
  return (
    <>
      {/* Hero Section with smooth slow autoplay */}
      <section className="w-full h-[90vh] overflow-hidden relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1500}
          modules={[Autoplay]}
          className="w-full h-full"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full">
                <img
                  src={`/Herosection/${img}`}
                  alt={`Hero ${i + 1}`}
                  className="w-full h-full object-cover object-center brightness-75"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Title */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Discover Your Green Space
          </h1>
          <p className="text-lg md:text-xl drop-shadow-sm">
            Best Deals on All Kinds of Plants
          </p>
        </div>
      </section>

      {/* Featured Categories Continuous Scroll */}
      <section className="w-full bg-[#F0F8EC] py-14 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-10">
          Categories of the Month
        </h2>

        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-2 md:px-6"
        >
          {featuredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group flex flex-col items-center space-y-4 bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-green-100">
                {/* Image Box */}
                <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-green-200 group-hover:border-green-400 transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Button */}
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 text-sm font-medium rounded-full shadow hover:shadow-md transition-all duration-300 tracking-wide">
                  Go Shop
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Herosection;

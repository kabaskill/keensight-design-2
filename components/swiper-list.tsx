"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

import "../app/css/additional-styles/swiper.css";

// import required modules
import { EffectCreative } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState, useEffect } from "react";

export interface SwiperListProps {
  swiperArr: {
    title: string;
    span: string;
    content: string;
    link: string;
    button: string;
    image: string;
  }[];
}

export default function SwiperList({ swiperArr }: SwiperListProps) {
  const [progress, setProgress] = useState(1);
  const progressCircle = useRef<SVGSVGElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    setProgress(1 - progress);
  };

  useEffect(() => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${progress}`);
    }
  }, [progress]);

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      speed={500}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      loop={false}
      navigation={false}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Navigation, Pagination, EffectCreative]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {swiperArr.map((slide: any) => (
        <SwiperSlide key={slide.title}>
          <h1
            className="text-4xl md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            {slide.title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {slide.span}
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              {slide.content}
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href={slide.link}
                >
                  {slide.button}
                </a>
              </div>
              <div>
                <a
                  className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href={slide.link}
                >
                  View Our Case Studies
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="autoplay-progress">
        <svg viewBox="0 0 64 64" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
      </div>
    </Swiper>
  );
}

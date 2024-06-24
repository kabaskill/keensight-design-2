import Image from "next/image";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/css/additional-styles/my-swiper.css";

export default function ImageGallery({ arr }: { arr: string[] }) {
  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="my-swiper"
        >
          {arr.map((item) => {
            return (
              <SwiperSlide>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  alt=""
                  src={`/images/${item}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

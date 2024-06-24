"use client";

import ModalVideo from "@/components/modal-video";
import { usePathname } from "next/navigation";
import VideoThumb from "@/public/images/hero-image.png";

import data from "@/data/products.json";
import FeaturesBlocks from "@/components/features-blocks";
import CommonEngagements from "@/components/common";
import Newsletter from "@/components/newsletter";
import Infographic from "@/components/infographic";

export default function ProductPage({ params }: { params: { product: string } }) {
  const pathname = usePathname();

  const product = data.find((product) => product.slug === params.product) || data[0];

  return (
    <>
      <section className="relative ">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-30 md:pb-20 lg:flex lg:gap-16">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16 lg:text-left">
              <h1
                className="text-4xl md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  {product.name}
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  {product.description}
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex  justify-center lg:justify-start"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <a
                      className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 "
                      href={product.link}
                    >
                      {product.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={850}
              thumbHeight={500}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </section>

      <FeaturesBlocks services={product.services} />

      <Infographic arr={product.imageArr} />

      <CommonEngagements product={product} />
      <Newsletter />
    </>
  );
}

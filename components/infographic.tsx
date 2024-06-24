import Image from "next/image";
import { useEffect } from "react";
import mediumZoom from "medium-zoom";

export default function Infographic({ arr }: { arr: Array<string> }) {
  useEffect(() => {
    mediumZoom("img[data-zoom]", {
      margin: 24,
      background: "rgba(0, 0, 0, 0.5)",

      scrollOffset: 0,
    });
  }, []);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {arr.map((item, index) => (
              <div key={item} className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* IMAGE */}
                <div
                  className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${
                    index % 2 === 0 ? "md:order-1" : "rtl"
                  }`}
                  data-aos="fade-up"
                >
                  <div className="max-w-full mx-auto md:max-w-none">
                    <Image
                      className="max-w-full h-auto"
                      src={`/images/${item}`}
                      width={800}
                      height={2000}
                      alt={`Infographic ${index + 1}`}
                      data-zoom
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 p-4"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      More speed. Less spend
                    </div>
                    <h3 className="h3 mb-3">Keep projects on schedule</h3>
                    <p className="text-xl text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Duis aute irure dolor in reprehenderit</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Excepteur sint occaecat</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Amet consectetur adipiscing elit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

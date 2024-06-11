import React from "react";
import { subContent2 } from "./utils/siteData";

function boldBeforeColon(input: string) {
  let colonIndex = input.indexOf(":");
  if (colonIndex === -1) {
    return input;
  }
  let beforeColon = input.slice(0, colonIndex);
  let afterColon = input.slice(colonIndex);
  return `<strong>${beforeColon}</strong>${afterColon}`;
}

export default function SubContent({ side, index }: { side: string; index: number }) {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}

            <div
              className="max-w-xl md:max-w-3xl md:w-full mx-auto md:col-span-12 md:mt-6 items-center text-center px-8"
              data-aos={`fade-${side}`}
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-4">
                <h2 className="text-5xl font-extrabold  mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  {subContent2[`${index}`].title}
                </h2>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1"></div>

                  {subContent2[`${index}`].content.map((item) => {
                    return (
                      <div
                        key={item}
                        className={`text-gray-600 text-xl  ${index !== 0 && "text-left"}`}
                        dangerouslySetInnerHTML={{ __html: boldBeforeColon(item) }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

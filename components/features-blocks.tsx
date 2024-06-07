import Image from "next/image";
import { ourServices } from "./utils/siteData";

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{ourServices.header}</h2>
            <p className="text-xl text-gray-600">{ourServices.subheader}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {ourServices.content.map((item) => {
              return (
                <div
                  key={item.subtext}
                  className="relative flex flex-col items-center text-center justify-around p-6 h-[30dvh] bg-white rounded shadow-xl "
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src={`./images/${item.image}`}
                      width={48}
                      height={48}
                      alt={item.text}
                      className="filter invert"
                    />
                  </div>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    {item.text}
                  </h4>
                  <p className="text-gray-600 text-center">{item.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

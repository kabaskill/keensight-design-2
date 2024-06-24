import Image from "next/image";
import Link from "next/link";
import { ourServices } from "./utils/siteData";

export default function FeaturesBlocks({ services = ourServices }) {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-12 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">{ourServices.title}</h2>
            <p className="text-xl text-gray-600">{ourServices.description}</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-6 items-start md:max-w-2xl lg:max-w-3xl ">
            {services.list.map((item, index) => {
              let colSpanClasses = "lg:col-span-3";

              if (index === services.list.length - 1) {
                colSpanClasses = "md:col-span-2 lg:col-span-6 ";
              }

              return (
                <Link
                  key={item.image}
                  href={item.link}
                  className={`relative min-h-full flex flex-col items-center text-center  gap-4 p-6 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out ${colSpanClasses}`}
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src={item.image}
                      width={64}
                      height={64}
                      alt={item.subTitle}
                      className="filter invert"
                    />
                  </div>

                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    {item.subTitle}
                  </h4>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

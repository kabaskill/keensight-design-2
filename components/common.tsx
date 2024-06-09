export default function CommonEngagements({ product }: { product: any }) {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 my-24">
        <h3 className="text-5xl font-extrabold h3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-center">
          {product.subcontent.title}
        </h3>
        <p className="mb-8">{product.subcontent.description}</p>

        <ul className="bg-blue-400 text-center p-8 rounded-lg ">
          <h3 className="text-3xl text-white font-bold mb-8">Common Engagements</h3>
          
          <div className="flex flex-col lg:flex-row gap-8">

          {product.common.map((item: any) => {
            return (
              <li
                key={item.title}
                className="bg-blue-600 rounded-md p-8 text-center flex flex-col gap-8 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <h3 className="text-xl text-white font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </li>
            );
          })}
          </div>
        </ul>
      </div>
    </section>
  );
}

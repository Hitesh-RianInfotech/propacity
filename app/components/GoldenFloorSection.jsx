import Image from "next/image";

export default function GoldenFloorSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      {/* Heading and Button */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">Floor Plan</p>
          <h2 className="text-4xl md:text-5xl font-light italic text-gray-500">
            The Golden <span className="font-semibold text-black">Floor</span>
          </h2>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 bg-black text-white px-6 py-2 text-sm uppercase tracking-wider"
        >
          Master Plan
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div data-aos="fade-up" className="p-6 overflow-hidden  ">
          <Image
            src="/images/2.png"
            alt="Sapphire I"
            width={500}
            height={700}
            className="object-contain w-full h-auto mb-6 hover:scale-105 duration-300"
          />
        </div>

        {/* Card 2 */}
        <div data-aos="fade-up" className="p-6 ">
          <Image
            src="/images/3.png"
            alt="Sapphire II"
            width={500}
            height={700}
            className="object-contain w-full h-auto mb-6 hover:scale-105 duration-300"
          />
        </div>
      </div>
    </section>
  );
}

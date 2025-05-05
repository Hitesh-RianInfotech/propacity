import Image from "next/image";

export default function GoldenLifeSection() {
  return (
    <section className="bg-[#373543] text-white py-12 sm:py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Text Column */}
        <div data-aos="zoom-in-up"  className="w-full lg:w-1/2">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">Overview</p>
          <h2 className="text-4xl md:text-5xl italic font-semibold leading-tight mb-6">
            The Golden <br /> Life
          </h2>
          <div className="h-[1px] w-16 bg-gray-500 mb-6" />
          <p className="text-base leading-7 text-gray-200">
            You promise yourself and your loved ones brighter opportunities, a prospering tomorrow,
            and a purer life. Our promise is delivering spaces that help you fulfill yours. A
            high-street retail project in the heart of an auspicious region, Swarnim is a landmark.
            And, a worthy investment for the far-sighted. When you own your part of Swarnim, you own
            more than just affordable commercial shops in Gurgaon; you own a pure asset, a bright
            opportunity. It is your step toward the golden life.
          </p>
        </div>

        {/* Right Image Column */}
        <div data-aos="zoom-in-up" className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/1.webp"
            alt="Swarnim Commercial"
            width={600}
            height={400}
            className="rounded-md object-cover w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

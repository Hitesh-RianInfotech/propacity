export default function ParallaxSection({ image, title, subtitle, buttonText }) {
    return (
      <section
        className="relative h-screen bg-fixed bg-center bg-cover text-white"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Styled Title */}
            <h2 className="text-3xl md:text-6xl font-light leading-snug tracking-wide">
              <span className="text-white">
                {title}
              </span>
              <span className="font-serif text-white text-6xl md:text-8xl  italic">
                {subtitle}
              </span>
            </h2>
  
            {/* Button */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-block border border-white px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition duration-300"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
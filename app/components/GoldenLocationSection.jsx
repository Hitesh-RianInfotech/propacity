import Image from "next/image";
import {
  Users,
  Landmark,
  Route,
} from "lucide-react"; 

export default function GoldenLocationSection() {
  const features = [
    {
      icon: <Users className="w-5 h-5 text-yellow-600" />,
      text: "Located in a bustling community of 25,000 families",
    },
    {
      icon: <Landmark className="w-5 h-5 text-yellow-600" />,
      text: "Proximity and easy access to Gurugram’s city center and Delhi",
    },
    {
      icon: <Route className="w-5 h-5 text-yellow-600" />,
      text: "Well-connected to all major roads",
    },
  ];

  const timeline = [
    ["Delhi Mumbai Industrial Corridor", "5 minutes"],
    ["IGI Airport", "30 minutes"],
    ["G.D. Goenka School", "5 minutes"],
    ["K.R. Mangalam University", "5 minutes"],
    ["Medanta – The Medicity", "15 minutes"],
    ["Proposed Metro", "10 minutes"],
    ["Gurugram Railway Station", "20 minutes"],
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div data-aos="zoom-in-up" > 
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">Location</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-500 mb-1 italic">
            The Golden <span className="font-semibold text-black">Location</span>
          </h2>
          <div className="h-[1px] w-16 bg-gray-300 my-6" />
          <p className="mb-6 text-base text-gray-600">
            Swarnim’s position in Sector 5, Gurgaon, one of the city’s most promising sub-cities,
            makes it an irresistible choice for those looking to invest in commercial retail space
            in Gurgaon.
          </p>

          {/* Feature Points */}
          <div className="space-y-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-gray-600">
            Swarnim is a dream come true for investors looking for retail space in Gurgaon because
            here every opportunity is golden. Swarnim offers thoughtfully designed shops that
            promise high growth potential.
          </p>
          <p className="mt-2 text-gray-700">Welcome to a space where golden opportunities await.</p>
        </div>

        {/* Right Column – Map Image */}
        <div data-aos="zoom-in-up" className="w-full">
          <Image
            src="/images/map.webp"
            alt="Golden Location Map"
            width={600}
            height={600}
            className="w-full h-auto object-contain hover:scale-105 duration-300"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto mt-20 hidden lg:block">
        <div className="relative w-full border-t border-yellow-300">
          <div className="flex justify-between text-center text-sm text-gray-700 relative z-10">
            {timeline.map(([label, time], i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <div className="h-4 bg-yellow-400 w-px" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full mb-2" />
                <p className="font-medium whitespace-nowrap">{label}</p>
                <span className="text-xs text-gray-500">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile timeline - vertical */}
      <div className="lg:hidden mt-12 grid grid-cols-2 gap-y-6 gap-x-6">
  {timeline.map(([label, time], i) => (
    <div key={i} className="flex items-start gap-3">
      <div className="w-3 h-3 bg-yellow-400 rounded-full mt-1 shrink-0" />
      <div>
        <p className="text-gray-800 font-medium text-sm">{label}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

import React from "react";

export default function EnquiryFormSection() {
  return (
    <section className="py-20 px-6  md:px-20 bg-white bg text-gray-800">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl italic max-w-7xl m-auto font-light text-gray-500 mb-12">
        Enquire <span className="font-semibold text-black">Now</span>
      </h2>

      {/* Form Box */}
      <form className="border border-gray-400 p-6 md:p-10 space-y-6 max-w-7xl mx-auto">
        {/* Grid Inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-black bg-transparent outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-black bg-transparent outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-black bg-transparent outline-none py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Email Id<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full border-b border-black bg-transparent outline-none py-2"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-1">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            className="w-full border-b border-black bg-transparent outline-none py-2 resize-none"
            required
          />
        </div>

        {/* captcha */}
        <div className="bg-gray-100 border border-gray-300 p-4 w-[302px] h-[78px] flex items-center justify-center text-xs text-gray-500">
          [reCAPTCHA placeholder]
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3">
          <input type="checkbox" className="mt-1" required />
          <label className="text-sm">
            I accept the privacy policy and terms of use
          </label>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-black text-black px-6 py-2 uppercase text-sm hover:bg-black hover:text-white transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Text Section Below Form */}
      <div className="mt-12 max-w-7xl mx-auto text-sm  text-gray-700 space-y-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
        <div>
          <p className="font-semibold">Ganga Global Homes Private Limited</p>
          <p>
            Ground Floor, Vatika Tower A, Sector 54, Golf Course Road, Gurugram,
            Haryana 122003
          </p>
          <p className="mt-2">+91-1244192301</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 text-sm">
          <a href="#overview">Overview</a>
          <a href="#location">Location</a>
          <a href="#amenities">Amenities</a>
          <a href="#floor-plan">Floor Plan</a>
          <a href="#construction">Construction Update</a>
          <a href="#download">Download Brochure</a>
        </div>
        </div>
        <p className="text-xs text-gray-500">
          Disclaimer: All designs, specifications are illustrative and subject
          to change. All images are graphic depiction and purely artistic in
          nature.
        </p>
      </div>
    </section>
  );
}

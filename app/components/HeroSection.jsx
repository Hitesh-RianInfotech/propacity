import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

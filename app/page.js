"use client";
import { HeroSection } from "./components/HeroSection";
import GoldenLifeSection from "./components/GoldenLifeSection";
import GoldenLocationSection from "./components/GoldenLocationSection";
import GoldenFloorSection from "./components/GoldenFloorSection";
import EnquiryFormSection from "./components/EnquiryFormSection";
import ParallaxSection from "./components/ParallaxSection";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection />
      <GoldenLifeSection />
      <GoldenLocationSection />
      <GoldenFloorSection />
      <ParallaxSection
        image="/images/e.webp"
        title="The Golden "
        subtitle="Ecosystem"
        buttonText="Discover More"
      />
      <ParallaxSection
        image="/images/l.webp"
        title="The Golden "
        subtitle="Landmark"
        buttonText="Discover More"
      />
      <ParallaxSection
        image="/images/g.webp"
        title="The Golden "
        subtitle="Drive"
        buttonText="Discover More"
      />
      <ParallaxSection
        image="/images/a.webp"
        title="The Golden "
        subtitle="Address"

        buttonText="Discover More"
      />
      <ParallaxSection
        image="/images/c.webp"
        title="The Golden "
        subtitle="Choice"

        buttonText="Discover More"
      />
      <ParallaxSection
        image="/images/d.webp"
        title="The Golden "
        subtitle="Destination"

        buttonText="Discover More"
      />
      <EnquiryFormSection />
    </>
  );
}

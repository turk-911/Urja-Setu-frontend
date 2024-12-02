"use client";
import Steps from "./components/Beam";
import { CardCarousel } from "./components/CardCarousel";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Waste from "./components/Waste";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50">
      <Hero />
      <CardCarousel />
      <Steps />
      <Waste />
      <Footer />
    </div>
  );
}

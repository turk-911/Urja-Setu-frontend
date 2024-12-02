"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";

export function CardCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know Urja Setu.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ src }: { src: string }) => {
  return (
    <>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <Image
          src={src}
          alt="Content Image"
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const data = [
  {
    category: "Sell Garbage",
    title:
      "Users upload images of waste, and our AI/ML algorithms categorize and measure it by analyzing the quantity and weight for processing.",
    src: "/sell-garbage.jpg",
    content: <DummyContent src="/images/wasteImageUpload.webp" />,
  },
  {
    category: "Get and redeem Urja Coins",
    title:
      "Earn rewards like Coupons, discounts, and Energy Credits for their contributions, which are tracked via blockchain",
    src: "/reward-coins.jpg",
    content: <DummyContent src="/reward-landscape.jpg" />,
  },
  {
    category: "Waste to Energy",
    title:
      "Turns collected waste into renewable energy, creating a cycle of resource reuse and sustainability.",
    src: "/waste-to-energy.jpg",
    content: <DummyContent src="/recycle.jpg" />,
  },

  {
    category: "Real Time Monitoring",
    title:
      "The platform tracks waste collection and processing in real time, offering full transparency through integrated tracking systems",
    src: "/platform.jpg",
    content: <DummyContent src="/platform.jpg" />,
  },
  {
    category: "Reduce Pollution and Waste",
    title:
      "The platform incentivizes users and encourages recycling, which helps cut down on environmental pollution and waste.",
    src: "/reduce.jpg",
    content: <DummyContent src="/reduce.jpg" />,
  },
  {
    category: "Be Sustainable",
    title:
      "Directs waste to energy plants, supporting the shift to renewable energy sources.",
    src: "/direct.jpg",
    content: <DummyContent src="/direct.jpg" />,
  },
];

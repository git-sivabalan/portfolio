"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#0a0a0a] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction= "left"
        speed= "normal"
      />
    </div>
  );
}


const testimonials = [
    {
      quote: "Hi, I'm SivaBalan, a passionate FullStack Developer.",
      name: "SivaBalan",
      title: "Introduction",
    },
    {
      quote: "My skills include MERN Stack, Next.js, Bootstrap, Tailwind CSS, Sanity, and MySQL.",
      name: "SivaBalan",
      title: "Skills",
    },
    {
      quote: "I have interned as a FullStack Developer at Axexa Technology Solutions.",
      name: "SivaBalan",
      title: "Experience",
    },
    {
      quote: "Projects I have worked on include Caterserv static single page website, Axexa official website, Vidhya mobiles showroom website, and Billing Software.",
      name: "SivaBalan",
      title: "Projects",
    },
  ];
  

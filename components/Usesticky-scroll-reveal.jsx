"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";
import static_website from '@/public/static-website.jpg'
import dynamic from '@/public/ui-ux-representations-with-tablet.jpg'
import cms from '@/public/cms.jpg'
import api from '@/public/api.jpg'
const content = [
  {
    title: "Static Web Pages",
    description:
      "I can create visually appealing and highly optimized static web pages that deliver a seamless user experience, perfect for personal blogs, portfolios, and informational sites.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={static_website}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Static Web Pages"
        />
      </div>
    ),
  },
  {
    title: "Dynamic Web Pages",
    description:
      "I specialize in building dynamic web pages that interact with users in real-time, utilizing modern JavaScript frameworks to create interactive and responsive interfaces.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={dynamic}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Dynamic Web Pages"
        />
      </div>
    ),
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "I build and integrate CMS solutions like Sanity, allowing you to manage and update your website content effortlessly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src={cms}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Content Management Systems (CMS)"
      />
    </div>
    ),
  },
  {
    title: "API Development and Integration",
    description:
      "I design and implement APIs to facilitate seamless communication between different software systems, enhancing the functionality of your applications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={api}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="API Development and Integration"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "",
    
  }
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="md:p-10">
      <StickyScroll content={content} />
    </div>
  );
}

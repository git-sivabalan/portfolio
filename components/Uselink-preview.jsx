"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/link-preview";

export default function LinkPreviewDemo() {
  return (
    // I am SivaBalan, a final year B.Tech student in Information Technology, specializing as a fullstack developer. With a strong foundation in MERN Stack, Next.js, Tailwind CSS, Bootstrap, MySql, and Sanity, I have successfully completed four projects. I am passionate about leveraging these skills to create innovative and robust web applications that solve real-world challenges.
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">
          Framer Motion
        </LinkPreview>{" "}
        are a great way to build modern websites.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit{" "}
        <LinkPreview
          url="https://ui.aceternity.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Aceternity UI
        </LinkPreview>{" "}
        for amazing Tailwind and Framer Motion components.
      </p>
    </div>
  );
}

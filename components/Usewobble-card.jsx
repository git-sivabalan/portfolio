"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card";

import preview from "@/public/preview.webp";
export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            About
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            My name is Sivabalan, currently a final year B.Tech student in
            Information Technology at KSR College of Engineering. During my
            academic journey, I have been passionate about leveraging technology
            to solve real-world problems. My enthusiasm for software development
            began early, and I've actively participated in various college and
            school activities, where I explored different facets of technology
            and honed my skills.
          </p>
          <p className="mt-4 text-left text-base text-neutral-200">
            As a full stack developer, I am dedicated to mastering a diverse
            range of technologies and frameworks essential for creating robust
            and scalable web applications. My experience spans across frontend
            technologies like responsive design using Bootstrap and Tailwind
            CSS, as well as backend tools for database management and
            server-side rendering. I thrive on challenges and am passionate
            about delivering high-quality software solutions that meet client
            needs effectively.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Skills
        </h2>
        <p className="mt-4 max-w-[26rem] text-left   text-base/6 text-neutral-200">
          I am proficient in key frameworks and tools essential for modern web
          development, including the
          <div className="py-5">
            <p className="flex gap-4">
              {" "}
              <p>-</p> MERN Stack (MongoDB, Express.js, React, Node.js),
            </p>
            <p className="flex gap-4">
              {" "}
              <p>-</p> Next.js for server-side rendering,
            </p>
            <p className="flex gap-4">
              {" "}
              <p>-</p> Bootstrap and Tailwind CSS for responsive and styled
              websites,
            </p>
            <p className="flex gap-4">
              {" "}
              <p>-</p> Sanity for headless CMS solutions,
            </p>
            <p className="flex gap-4">
              {" "}
              <p>-</p> and MySQL for database management.{" "}
            </p>
          </div>
          These skills empower me to create robust, scalable, and user-friendly
          web applications.{" "}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="w-full">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Experience
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            At Axexa Technology Solutions, I had the opportunity to apply my
            skills as a full stack developer during an enriching internship
            experience. I have successfully completed four notable projects,
            showcasing my ability to handle both frontend and backend
            development tasks effectively. These projects have been instrumental
            in deepening my understanding of software architecture, project
            management, and the practical application of technologies such as
            React, Node.js, and Next js. I am committed to continuous learning
            and excited about the prospect of contributing to innovative
            projects that push the boundaries of web development.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}

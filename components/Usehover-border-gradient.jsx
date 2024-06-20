"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { VscDebugBreakpointData } from "react-icons/vsc";

export default function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center flex-wrap text-center gap-5">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>MERN</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>Next JS</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>MySql</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>Bootstrap</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>Tailwind</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>Snity</span>
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return <VscDebugBreakpointData />;
};

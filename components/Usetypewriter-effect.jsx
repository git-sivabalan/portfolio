"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import React from "react";

export default function Usetypewritereffect({ interact, setInteract, scrollToSignupForm }) {
  const words = [
    {
      text: "Dedicated coder,",
      className: "text-blue-500 dark:text-[#F2613F]",
    },
    {
      text: "turning ideas into functional software.",
    },
  ];
  const intro = [
    {
      text: "I am ",
    },
    {
      text: "SivaBalan",
      className: "text-blue-500 dark:text-[#F2613F]",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] mb-52">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs text-center sm:text-base">
        A fullstack developer bridges the gap between front-end elegance and back-end robustness
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          onClick={() => setInteract(!interact)}
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
        >
          Interact
        </button>
        <button
          onClick={scrollToSignupForm}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}

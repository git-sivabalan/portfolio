"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Get Connection`;
const description = `Connect with me on LinkedIn to stay updated with my latest projects and professional achievements.`;
// MERN Stack, Next.js, Tailwind CSS, Bootstrap, MySql, and Sanity, I have successfully completed four projects. I am passionate about leveraging these skills to create innovative and robust web applications that solve real-world challenges.

export default function TextGenerateEffectDemo() {
  return (
    <div className="flex flex-col">
      <TextGenerateEffect words={words} />;
      <TextGenerateEffect words={description} />
    </div>
  );
}

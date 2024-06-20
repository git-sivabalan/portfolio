import { HoverEffect } from "./card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={connect} />
    </div>
  );
}
export  const connect = [
  {
    title: "GitHub",
    description: "Check out my projects and contributions on GitHub.",
    link: "https://github.com/git-sivabalan",
  },
  {
    title: "LinkedIn",
    description: "Connect with me on LinkedIn to stay updated with my latest projects and professional achievements.",
    link: "https://www.linkedin.com/in/sivabalan-k-174141229",
  },
];

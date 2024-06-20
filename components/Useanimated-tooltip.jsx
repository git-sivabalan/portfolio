"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
const people = [
  {
    id: 1,
    name: "Developer",
    designation: "Code Creator",
    image:
      "https://img.freepik.com/free-photo/young-man-working-home-with-laptop-freelance-concept_1057-44722.jpg?t=st=1718804203~exp=1718807803~hmac=60358e25e5a4ae08905ebc1fd79db6cbbacdcf106e44a8c5777a640c43bfed75&w=740",
  },
  {
    id: 2,
    name: "Problem-solver",
    designation: "Solution Finder",
    image:
      "https://img.freepik.com/free-photo/executive-with-hand-drawn-light-bulb_1232-169.jpg?t=st=1718804783~exp=1718808383~hmac=e64fce942bfb56c9a18db32a3a9d584625fb22908a82bc959054318f0cc304c9&w=740",
  },
  {
    id: 3,
    name: "Learner",
    designation: "Knowledge Seeker",
    image:
      "https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?t=st=1718804550~exp=1718808150~hmac=ea3cf20915bcb54407a89d0d5d3e7e13428b1c19c482a8744093deb7df6a8c23&w=740",
  },
  {
    id: 4,
    name: "Team-playern",
    designation: "Collaboration Enthusiast",
    image:
      "https://img.freepik.com/free-photo/business-people-teamwork_53876-89051.jpg?t=st=1718804847~exp=1718808447~hmac=fb764af65bfb1c1e767924fa83c828a32fcf6ab0806a7e21c3bb82b17ce1d3ed&w=996",
  },
  {
    id: 5,
    name: "Innovator",
    designation: "Idea Generatorr",
    image:
      "https://img.freepik.com/free-photo/woman-s-hand-presenting-futuristic-technology-digital-remix_53876-104222.jpg?t=st=1718804633~exp=1718808233~hmac=ae610f8b0372ae7d1a4acf90f91ee11362974a2d528e613f185bfadbbbccff0e&w=900",
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

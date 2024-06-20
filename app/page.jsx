"use client";
import React, { useState, useRef } from "react";
import Usetypewritereffect from "@/components/Usetypewriter-effect";
import StickyScrollRevealDemo from "@/components/Usesticky-scroll-reveal";
import Use3dpin from "@/components/Use3d-pin";
import { Use3dpin2, Use3dpin3, Use3dpin4 } from "@/components/Use3d-pin";
import InfiniteMovingCardsDemo from "@/components/Useinfinite-moving-cards";
import AnimatedTooltipPreview from "@/components/Useanimated-tooltip";
import CardHoverEffectDemo from "@/components/Usecard-hover-effect";
import Chatbot from "@/components/Chatbot";
import SignupFormDemo from "@/components/Useform";
import ChatIcon from "@/components/ChatIcon";
import LinkPreviewDemo  from "@/components/Uselink-preview";
const Page = () => {
  const [interact, setInteract] = useState(false);
  const signupFormRef = useRef(null);

  const handleChatIconClick = () => {
    setInteract(!interact);
  };

  const handleCloseChatbox = () => {
    setInteract(false);
  };

  const scrollToSignupForm = () => {
    signupFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black overflow-hidden">
      <div className="flex justify-between pt-10">
        <div className="name text-white font-medium text-xl md:block hidden ml-3">
          SIVABALAN <span className="text-[#F2613F]">K</span>
        </div>
        <div className="links md:mr-20 w-full md:w-auto">
          <AnimatedTooltipPreview />
        </div>
      </div>
      {/* Hero Content */}
      <div className="p-5 flex flex-col">
        <div>
          <Usetypewritereffect
            interact={interact}
            setInteract={setInteract}
            scrollToSignupForm={scrollToSignupForm}
          />
        </div>
      </div>
      {/* <div className="w-full">
        <InfiniteMovingCardsDemo />
      </div> */}
      {/* What I Can do */}
      <div className="flex md:flex-row flex-col ">
        <div className="md:w-4/6 w-11/12">
          <div className="text-white text-center text-3xl font-medium mb-16">
            What I Can do
          </div>
          <StickyScrollRevealDemo />
        </div>
        <div className="md:w-2/6 flex justify-center items-center">
          <CardHoverEffectDemo />
        </div>
      </div>
      {/* Projects */}
      <div className=" py-6">
        <div className="text-white text-center text-3xl font-medium my-7">
          Projects
        </div>
        <div className="md:grid grid-cols-3">
          <Use3dpin />
          <Use3dpin2 />
          <Use3dpin3 />
        </div>
        <Use3dpin4 />
      </div>

      {/* Signup Form */}
      <div ref={signupFormRef}>
        <div className="form md:flex">
          <SignupFormDemo />
          <div className="flex">
          <LinkPreviewDemo/>
          </div>
        </div>
      </div>
      {interact && (
        <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
          <Chatbot onClose={handleCloseChatbox} />
        </div>
      )}
      {!interact && <ChatIcon onClick={handleChatIconClick} />}
    </div>
  );
};

export default Page;

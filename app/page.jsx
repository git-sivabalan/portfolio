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
import LinkPreviewDemo from "@/components/Uselink-preview";
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
        <div className="name text-white md:block hidden ml-3 font-bold text-center md:text-2xl text-xl">
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
          <div className="text-[#9e9e9e] font-bold text-center md:text-3xl text-xl mb-16">
            PROFICIENCIES
          </div>
          <StickyScrollRevealDemo />
        </div>
        <div className="md:w-2/6 flex flex-col justify-start items-center md:mt-0 mt-20">
          <div className="text-[#9e9e9e] font-bold text-center md:text-3xl text-xl mb-16">
            CONNECT
          </div>
          <div className="flex">
            <CardHoverEffectDemo />{" "}
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className=" pt-12">
        <div className="text-[#9e9e9e] font-bold text-center md:text-3xl text-xl mt-20  mb-5">
          PROJECTS
        </div>
        <div className="md:grid grid-cols-2 mt-[-10%] sm:mt-0">
          <Use3dpin />
          <Use3dpin2 />
          <Use3dpin3 />
          <Use3dpin4 />
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      {/* Signup Form */}
      <div ref={signupFormRef}>
        <div className="form md:flex">
          <SignupFormDemo />
          <div className="flex">
            <LinkPreviewDemo />
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

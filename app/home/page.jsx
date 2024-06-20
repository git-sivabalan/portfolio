import React from "react";
import Usetypewritereffect from "@/components/Usetypewriter-effect";
import StickyScrollRevealDemo from "@/components/Usesticky-scroll-reveal";
import Use3dpin from "@/components/Use3d-pin";
import {Use3dpin2} from "@/components/Use3d-pin";
import {Use3dpin3} from "@/components/Use3d-pin";
import InfiniteMovingCardsDemo from "@/components/Useinfinite-moving-cards";
import AnimatedTooltipPreview from "@/components/Useanimated-tooltip";
import CardHoverEffectDemo from "@/components/Usecard-hover-effect"

const page = () => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="flex justify-between  pt-10">
        <div className="name text-white font-medium text-xl md:block hidden ml-3">SIVABALAN <span className="text-[#F2613F]">K</span></div>
        <div className="links md:mr-20  w-full md:w-auto"><AnimatedTooltipPreview/></div>
      </div>
      {/* Hero Content */}
      <div className="p-5 flex flex-col">
        <div className="">
          <Usetypewritereffect />
        </div>
      </div>

      {/* What I Can do */}

      <div className="flex md:flex-row flex-col bg-[#131313]">
        <div className="md:w-4/6 w-11/12 ">
          {/* <div className="text-white  text-center text-3xl font-medium">What I Can do</div> */}
          <StickyScrollRevealDemo />
        </div>
        <div className="md:w-2/6  flex justify-center items-center">
          {/* <Use3dpin /> */}
          <CardHoverEffectDemo />

        </div>
      </div>

        <div className="w-full">
        <InfiniteMovingCardsDemo/>
        </div>
        
      {/* Projects */}
      <div className=" bg-[#111111] py-6">
        <div className="md:text-5xl text-3xl text-[#fff] font-medium justify-center items-center flex">Projects</div>
       <div className="flex">
       <Use3dpin/>
        <Use3dpin2/>
        <Use3dpin3/>
       </div>
      </div>
      
    </div>
  );
};

export default page;

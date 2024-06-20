"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import preview from "@/public/preview.webp";
import p1 from '@/public/p1.png'
import p2 from '@/public/p2.png'
import p3 from '@/public/p3.jpg'
import p4 from '@/public/p4.png'
export default function Use3dpin() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="https://caterserve-website.vercel.app/"
        href="https://caterserve-website.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
        {/* <h1 className="mb-4 font-semibold text-[#F2613F]">Project - 1</h1> */}
          <h3 className="max-w-xs !pb-8 !m-0 font-bold  text-base text-slate-100 ">
            Cater Serve
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {/* My First Project Using HTML, CSS and Bootstrap */}
            </span>
          </div>
          <Image
      src={p1}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      </PinContainer>
      
    </div>
  );
}


export  function Use3dpin2() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="https://mobile-showroom.vercel.app/"
        href="https://mobile-showroom.vercel.app/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
        {/* <h1 className="mb-4 font-semibold text-[#F2613F]">Project - 1</h1> */}
          <h3 className="max-w-xs !pb-8 !m-0 font-bold  text-base text-slate-100 ">
            Vidhya Mobiles
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {/* My First Project Using HTML, CSS and Bootstrap */}
            </span>
          </div>
          <Image
      src={p2}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      </PinContainer>
      
    </div>
  );
}

export  function Use3dpin3() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Not Hosted"
        href="Not Hosted"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
        {/* <h1 className="mb-4 font-semibold text-[#F2613F]">Project - 1</h1> */}
          <h3 className="max-w-xs !pb-8 !m-0 font-bold  text-base text-slate-100 ">
            Billing Software
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {/* My First Project Using HTML, CSS and Bootstrap */}
            </span>
          </div>
          <Image
      src={p3}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      </PinContainer>
      
    </div>
  );
}



export  function Use3dpin4() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Not Hosted"
        href="Not Hosted"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[30rem] ">
        {/* <h1 className="mb-4 font-semibold text-[#F2613F]">Project - 1</h1> */}
          <h3 className="max-w-xs !pb-8 !m-0 font-bold  text-base text-slate-100 ">
            Portfolio
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {/* My First Project Using HTML, CSS and Bootstrap */}
            </span>
          </div>
          <Image
      src={p4}
      width={500}
      height={500}
      alt="Picture of the author"
    />
        </div>
      </PinContainer>
      
    </div>
  );
}

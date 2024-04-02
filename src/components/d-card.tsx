"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <main>
  
      <h1 className="text-3xl  mt-14 font-bold text-white dark:text-white text-center justify-center" >My Certififcate</h1>
    <CardContainer className="inter-var">
      <CardBody className=" certificate_card sm:ml-6 sm:mr-6  bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[5rem] sm:h-[5rem]  rounded-xl pl-3 pr-3 border  ">
        
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/freecodecamp.PNG"
            height="800"
            width="800"
            className="certificate_img h-62 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          {/* <CardItem
            translateZ={20}
            as={Link}
            href="https://www.freecodecamp.org/certification/SyedaHafsa/responsive-web-design"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            link →
          </CardItem> */}
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
    </main>
  );
}

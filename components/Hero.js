import React from "react";
import Image from "next/image";
import secondhand from "../photos/secondhand.webp";
import firsthand from "../photos/firsthand.webp";

const Hero = () => {
  return (
    <div className="bg-[#10101a] h-screen relative overflow-hidden  ">
      <div className="absolute left-0 top-[5.8rem] bg-[url('../photos/firsthand.webp')]  w-[10rem] h-[10rem] bg-left text-white bg-contain bg-no-repeat"></div>

      <div className="flex flex-col w-full  mx-auto ">
        {/* Header */}
        <div className="w-full flex justify-center">
          <div className="fixed flex items-center justify-center bg-[#22222e]  border-[1px] border-[#303040] text-[#f7f5f5] rounded-[0.7rem] h-[3.4rem]  z-10 opacity-95 mt-10   w-full max-w-[18.5rem]   ">
            <h1 className="mr-6">📁 Projects</h1>
            <h1 className="mr-6">💼 CV</h1>
            <h1>📞 Contact</h1>
          </div>
        </div>

        {/* Hero Content */}
        <div
          className="header__content  
          mt-[200px] mx-[1.8rem]"
        >
          <div className="text-white text-[42px] leading-[44px] ">
            <span>turning ideas into </span>
            <span>real life </span>
            <span className="text-blue-300">products </span>
            <span>is my calling.</span>
          </div>

          <div className="">
            <p id="vp" className="text-[#c4c4c4] text-[13px] leading-[12px]">
              VIEW PROJECTS
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[24rem] bg-[url('../photos/secondhand.webp')]  w-[15rem] h-[15rem] bg-right text-white bg-contain bg-no-repeat"></div>
    </div>
  );
};

export default Hero;

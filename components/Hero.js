import React, { useState } from "react";
import Image from "next/image";
import secondhand from "../photos/secondhand.webp";
import firsthand from "../photos/firsthand.webp";

import { BiToggleRight, BiToggleLeft } from "react-icons/bi";
import { BsMoon, BsSun } from "react-icons/bs";
import linkedin from "../assets/linkedin (3).png";
import youtube from "../assets/youtube.png";
import github from "../assets/github (1).png";

const Hero = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative overflow-hidden  ">
      <div className=" absolute left-0 top-[6rem] sm:top-[5rem] bg-[url('../photos/firsthand.webp')]  w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] bg-left text-white bg-contain bg-no-repeat md:w-[14rem] md:h-[14rem] md:top-[4rem] lg:w-[17rem] lg:h-[17rem] lg:top-[2rem] "></div>

      <div className="flex flex-col w-full  mx-auto  ">
        {/* Header */}
        <div className="w-full flex justify-center ">
          <div className="fixed flex items-center justify-center sm:justify-between sm:px-8 bg-[#22222e]  border-[1px] border-[#656565] text-[#ffffff] rounded-[1rem] h-[3.4rem] md:h-[4rem] md:max-w-[28rem] z-10 opacity-95 mt-10   w-full  max-w-[19.6rem] sm:max-w-[24rem] lg:text-[20px] lg:h-[4rem] lg:max-w-[35rem] lg:px-[4rem] sm:rounded-[2rem] mm:max-w-[18rem] ">
            <h1 className="mr-6 cursor-pointer">📁 Projects</h1>
            <h1 className="mr-6 cursor-pointer">💼 CV</h1>
            <h1 className="cursor-pointer">📞 Contact</h1>
          </div>
        </div>

        {/* Hero Content */}
        <div
          className="header__content  
          mt-[200px] mx-[1.8rem] vs:mx-[3rem] sm:mx-[4rem]  lg:mt-[200px] "
        >
          <div className="w-full lg:max-w-[1011px] lg:mx-auto ">
            <div className="text-white text-[42px] sm:text-[50px] leading-[43px] sm:leading-[55px] md:text-[71px] md:leading-[71px] max-w-[27rem] sm:max-w-[33rem] md:max-w-[39rem] lg:text-[84px] lg:leading-[84px]   lg:max-w-[44rem] mm:text-[38px]">
              <span>Turning ideas into </span>

              <span>real life </span>
              <h1 id="products" className=" inline-block">
                products
              </h1>
              <span> is my calling.</span>
            </div>
          </div>

          <div className="lg:max-w-[1011px] mx-auto">
            <div className="relative aft lg:max-w-[1011px]  w-fit  ">
              <p className="text-[#c4c4c4] text-[14px] pb-[2px] leading-[12px] mt-[5.5rem]  tracking-[0em] md:text-[15px] lg:text-[20px] cursor-pointer">
                VIEW PROJECTS
              </p>
            </div>
          </div>

          <div
            className="mt-[6.5rem] flex justify-between lg:mt-[6rem] lg:max-w-[1011px] lg:mx-auto"
            onClick={() => setToggle(!toggle)}
          >
            <div className="">
              {toggle ? (
                <div className="relative cursor-pointer">
                  <BiToggleRight className="w-[4rem] h-[4rem] text-[#ffff] lg:w-[5rem] lg:h-[5rem]" />
                  <BsSun className="absolute w-[0.95rem] h-[0.95rem] text-[#ffff] top-6 left-4 lg:w-[1.1rem] lg:h-[1.1rem] lg:top-[1.92rem] lg:left-[1.25rem]" />
                </div>
              ) : (
                <div className="relative cursor-pointer">
                  <BsMoon className="w-[0.8rem] h-[0.8rem] text-[#ffff] absolute top-6 left-[2.25rem] lg:w-[1.1rem] lg:h-[1.1rem] lg:top-[1.9rem] lg:left-[2.75rem]" />
                  <BiToggleLeft className="w-[4rem] h-[4rem] text-[#ffff] lg:w-[5rem] lg:h-[5rem]" />
                </div>
              )}
            </div>
            <div className="flex items-center ">
              <ul className="flex items-center space-x-6 lg:space-x-10 z-50">
                <li className="cursor-pointer">
                  <img
                    src={github.src}
                    alt=""
                    className="w-7 h-7 lg:w-9 lg:h-9 "
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    src={linkedin.src}
                    alt=""
                    className="w-7 h-7 lg:w-9 lg:h-9"
                  />
                </li>
                <li className="cursor-pointer">
                  <img
                    src={youtube.src}
                    alt=""
                    className="w-7 h-7 lg:w-9 lg:h-9"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-[21rem] bg-[url('../photos/secondhand.webp')]  w-[15rem] sm:w-[17rem] h-[15rem] sm:h-[17rem] bg-right text-white bg-contain bg-no-repeat md:w-[23rem] md:h-[23rem] md:top-[21rem] lg:w-[25rem] lg:h-[25rem] lg:top-[20rem]"></div>
    </div>
  );
};

export default Hero;

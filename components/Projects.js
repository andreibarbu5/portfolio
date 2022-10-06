import Image from "next/image";
import React from "react";

import insta1 from "../assets/insta1.jpeg";
import youtube from "../assets/youtube.png";
import github from "../assets/github (1).png";
import number1 from "../assets/number1.svg";
import number2 from "../assets/number2.svg";
import number3 from "../assets/number3.svg";
import login1 from "../assets/login1.png";
import movie2 from "../assets/movie2.jpeg";

const Projects = () => {
  return (
    <div className="text-white mx-[1.8rem] mt-[2rem] sm:mt-[6rem] ">
      {/* Projects Intro */}
      <div className="">
        <div className="flex items-center text-[27px] ">
          <h1 className="text-[32px] mr-2 ">My Projects</h1>
          <span>💼</span>
        </div>

        <p className="text-[#d2cfcf] mt-4 text-[19px] ">
          Hello stranger! 👋, my name is Andrei and I am a passionate Web
          Developer.
        </p>
      </div>
      {/* Project Cards */}
      <div className="w-full mx-auto px-[1.5rem] ">
        {/* First Card */}
        <div className="relative bg h-[33.5rem]  bg-[#161625] mt-20 rounded-[3rem] px-[1.5rem] text-center">
          <div className="absolute -right-6 -top-6 h-32 w-32">
            <Image src={number1} alt="" className=" " />
          </div>
          <div className=" h-84 w-full  mx-auto overflow-hidden pt-8">
            <img
              src={insta1.src}
              alt=""
              className="w-[17rem] h-[18rem]  mx-auto rounded-[3rem]"
            />
          </div>
          <p className="  text-[20px] mt-4 w-40   mx-auto text-[#c12a7b]">
            Full Stack Social Media App
          </p>

          <p className="flex justify-center items-center  cursor-pointer mt-3   border rounded-[2rem] w-32 h-[2.3rem] mx-auto p-1 text-[#868484] border-[#4e4d4d]">
            Live App
          </p>

          <div className="flex justify-between mx-4 mt-4 ">
            <div className="flex items-center justify-between   relative mr-2 border border-[#4e4d4d] rounded-[2rem] w-28 h-10 px-[1rem]">
              <p className="cursor-pointer    text-[#868484] ">Code</p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={github} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between   relative  border border-[#4e4d4d] rounded-[2rem] w-28 h-10 px-[1rem]">
              <p className="cursor-pointer    text-[#868484]  ">Video </p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="relative bg h-[32rem]  bg-[#161625] mt-20 rounded-[3rem] px-[1.5rem] text-center">
          <div className="absolute -right-7 -top-8 h-32 w-32">
            <Image src={number2} alt="" className=" " />
          </div>
          <div className=" h-84 w-full  mx-auto overflow-hidden pt-8">
            <img
              src={login1.src}
              alt=""
              className="   mx-auto rounded-[3rem]"
            />
          </div>
          <p className="  text-[20px] mt-4 w-40   mx-auto text-[#7b8cee] ">
            Mern Stack Authentication
          </p>
          <div className="flex justify-between mx-4 mt-4">
            <div className="flex items-center justify-between   relative mr-2 border border-[#4e4d4d] rounded-[2rem] w-28 h-12 px-[1rem]">
              <p className="cursor-pointer    text-[#868484] ">Code</p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={github} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between   relative  border border-[#4e4d4d] rounded-[2rem] w-28 h-12 px-[1rem]">
              <p className="cursor-pointer    text-[#868484] ">Video</p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="relative bg h-[32rem]  bg-[#161625] mt-20 rounded-[3rem] px-[1.5rem] text-center">
          <div className="absolute -right-7 -top-8 h-32 w-32">
            <Image src={number3} alt="" className=" " />
          </div>
          <div className=" h-84 w-full  mx-auto overflow-hidden pt-8">
            <img
              src={movie2.src}
              alt=""
              className="   mx-auto rounded-[3rem]"
            />
          </div>

          <p className="  text-[20px] mt-4 w-40   mx-auto text-[#cd5f21]">
            Movies App TMDB Api
          </p>

          <div className="flex justify-between mx-4 mt-4">
            <div className="flex items-center justify-between   relative mr-2 border border-[#4e4d4d] rounded-[2rem] w-28 h-12 px-[1rem]">
              <p className="cursor-pointer    text-[#4e4d4d] ">Code</p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={github} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-between   relative  border border-[#4e4d4d] rounded-[2rem] w-28 h-12 px-[1rem]">
              <p className="cursor-pointer    text-[#4e4d4d] ">Video</p>
              <div className=" w-6 h-6  cursor-pointer ">
                <Image src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

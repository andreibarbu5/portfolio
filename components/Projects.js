import Image from "next/image";
import React from "react";

import insta1 from "../assets/insta1.jpeg";
import youtube from "../assets/youtube.png";
import github from "../assets/github (1).png";

const Projects = () => {
  return (
    <div className="text-white mx-[1.8rem] mt-16 sm:mt-[6rem] h-screen ">
      {/* Projects Intro */}
      <div className="">
        <div className="flex items-center text-[27px] ">
          <h1 id="work" className="text-[32px] mr-2 ">
            My Projects
          </h1>
          <span>💼</span>
        </div>

        <p className="text-[#d2cfcf] mt-4 ">
          Hello stranger! 👋, my name is Andrei and I am a passionate Web
          Developer.
        </p>
      </div>
      {/* Project Cards */}
      <div className="w-full mx-auto px-[1.5rem] ">
        <div className="h-[32rem]  bg-[rgb(27,24,35)] mt-8 rounded-[3rem] px-[1.5rem] text-center">
          <div className=" h-84 w-full  mx-auto overflow-hidden pt-8">
            <img
              src={insta1.src}
              alt=""
              className="w-[17rem] h-[18rem]  mx-auto rounded-[3rem]"
            />
          </div>
          <p className="text-[20px] mt-4 w-40   mx-auto">
            Full Stack Social Media App
          </p>

          <p className="mt-3   border rounded-[2rem] w-40 mx-auto p-1 text-[#828080] border-[#828080]">
            Visit the website
          </p>

          <div className="flex justify-center mt-3 ">
            <div className="w-8 mr-8">
              <Image src={github} alt="" />
            </div>
            <div className="w-8">
              <Image src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

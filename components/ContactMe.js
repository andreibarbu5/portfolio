import Image from "next/image";
import React from "react";
import linkedin from "../assets/linkedin (3).png";
import youtube from "../assets/youtube.png";
import github from "../assets/github (1).png";
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
/* */
const Recap = () => {
  return (
    <div className="mx-[2.8rem] mt-16">
      <div className="">
        <p className="text-[#ffff] text-[32px]">Sold Yet? 🤙 </p>
        <p className="text-[#c9c6c6] text-[22px] mt-4">
          Thanks for stopping by, I’m currently looking to join a new team of
          creative designers and developers. If you think we might be a good fit
          for one another, send me a message on
          <span className="text-white text-[21px]"> LinkedIn </span>
          or an <span className="text-white text-[21px]">Email </span>
          📧.
        </p>
      </div>

      <div className="">
        <p className="text-[#ffff] text-[31px] mt-16">
          Dont be a stranger! 👋{" "}
        </p>
        <p className="text-[#c9c6c6] text-[22px] mt-4">
          Connect with me online
        </p>
        <div className=" ">
          <span className="text-[#c9c6c6] flex items-center py-4">
            <Image
              src={github}
              alt=""
              className="w-12 h-12"
              height="32"
              width="32"
            />
            <p className="text-[18px] ml-2">GitHub</p>
          </span>
          <span className="text-[#c9c6c6] flex items-center py-4">
            <Image
              src={linkedin}
              alt=""
              className="w-12 h-12"
              height="32"
              width="32"
            />
            <p className="text-[18px] ml-2">LinkedIn</p>
          </span>
          <span className="text-[#c9c6c6] flex items-center py-4">
            <Image
              src={youtube}
              alt=""
              className="w-12 h-12"
              height="32"
              width="32"
            />
            <p className="text-[18px] ml-2">Youtube</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recap;

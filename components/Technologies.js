import Image from "next/image";
import React from "react";
import bootstrap from "../assets/1bootstrap.png";
import express from "../assets/1express.png";
import firebase from "../assets/firebase.png";
import js from "../assets/js2.png";
import jwt from "../assets/jwt.svg";
import mui from "../assets/1materialui.png";
import nextjs from "../assets/nxt.webp";
import node from "../assets/1node.png";
import react from "../assets/react2.png";
import recoil from "../assets/1recoil.png";
import styled from "../assets/styled.png";
import tailwind from "../assets/tailwind.png";
const Reviews = () => {
  const firstlogos = [
    bootstrap,
    express,
    firebase,
    js,
    jwt,
    mui,
    bootstrap,
    express,
    firebase,
    js,
    jwt,
    mui,
  ];
  const secondlogos = [
    react,
    tailwind,
    nextjs,
    node,
    recoil,
    styled,
    react,
    tailwind,
    nextjs,
    node,
    recoil,
    styled,
  ];
  return (
    <div>
      <div className="flex flex-start pt-16 mx-[1.8rem] vs:mx-[3rem] sm:mx-[4rem]  ">
        <p className="text-white text-[24px]">Technologies I Use 🖥️ </p>
      </div>
      <div className="slide-body   py-12 ">
        <div className="slide-track space-x-4">
          {firstlogos.map((logo) => (
            <div className="flex relative    p-3 overflow-hidden">
              <Image
                src={logo}
                className="absolute rounded-full  "
                height={90}
                width={90}
              />
            </div>
          ))}
        </div>
        <div className="slide-track2 space-x-4 mt-8 ">
          {secondlogos.map((logo) => (
            <div className="flex relative    p-3 overflow-hidden">
              <Image
                src={logo}
                className="absolute rounded-full  "
                height={90}
                width={90}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

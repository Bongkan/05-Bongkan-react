import React from "react";
import ProfilePic from "../assets/pic.jpg";

const Owner = () => (
  <div>
    <h1 className="text-4xl font-bold my-8 text-center">Fear - Group 4 - 05</h1>
    <a
      href="https://www.facebook.com/Nanosweet159"
      target="_blank"
      className="flex justify-center rounded"
    >
      <img src={ProfilePic} className="w-[300px] h-[300px] rounded" />
    </a>
    <div className="p-5 flex justify-center ">
      <div className="w-[500px] flex flex-col items-center">
        <p className="">
          Hi! I'm Fear, I like to eat Mooping and fried chicken. I have a severe
          backache, you can invite me to any physical therapy seesion!.
        </p>
        <p className="">One day, ฉันจะเป็นราชาโจรสลัดให้ได้เลย</p>
      </div>
    </div>
  </div>
);

export default Owner;

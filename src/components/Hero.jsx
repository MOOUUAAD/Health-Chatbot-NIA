import React from "react";
import Chatbot from "./Chatbot";

const Hero = () => {
  return (
    <div className="relative pt-32 bg-top bg-cover bg-no-repeat bg-[url('https://content.presentermedia.com/files/clipart/00029000/29855/ai_robot_doctor_800_wht.jpg')] md:bg-[url('https://static.vecteezy.com/system/resources/previews/033/118/415/large_2x/robotic-doctor-with-artificial-intelligence-photo.JPG')] h-screen">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.65)] bg-fixed">
        <div className="flex mt-36 items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight ">
              Your next doctor <br />
              <span>
                might be a <span className="text-indigo-400">Robot</span>{" "}
              </span>
            </h2>
            <a
              type="button"
              className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100  cursor-pointer"
              data-te-ripple-init=""
              data-te-ripple-color="light"
              onClick={() => {
                window.botpressWebChat.sendEvent({ type: "show" });
              }}
            >
              Get start
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

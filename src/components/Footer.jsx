import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class=" rounded-lg shadow m-3 ">
      <div class="w-full mx-auto max-w-screen-xl p-2 flex flex-col justify-center items-center ">
        <h1 class="text-sm text-gray-500 sm:text-center ">Powered by </h1>
        <div className="flex ">
          <div className="flex flex-col md:flex-row justify-center items-center gap-1">
            <a
              href="https://linkedin.com/in/mouad-el-maslouhi-438038295"
              target="_blank"
              class="text-white hover:text-blue-500 duration-150"
            >
              Mouad El Maslouhi
            </a>
            <a href="https://github.com/MOOUUAAD">
              <FaGithub className=" cursor-pointer hover:fill-gray-700 duration-150" />
            </a>
          </div>
          <span className="text-gray-500 mx-2"> & </span>{" "}
          <div className="flex flex-col md:flex-row  justify-center items-center gap-1">
            <a
              href="https://www.linkedin.com/in/othmane-tachafine-213275245/"
              target="_blank"
              class="text-white hover:text-blue-500 duration-150"
            >
              Othmane Tachafine
            </a>
            <a href="">
              <FaGithub className=" cursor-pointer hover:fill-gray-700 duration-150" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer class=" rounded-lg shadow m-4 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 flex flex-col justify-center items-center ">
        <h1 class="text-sm text-gray-500 sm:text-center ">Powered by </h1>
        <div> <a
          href="https://linkedin.com/in/mouad-el-maslouhi-438038295"
          target="_blank"
          class="text-white"
        >
          Mouad El Maslouhi
        </a> <span className="text-gray-500">&</span> <a
          href="https://www.linkedin.com/in/othmane-tachafine-213275245/"
          target="_blank"
          class="text-white"
        >
          Othmane Tachafine
        </a></div>
       
      </div>
    </footer>
  );
};

export default Footer;

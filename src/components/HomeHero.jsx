import React from "react";

const HomeHero = () => {
  return (
    <div className="relative bg-gray-900 pt-2 mb-20 ">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://www.nottingham.ac.uk/medicine/images-multimedia/research/research-areas/stem-cell-cc.jpg"
          alt=""
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-8xl py-10 sm:pb-32 sm:pt-10 lg:px-7 lg:py-16">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-24">
          <p className="mt-2 text-5xl font-bold tracking-tight text-white ">
            Association NIA
          </p>
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            National Institutional Acceleration
          </h2>
          <div className="mt-7">
                  <p className=" text-white mt-4 text-base leading-7">
                    L'Association NIA incarne l'excellence dans le domaine de la
                    recherche scientifique et de linnovation technologique. En
                    tant qu'organisme à but non lucratif, elle se distingue par
                    son approche multidisciplinaire, opérant au sein du milieu
                    académique avec une vision pionnière et distinguée ; se
                    positionner à lintersection des instituts universitaires et
                    des structures de recherche.
                  </p>
                  <p className=" text-white mt-4 text-base leading-7">
                    Fondée par des médecins et des ingénieurs, elle est
                    aujourdhui désormais un Hub scientifique d'échanges et de
                    collaboration, réunissant diverses facultés et écoles
                    supérieures, par une vision commune d'innovation et de
                    progrès technologique nationale.
                  </p>
                </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

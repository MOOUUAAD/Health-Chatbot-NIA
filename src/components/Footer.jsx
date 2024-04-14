import React from 'react'

const Footer = () => {
  return (
    <div id='contact' className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="flex justify-between flex-col md:flex-row gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
        <div className="sm:col-span-2 px-4 md:px-0">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
              About the project
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
            Our online chatbot platform bridges technology and medicine, offering quick access to personalized medical advice.
            </p>
            <p className="mt-4 text-sm text-white">
            With an intuitive interface and advanced AI, it assesses symptoms and provides preliminary diagnoses, along with treatment recommendations and lifestyle advice.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm md:self-end md:justify-self-end px-4 md:px-0">
          <p className="text-xl ml-2 font-bold tracking-wide text-white">
Contact:
          </p>
          <div className="flex">
            <p className="mr-1 text-[#60a5fa] font-semibold">Phone: </p>
            <a
              href="tel:0600909121"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              0600909121
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-[#60a5fa] font-semibold ">Email: </p>
          
            <a
              href="mailto:youssra.elkhoulali@associationnia.org"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-white hover:text-deep-purple-800"
            >
              youssra.elkhoulali@associationnia.org
            </a>
          </div>

        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="px-4 text-sm text-white">
          © Copyright 2024 All rights reserved.
        </p>
       
      </div>
    </div>
  );
}

export default Footer
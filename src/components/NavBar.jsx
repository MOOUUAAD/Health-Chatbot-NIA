import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <nav className="bg-blue-900 h-[70px] fixed w-full z-20 top-0 shadow-xl">
    <div className="flex items-center mx-auto h-full px-4 ">
      <a
        className="flex items-center "
        onClick={refreshPage}
      >
        <img src="/assets/logo.png" alt="logo" className='h-10 md:h-14 cursor-pointer '/>
      </a>
      
      
      <div
        className="w-full flex justify-center"
        id="navbar-sticky"
      >
        <ul className="flex md:p-4 font-medium  border-gray-100 rounded-lg  space-x-4 rtl:space-x-reverse flex-row border-0 bg-blue-900 ">
          <li>
          <Link 
            to="/"
              className="block py-2 px-2 font-semibold rounded-full hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-900 md:py-1 duration-200"
              aria-current="page"
            >
              Home
              </Link>
          </li>
          <li>
          <Link 
            to="/chatbotpage"
              className="block py-2 px-2 font-semibold rounded-full hover:bg-gray-100 md:hover:bg-white md:hover:text-blue-900 md:py-1 duration-200"
              aria-current="page"
            >
              Chatbot
            </Link>
          </li>

        </ul>
        
      </div>
      
    </div>
</nav>
  )
}

export default NavBar
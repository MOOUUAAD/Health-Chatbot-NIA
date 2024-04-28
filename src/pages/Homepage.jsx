import React from 'react'

import NavBar from "../components/NavBar";
import About from "../components/About";
import HomeHero from '../components/HomeHero';
import Carousel from '../components/Carousel';


const Homepage = () => {
  return (
    <>
    <NavBar/>
    <HomeHero/>
    <About/>
    <Carousel/>
    </>
  )
}

export default Homepage
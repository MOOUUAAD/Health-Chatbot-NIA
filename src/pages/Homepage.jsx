import React from 'react'

import NavBar from "../components/NavBar";
import About from "../components/About";
import Hero from '../components/Hero';
import HomeHero from '../components/HomeHero';

const Homepage = () => {
  return (
    <>
    <NavBar/>
    <HomeHero/>
    <About/>
    </>
  )
}

export default Homepage
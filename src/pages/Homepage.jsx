import React from 'react'

import NavBar from "../components/NavBar";
import About from "../components/About";
import Hero from '../components/Hero';
import HomeHero from '../components/HomeHero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
    <NavBar/>
    <HomeHero/>
    <About/>
    <Carousel/>
    <Footer/>
    </>
  )
}

export default Homepage
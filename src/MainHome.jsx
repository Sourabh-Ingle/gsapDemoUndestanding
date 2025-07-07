import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navBarFolder/Navbar';
import Hero from './components/hero/Hero';
import Cocktails from './components/cocktails/Cocktails';



gsap.registerPlugin(ScrollTrigger, SplitText)
const MainHome = () => {

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />


    </main>
  )
}

export default MainHome
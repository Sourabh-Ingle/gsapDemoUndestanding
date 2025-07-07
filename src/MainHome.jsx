import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/navBarFolder/Navbar';



gsap.registerPlugin(ScrollTrigger, SplitText)
const MainHome = () => {
    
  return (
      <main>
          
          <Navbar />
         

          <div className='flex-center'>
              <Link to="/gsapTo">Go to gsapTo | </Link>
              <Link to="/gsapFrom">Go to gsapFrom |</Link> 
              <Link to="/gsapTimeline"> Go to Timeline | </Link> 
              <Link to="/gsapStagger"> Go to Stagger | </Link> 
              <Link to="/gsapScrollTrigger"> Go to ScrollTrigger | </Link>
              <Link to="/gsapText"> Go to Text </Link> 
          </div>


      </main>
  )
}

export default MainHome
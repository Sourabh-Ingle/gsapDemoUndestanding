import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';



gsap.registerPlugin(ScrollTrigger, SplitText)
const MainHome = () => {
    const [count, setCount] = useState(0)
  return (
      <>
          <div className="flex-center">
              <h2 className='text-3xl text-indigo-300'>Hello Sourabh</h2>
          </div>
         

          <div className='flex-center'>
              <Link to="/gsapTo">Go to gsapTo | </Link>
              <Link to="/gsapFrom">Go to gsapFrom |</Link> 
              <Link to="/gsapTimeline"> Go to Timeline | </Link> 
              <Link to="/gsapStagger"> Go to Stagger | </Link> 
              <Link to="/gsapScrollTrigger"> Go to ScrollTrigger | </Link>
              <Link to="/gsapText"> Go to Text </Link> 
          </div>


      </>
  )
}

export default MainHome
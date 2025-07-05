import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

const MainHome = () => {
    const [count, setCount] = useState(0)
  return (
      <>
          <div>
              <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>

          <div>
              <Link to="/gsapTo">Go to gsapTo</Link> | <Link to="/gsapFrom" >Go to gsapFrom</Link> |
              <Link to="/gsapTimeline">Go to Timeline</Link> |
              <Link to="/gsapStagger">Go to Stagger</Link> |
              <Link to="/gsapScrollTrigger">Go to ScrollTrigger</Link> | 
              <Link to="/gsapText">Go to Text</Link>
          </div>


      </>
  )
}

export default MainHome
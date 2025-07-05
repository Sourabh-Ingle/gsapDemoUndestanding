import React from 'react';
import '../gsapToFolder/gsapToo.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapFromFunc = () => {
    useGSAP(() => {
        gsap.from('#from-box', {
            x: 700,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'power2.inOut',
            opacity:0
        })
    },[])
  return (
      <main className='container'>
          <div className="main">
              <h2 className="title">GSAP FROM </h2>
              <div className="box" id='from-box'></div>
          </div>
      </main>
  )
}

export default GsapFromFunc
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)

const GsapScrollTriggerFunc = () => {
    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach(box => {
            gsap.to(box, {
                x: 150*(boxes.indexOf(box)+5),
                rotation: 360,
                scale: 1,
                opacity:1,
                borderRadius: '50%',
                ease:'power1.inOut',
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: 4,
                    markers:true
                }
            })
        })
    },{scope:scrollRef})
  return (
        <main className='container'>
            <section className="main">
              <h2 className="title">GSAP SROLLTRIGGER </h2>
              <div className="flex">
                  <div className="box"></div>
              </div>
            </section>
          
              <section className="main">
              <div className="boxes" ref={scrollRef}>
                      <div className="box" id='box1'></div>
                      <div className="box" id='box2'></div>
                  </div>
              </section>
          
      </main>
       
    )
}

export default GsapScrollTriggerFunc
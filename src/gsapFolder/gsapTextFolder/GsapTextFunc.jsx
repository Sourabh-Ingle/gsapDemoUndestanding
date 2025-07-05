import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import '../gsapToFolder/gsapToo.css';

const GsapTextFunc = () => {
    useGSAP(() => {
        gsap.from('#text', {
            y: 20,
            opacity: 0,
            delay:0.5,
            ease:'power1.inOut'
        }) 

        gsap.fromTo('.desc', {
            opacity: 0,
            y:20  
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger:0.2
        })
    },[])
  return (
        <main className='container'>
            <div className="main">
              <h2 className="title " id="text" >GSAP Text </h2>
              <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ullam suscipit sequi, distinctio itaque voluptatibus ipsum atque, nulla libero rem blanditiis? Veniam, sed.</p>
              <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ullam suscipit sequi, distinctio itaque voluptatibus ipsum atque, nulla libero rem blanditiis? Veniam, sed.</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, obcaecati.</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam voluptate vero voluptates eveniet suscipit.</p>
              
          </div>
        </main>)
}

export default GsapTextFunc
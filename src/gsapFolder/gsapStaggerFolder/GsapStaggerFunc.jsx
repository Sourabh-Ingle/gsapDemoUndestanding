import React from 'react'
import '../gsapToFolder/gsapToo.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapStaggerFunc = () => {
    useGSAP(() => {
        gsap.to('.box', {
            y: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            borderRadius: '50%',
            // stagger:1.5
            stagger: {
                amount: 2.5,
                grid: [2, 1],
                axis: 'y',
                from:'start',
            }
        })
    }, [])
    return (
        <main className='container'>
            <div className="main">
                <h2 className="title">Stagger</h2>
                <div className="flex">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </main>
      )
}

export default GsapStaggerFunc
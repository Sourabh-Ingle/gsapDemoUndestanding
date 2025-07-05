import React from 'react';
import '../gsapToFolder/gsapToo.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTimeLineFunc = () => {
    const timeline = gsap.timeline({
        repeat:-1,yoyo:true,repeatDelay:1
    });
    
    useGSAP(() => {
        timeline.to('#timeline-box', {
            x: 500,
            rotation: 360,
            duration: 2,
            borderRadius:'50%'
        }) 
        timeline.to('#timeline-box', {
            y: 100,
            scale: 1,
            rotation: 360,
            duration: 1,
            borderRadius: '50%'
        })

        timeline.to('#timeline-box', {
            x: 1000,
            scale:1.2,
            borderRadius: '5%',
            rotation: 360,
            duration: 2,
        })

       },[]) 
    
    
    return (
        <main className='container'>
            <div className="main">
                <h2 className="title">GSAP TIMELINE </h2>
                <button className="btn" onClick={() => {
                    if (timeline.paused()) {
                        timeline.play()
                    } else {
                        timeline.pause()
                    }
                }}>Play/Pause</button>
                <div className="box" id='timeline-box'></div>
            </div>
        </main>
      )
}

export default GsapTimeLineFunc
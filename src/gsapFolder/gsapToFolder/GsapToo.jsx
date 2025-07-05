import './gsapToo.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapToFunction = () => {
  useGSAP(()=> {
    gsap.to('#box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease:'elastic'
    })
  },[])
  return (
      <main className='container'>
          <div className="main">
              <h2 className="title">GSAP TO </h2>
              <div className="box" id='box'></div>
          </div> 
    </main>
  )
}

export default GsapToFunction;
import { useGSAP } from '@gsap/react'
import {navLinks} from '../../../constants/constant'
import gsap from 'gsap'
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start:'bottom top'
           }
        }) 
        navTween.fromTo('nav', {
            backgroundColor:'transparent'
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 2,
            ease:'power1.inOut'
        })
    },[])
  return (
      <nav>
          <div className="navBar">
              <a href="#" className='flex items-center gap-2'>Valet Pour</a>
              <ul>
                  {navLinks.map(link => {
                      return (
                          <li key={link.id}>
                              <a href={`#${link.id}`}>{link.title}</a>
                          </li> 
                      )
                  }
                      
                  )}
              </ul>
          </div>
    </nav>
  )
}

export default Navbar
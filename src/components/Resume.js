import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from './Header'
import resume from '../img/resumeImg.jpg'

export default function Resume() {
  useEffect(() => {
    Aos.init({
        duration:2000,
        once: true, 
    });
}, [])
    return (
     <div>
       <Header />
        <img data-aos="zoom-in" src={resume} alt="" />
      </div>
    )
}

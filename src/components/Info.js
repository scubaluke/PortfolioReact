import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import headshot from '../img/lukeHeadshot.jpg'
import './Info.css'

export default function Info() {
    useEffect(() => {
        Aos.init({
            duration:1500,
            once: true, 
        });
    }, [])

    return (
        <section className="intro" id="home" >
        <h1 className="section__title section__title--intro" >Hi I am <strong>Luke Gartland</strong></h1>
        <p data-aos-offset="-1000" data-aos="slide-left" className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={headshot} alt="" className="intro__img" />
    </section>
    )
}

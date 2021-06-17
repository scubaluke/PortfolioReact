import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import LukeColor from '../img/LukeColor.jpeg'
import  './AboutMe.css'
export default function AboutMe() {
    useEffect(() => {
        Aos.init({
            duration:1500,
            once: true, 
        });
    }, [])
    return (
        <section className="about-me" id="about" >
                <h2 className="section__title section__title--about">Who I am</h2>
                <p data-aos="slide-right" className="section__subtitle section__subtitle--about">Developer based in Minneapolis, MN</p>

                <div className="about-me__body">
                    <p>Luke is a design-oriented front-end developer who strives to build immersive and beautiful web applications through carefully crafting code to user-driven design.</p>
                </div>

                <img src={LukeColor} alt="Luke in COLOR!" className="about-me__img" />
        </section>
    )
}

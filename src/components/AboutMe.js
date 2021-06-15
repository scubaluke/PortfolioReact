import React from 'react'
import LukeColor from '../img/LukeColor.jpeg'
import  './AboutMe.css'
export default function AboutMe() {
    return (
        <section className="about-me" id="about" >
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Developer based in Kihei,HI</p>

                <div className="about-me__body">
                    <p>Luke is a design-oriented front-end developer who strives to build immersive and beautiful web applications through carefully crafting code to user-driven design.</p>
                </div>

                <img src={LukeColor} alt="Luke in COLOR!" className="about-me__img" />
        </section>
    )
}

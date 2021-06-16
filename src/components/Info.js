import React from 'react'
import headshot from '../img/lukeHeadshot.jpg'
import './Info.css'

export default function Info() {
    return (
        <section className="intro" id="home" >
        <h1 className="section__title section__title--intro" >Hi i am <strong>Luke Gartland</strong></h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={headshot} alt="" className="intro__img" />
    </section>
    )
}

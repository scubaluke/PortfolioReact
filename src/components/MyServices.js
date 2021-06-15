import React from 'react'
import Service from './Service'
import './MyServices.css'
export default function MyServices() {
    const renderServices = services.map(service => <Service title={service.title} body={service.body} />)
    return (
        <div>
            <section class="my-services" id="services" >
            <h2 class="section__title section__title--services">What I do</h2>
            {renderServices}
            <a href="#work" class="btn">My Work</a>
            </section>
        </div>
    )
}

const services = [
    {
        title: 'Web Design',
        body: 'A website should be designed for the people who will use it, so thats exactly what I do.  User focused design should be the primary focus of any website.'
    },
    {
        title: 'Constantly evolving',
        body: `I am always experimenting, always learning and never bored. I design mobile-first responsive websites using HTML, CSS, JavaScript, and React using the latest tools, technics and technology's.`
    },
    {
        title: 'Wed Development',
        body: 'Every website should be built with two goals. First it needs to work across all devices. second it needs to be as fast as possible.'
    },
]


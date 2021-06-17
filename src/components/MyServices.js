import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Service from './Service'
import './MyServices.css'

export default function MyServices() {
    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true, 
        });
    }, [])
    const renderServices = services.map(service => <Service key={service.key} title={service.title} body={service.body} />)
    return (
        
            <section  className="my-services" id="services" >
            <h2 data-aos="zoom-out" className="section__title section__title--services">What I do</h2>
            <div class="services">
              {renderServices}
            </div>
            <a href="#work" className="btn">My Work</a>
            </section>
      
    )
}

const services = [
    {
        title: 'Web Design',
        body: 'A website should be designed for the people who will use it, so thats exactly what I do.  User focused design should be the primary focus of any website.',
        key: 1,
    },
    {
        title: 'Constantly evolving',
        body: `I am always experimenting, always learning and never bored. I design mobile-first responsive websites using HTML, CSS, JavaScript, and React using the latest tools, technics and technology's.`,
        key: 2
    },
    {
        title: 'Web Development',
        body: 'Every website should be built with two goals. First it needs to work across all devices. second it needs to be as fast as possible.',
        key: 3
    },
]


import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Service({title, body}) {
    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true, 
        });
    }, [])
    return (
        <div data-aos="fade-up" className="service" style={{maxWidth: '500px', margin: '0 auto'}}>
        <h3>{title}</h3>
        <p>{body}</p>
     </div> 
    )
}

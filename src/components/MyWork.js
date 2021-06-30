import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import PortfolioItem from './PortfolioItem'
import './MyWork.css'
// images
import meditationImg from '../img/meditationFear.png'
import puppetImg from '../img/puppet.png'
import ticTacToe from '../img/ticTacToe.png'
import proshop from '../img/ProShop.png'
import data from '../components/portfolioPageData'
export default function MyWork() {
    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true, 
        });
    }, [])


    const renderPortfolioItems = portfolioItems.map(item => <PortfolioItem key={item.img} to={item.to} img={item.img}/>)
    return (
        <section className="my-work" id="work">
            <h2 data-aos="flip-down" className="section__title">My Work</h2>
            <p className="section__subtitle--work">A selection of my work.</p>

            <div data-aos="zoom-in-up" className="portfolio">
                {renderPortfolioItems}
            </div>
        </section>
    )
}

const portfolioItems = [
    {
        to: '/meditation',
        img: meditationImg,
    },
    {
        to: '/proshop',
        img: proshop
    },
    {
        to: '/outstandingly',
        img: data.outstandingly.img
    },
    {
        to: '/mjpuppet',
        img: puppetImg
    },
    {
        to: '/sel',
        img: ticTacToe
    },
   
]


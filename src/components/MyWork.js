import React from 'react'
import PortfolioItem from './PortfolioItem'
import './MyWork.css'
// images
import meditationImg from '../img/meditationFear.png'
import puppetImg from '../img/puppet.png'
import ticTacToe from '../img/ticTacToe.png'

export default function MyWork() {
    const renderPortfolioItems = portfolioItems.map(item => <PortfolioItem to={item.to} img={item.img}/>)
    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle--work">A selection of my work.</p>

            <div className="portfolio">
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
        to: '/puppet',
        img: puppetImg
    },
    {
        to: '/sel',
        img: ticTacToe
    },
   
]


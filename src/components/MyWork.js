import React from 'react'
import PortfolioItem from './PortfolioItem'
import {Router} from 'react-router-dom'
import img from '../img/LukeColor.jpeg'
import './MyWork.css'

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
        img
    },
    {
        to: '/meditation',
        img
    },
    {
        to: '/meditation',
        img
    },
    {
        to: '/meditation',
        img
    },
    {
        to: '/meditation',
        img
    },
    {
        to: '/meditation',
        img
    },
]

// <a href="./html/memorygame.html" class="portfolio__item">
//                             <img src="./img/memoryGame.png" alt="" class="portfolio__img" >
//                         </a>
//                           <!-- portfolio item 2 -->
//                           <a href="./html/ticTacToe.html" class="portfolio__item">
//                             <img src="./img/TicTacToe.png" alt="" class="portfolio__img" >
//                         </a>
//                           <!-- portfolio item 3 -->
//                           <a href="./html/sailCalculator.html" class="portfolio__item">
//                             <img src="./img/sailCalculator.png" alt="" class="portfolio__img" >
//                         </a>
//                           <!-- portfolio item 4 -->
//                           <a href="./html/meditation.html" class="portfolio__item">
//                             <img src="./img/meditation.png" alt="" class="portfolio__img" >
//                         </a>
//                           <!-- portfolio item 5 -->
//                           <a href="./html/mjPuppet.html" class="portfolio__item">
//                             <img src="./img/mjPuppet.png" alt="puppet website" class="portfolio__img" >
//                         </a>
//                           <!-- portfolio item 6 -->
//                           <a href="./html/greenCoconut.html" class="portfolio__item">
//                             <img src="./img/greenCoconut.png" alt="" class="portfolio__img" >
//                         </a>
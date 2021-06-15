import React from 'react'
import './PortfolioItem.css'

// import {Link} from 'react-router-dom'
// import img from '../img/codeBackground.jpg'
export default function PortfolioItem({to, img}) {
    return (
        <div className="portfolio__item">
    {/* // <Link to="/meditation" class="portfolio__item"> */}
        <img src={img} alt="" class="portfolio__img" />
    {/* // </Link> */}
    </div>
    )
}

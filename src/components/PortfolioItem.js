import React from 'react'
import './PortfolioItem.css'

import {Link} from 'react-router-dom'
// import img from '../img/codeBackground.jpg'
export default function PortfolioItem({to, img}) {
    return (
     <Link className="portfolio__item" to="/meditation" className="portfolio__item">
        <img src={img} alt="" className="portfolio__img" />
     </Link>
    )
}

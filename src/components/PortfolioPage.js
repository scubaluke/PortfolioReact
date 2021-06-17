import React from 'react'
import './PortfolioPage.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";

export default function PortfolioPage({ projectTitle, projectLink, projectSubtitle, headerParagraph, bottomParagraph, src, img }) {
    return (
      <>
      <Header/>
        <section className="intro" id="home" >
            <ScrollToTop />
            <h1 className="section__title section__title--intro" >
                {projectTitle} 
                <strong className="long-word">{projectLink}</strong></h1>
            <p className="section__subtitle section__subtitle--intro">{projectSubtitle}</p>
            <img src={img} alt="" className="intro__img" />
        </section>


            <div className="portfolio-item-individual">
                <p>{headerParagraph}</p>

                   <iframe src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                  <Link target="_blank"  to={{pathname: `https://www.${projectLink}`}}>Check out my project</Link>
             
                <p>{bottomParagraph}</p>
            </div>
            <Footer />
            </>
    )
}

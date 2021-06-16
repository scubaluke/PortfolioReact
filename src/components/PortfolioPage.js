import React from 'react'
import './PortfolioPage.css'
import Footer from './Footer'

export default function PortfolioPage() {
    return (
      <>
        <section className="intro" id="home" >
            <h1 className="section__title section__title--intro" >
                Meditation 
                <strong className="long-word">NamaGoMeditate.com</strong></h1>
            <p className="section__subtitle section__subtitle--intro">bringing Mindfulness to others</p>
            <img src="../img/meditation.png" alt="" className="intro__img" />
        </section>


            <div className="portfolio-item-individual">
                <p>  I built and designed this meditation website to help bring mindfulness to others.  The webpage has 4 different Mantras for users to scroll through as well as a zen'ed out etch-a-sketch. Each Page contains 23 different mantras that appear in random order along with a photo.  The idea is users can scroll through the page, repeating the mantras to themselves, to bring them back into the present moment, help them move beyond their fear, or put a new positive twist on their day and lives. 
                    </p>

                <a href="https://namagomeditate.com">
                    {/* <video className="portfolio-item-video" controls autoplay loop src="https://drive.google.com/file/d/1bg88dvQ0l6Lzn-XpapjQSpcb2es0rlG5/view?usp=sharing"></video> */}
                    {/* <iframe allow="autoplay 'src'" src="https://drive.google.com/file/d/1bg88dvQ0l6Lzn-XpapjQSpcb2es0rlG5/preview" width="640" height="480"></iframe> */}
                   {/* <img src="../img/IMG_2890.jpeg" alt="" />  */}
                   <iframe src="https://player.vimeo.com/video/563356889?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="361" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"  title="meditationSlider"></iframe>
                </a>
               {/* https://drive.google.com/file/d/1bg88dvQ0l6Lzn-XpapjQSpcb2es0rlG5/view?usp=sharing */}
                <p>
                 NamaGoMeditate uses a dropdown hamburger navigation menu that has a position of fixed, allowing it to always be with the user.  The hamburger menu has the NamaGo logo, allows users to go back to the top of the page and navigate to other pages. 
                </p><p>
                     
                        
                        I designed this page with each calculator being held in a hidden drop down, keeping the page simpler and cleaner.  This allows users to more easily find the calculators they are looking for. Users can make calculations in imperial and metric units, results will be given in the selected units. 
                </p><p>
                    Users can select their preference "light mode" or "pirate mode". User selected preference is stored in local storage for their next visit. Modes are changed with data-theme equal to dark for pirate mode. Colors are changed with CSS variables allowing for much less CSS over all and modifications can easily be made across the site. The page also uses display flex in many places for ease of use and best display on a variety of devices, while again, using less overall CSS code.   
                </p>

            </div>
            <Footer />
            </>
    )
}

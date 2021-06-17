import React, {useState } from 'react'
import ResumeLink from './ResumeLink'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const [navOpen, setNavOpen] = useState('');

    function handelClick() {
        !navOpen ? setNavOpen('nav-open') : setNavOpen('')
        document.body.classList.toggle('nav-open')
    }
   
function handleAClick() {
    !navOpen ? setNavOpen('nav-open') : setNavOpen('')
    document.body.classList.toggle('nav-open')
}

    return (
    <div className='header'>
        <div className="logo">
          <ResumeLink />
        </div>
        <button  onClick={() => handelClick()} className={`nav-toggle ${navOpen}`} aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <a onClick={() => handleAClick()} href="#home" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a onClick={() => handleAClick()} href="#services" className="nav__link" >Services</a>
                </li>
                <li class="nav__item">
                    <a onClick={() => handleAClick()} href="#about" class="nav__link" >About me</a>
                </li>
                <li className="nav__item">
                    <a onClick={() => handleAClick()} href="#work" className="nav__link" > My Work</a>
                </li>
                <li className="nav__item">
                    <Link onClick={() => handleAClick()} to="/resume"  className="nav__link" >Resume</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}

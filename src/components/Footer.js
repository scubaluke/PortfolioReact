import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCoffee,  } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function footer() {
    return (
        <footer className="footer">
                <a href="mailto:lukegartland@gmail.com" class="footer__link" >Send Luke a message.</a>
                <ul className="social-list">
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://github.com/scubaluke">
                            <FontAwesomeIcon className="icon" icon={faGithubSquare}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://twitter.com/scubalukemaui">
                        <FontAwesomeIcon className="icon" icon={faTwitterSquare}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://www.facebook.com/luke.gartland">
                        <FontAwesomeIcon className="icon" icon={faFacebook}></FontAwesomeIcon>                        </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://www.linkedin.com/in/luke-gartland-b9222a76/">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                    </li>

                </ul>
            </footer>
    )
}

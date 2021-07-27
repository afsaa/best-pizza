import React from 'react'
import BestPizzaLogo from '../../assets/Best_Pizza.png';
import FacebookLogo from '../../assets/facebook.png';
import InstagramLogo from '../../assets/instagram.png';
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={FacebookLogo} alt="Logo de facebook" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={InstagramLogo} alt="Logo de instagram" /></a>
            </div>
            <div className="footer__logo" >
                <img src={BestPizzaLogo} alt="Logo Best Pizza" />
            </div>
        </footer>
    )
}

export default Footer

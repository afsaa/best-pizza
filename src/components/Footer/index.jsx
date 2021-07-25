import React from 'react'
import BestPizzaLogo from '../../assets/Best_Pizza.png';
import FacebookLogo from '../../assets/facebook.png';
import InstagramLogo from '../../assets/instagram.png';
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social-media">
                <img src={FacebookLogo} alt="Logo de facebook" />
                <img src={InstagramLogo} alt="Logo de instagram" />
            </div>
            <div className="footer__logo" >
                <img src={BestPizzaLogo} alt="Logo Best Pizza" />
            </div>
        </footer>
    )
}

export default Footer

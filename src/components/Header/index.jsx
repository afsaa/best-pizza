import React from 'react'
import Logo from '../../assets/Logo.png';
import Pizza from '../../assets/Pizza.png';
import './styles.css';

const Header = ({ loggedIn = true }) => {
    return (
        <>
            <header className="header">
                { loggedIn ? <img src={Logo} alt="Logo Best Pizza" /> : ''}  
                <img src={Pizza} alt="Pizza de champiñones" />
            </header>
        </>
    )
}

export default Header

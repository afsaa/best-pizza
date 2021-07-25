import React from 'react'
import Logo from '../../assets/Logo.png';
import Pizza from '../../assets/Pizza.png';
import './styles.scss';

const Header = ({ loggedIn = true }) => {
    return (
        <>
            <header className="header">
                { loggedIn ? <div>
                    <img className="header__logo" src={Logo} alt="Logo Best Pizza" />
                </div> : ''}
                <div className="header__pizza-container">
                    <img className="pizza" src={Pizza} alt="Pizza de champiñones" />
                </div>
            </header>
        </>
    )
}

export default Header

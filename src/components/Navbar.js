import React from 'react'
import Logo from '../assets/img/Mirage.png';
import hamburger from '../assets/img/Vector.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar navbar__logo">
                <a href="#">

                <img src={Logo} alt="Logo" />
                </a>
            </div>
            <div className="navbar navbar__links">
                <a href='#' className='navbar__links--item link active'>Home</a>
                <a href='#2' className='navbar__links--item link'>About</a>
                <a href='#3' className='navbar__links--item link'>Product</a>
                <a href='#4' className='navbar__links--item link'>Pricing</a>
                <a href='#' className='navbar__links--item link'><img src={hamburger} alt="hamburger" /></a>
            </div>
        </div>
    )
}

export default Navbar

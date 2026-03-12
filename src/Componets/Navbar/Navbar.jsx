import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
function Navbar() {
    const [menu, setmenu] = useState("Shops")
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setmenu("Shops") }}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu === "Shops" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Men") }}><Link style={{textDecoration:'none'}} to={"mens"}>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Women") }}><Link style={{textDecoration:'none'}} to={'/Women'}>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Kids") }}><Link style={{textDecoration:'none'}} to={'/Kids'}>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link style={{textDecoration:'none'}} to={'/login'}><button>Login</button></Link>
                <Link style={{textDecoration:'none'}} to={'/cart'}><img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-counter'>
                    0
                </div>
            </div>
        </div>
    )
}

export default Navbar

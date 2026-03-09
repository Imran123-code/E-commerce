import React, { useState } from 'react'
import './Navbar.css'
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
                <li onClick={() => { setmenu("Shops") }}>Shops{menu === "Shops" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Men") }}>Men{menu === "Men" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Women") }}>Women{menu === "Women" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Kids") }}>Kids{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className='nav-cart-counter'>
                    0
                </div>
            </div>
        </div>
    )
}

export default Navbar

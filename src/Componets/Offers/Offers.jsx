import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Discover our exclusive offers</p>
                <button>Shop Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive} alt="" />
            </div>
        </div>
    )
}

export default Offers

import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
function Hero() {
  return (
    <div className='Hero'>
      <div className="hero-left">
        <h2>NEW ARIVAL ITEM</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt='' />
          </div>
          <p>collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt='' />
      </div>
    </div>
  )
}

export default Hero

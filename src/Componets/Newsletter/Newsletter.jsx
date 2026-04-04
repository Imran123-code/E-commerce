import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Deals on your Email</h1>
      <p>subscribe to our newsletter and never miss an update!</p>
      <div className="form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter

import React from 'react'
import './Css/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-cointainer">
        <h1>Sign up</h1>
        <div className="LoginSignup-fields">
          <input type='name' placeholder='enter your name'></input>
          <input type='email' placeholder='Enter your email'></input>
          <input type='password'></input>
        </div>
         <button>continue</button>
        
         <p className='LoginSignup-login'>Already have an account <span>Login here</span></p>
        
         <div className="LoginSignup-conform">
          <input type="checkbox" name='' id=''/>
          <p>I agree terms and condition</p>
         </div>
      </div>
    </div>
  )
}

export default LoginSignup

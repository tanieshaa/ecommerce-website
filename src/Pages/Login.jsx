import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='loginbox'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className='signin'>Already Have an Account? <span>Sign In</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <span>By continuing, I agree to the Terms of Service and Privacy Policy.</span>
        </div>
      </div>
    </div>
  )
}

export default Login 
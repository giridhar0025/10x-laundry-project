import React from 'react'
import './signinmaincontainer.css'

const SignInContainer = () => {
  return (
    <>
    
    <div className='signin-maincontainer'>
        <div className='signin-maincontainer-left'>
            <h1 className='signin-maincontainer-laundryheading'>Laundry Service</h1>
            <p className='signin-maincontainer-laundrydescription'>Doorstep Wash & Dryclean Service</p>
            <p className='signin-maincontainer-donthaveanaccount'>Don't Have An Account?</p>
            <button className='signin-maincontainer-registerbutton'>Register</button>
        </div>
        <div className='signin-maincontainer-right'>
        <p className='signin-maincontainer-signinheading'>
            SIGN IN
        </p>
            <form className='signin-form'>
            <label class="custom-field two">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Phone/Email</span>
</label>
<p></p>
<br></br>
<br></br>
<label class="custom-field two">
  <input type="text" placeholder="&nbsp;"/>
  <span class="placeholder">Password</span>
</label>
<img className='padlock-image-signin' src="/Assets/padlock.svg" alt="show-pass" />
            <p className='signin-forgot-password'>Forget Password?</p>
            <button className='sigin-button'>Sign In</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignInContainer
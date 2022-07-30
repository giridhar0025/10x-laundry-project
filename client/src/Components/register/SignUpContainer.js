import React from 'react'
import './Signupcontainer.css'

const SignUpContainer = () => {
    return (
        <>
            <div className='signupcontainer'>
                <div className='signupcontainer-left'>
                    <h1 className='signup-maincontainer-laundryheading'>Laundry Service</h1>
                    <p className='signup-maincontainer-laundrydescription'>Doorstep Wash & Dryclean Service</p>
                    <p className='signup-maincontainer-alreadyhaveaccount'>Already Have Account</p>
                    <button className='signup-maincontainer-registerbutton'>Sign In</button>
                </div>
                <div className='signupcontainer-right'>
                    <p className='signup-maincontainer-registerheading'>
                        REGISTER
                    </p>
                    <div className='register-input'>
                        <div className='register-input-width50'>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Name</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Phone</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">State</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Address</span>
                            </label>
                        </div>
                        <div className='register-input-width50'>
                        <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Email</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Password</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">District</span>
                            </label>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <label class="custom-field two">
                                <input type="text" placeholder="&nbsp;" />
                                <span class="placeholder">Pincode</span>
                            </label>
                        </div>
                    </div>
                    <p className='register-agree'>
                        <input type="checkbox" className='register-checkbox'></input>
                          I agree to Terms & Condition receiving marketing and promotional materials.
                          <br></br>
                          <button className='registerbtn'>Register</button>

                    </p>
                    
                </div>
            </div>
        </>
    )
}

export default SignUpContainer
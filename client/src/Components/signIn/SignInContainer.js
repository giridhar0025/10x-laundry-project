import React, {useState} from 'react';
import axios from 'axios';
import './signinmaincontainer.css'
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';



const SignInContainer = () => {
  const history= useNavigate();
    const handleRoute= ()=>{
        history.push('/user/register')
    }
  const [login, setLogin] = useState({user: "", password: ""})
    const handleLogin = ()=> {
        axios({
            url: "http://localhost:3001/user/login",
            method: "POST",
            headers: {
            },
            data: {user: login.userName, password: login.password}
        }).then((loginData)=> {
           localStorage.setItem("authorization", loginData.data.authToken);
        }).catch((err)=> {
            console.log(err)
        })
    }
  return (
    <>
    
    <div className='signin-maincontainer'>
        <div className='signin-maincontainer-left'>
            <h1 className='signin-maincontainer-laundryheading'>Laundry Service</h1>
            <p className='signin-maincontainer-laundrydescription'>Doorstep Wash & Dryclean Service</p>
            <p className='signin-maincontainer-donthaveanaccount'>Don't Have An Account?</p>
            <button className='signin-maincontainer-registerbutton' onClick={handleRoute}>Register</button>
        </div>
        <div className='signin-maincontainer-right'>
        <p className='signin-maincontainer-signinheading'>
            SIGN IN
        </p>
            <form className='signin-form'>
            <label class="custom-field two">
  <input type="text" placeholder="&nbsp;" onChange={(e)=> {setLogin({...login, user: e.target.value})}}/>
  <span class="placeholder">Phone/Email</span>
</label>
<p></p>
<br></br>
<br></br>
<label class="custom-field two">
  <input type="text" placeholder="&nbsp;" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
  <span class="placeholder">Password</span>
</label>
<img className='padlock-image-signin' src="/Assets/padlock.svg" alt="show-pass" />
            <p className='signin-forgot-password'>Forget Password?</p>
            <button className='sigin-button' onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default SignInContainer
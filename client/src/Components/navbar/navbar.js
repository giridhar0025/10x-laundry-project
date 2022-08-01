<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react';
>>>>>>> 14c30eb54c4f49e00592fa281e8e91e117858324
import './navbar.css'
import {useNavigate} from "react-router-dom";


const Navbar = (props) => {
<<<<<<< HEAD
  console.log(props)
  const [navbarbool,setNavbarbool]=useState(false)

  const token =
  localStorage.getItem("authorization");
  // console.log(token)
 
=======

  const navigate = useNavigate();
  
  const handleLogout = ()=> {
    localStorage.setItem("authorization", "");
    navigate("/");
}


  const token = localStorage.getItem('authorization')


>>>>>>> 14c30eb54c4f49e00592fa281e8e91e117858324
  return (
    <>
     <div className="navbarContainer">
       <div className="navbarLogo">
        <span className="logoContent">LAUNDRY</span>
       </div>
       <div className="navbar-btns">
        
           <>
               <button className="n-btns navbarPricing">Pricing</button>
               <button className="n-btns navbarCareer">Career</button>
               <button onclick={handleLogout} style={{width: "213px", fontSize: "16px;"}} className="n-btns navbarSignIn"><img style={{width: "43px", borderRadius: "50%"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/><span style={{fontSize: "20px", marginLeft: "30px"}}>{props.mainData.name}</span></button>

           </>
        
       </div>
     </div>
    </>
  )
}

export default Navbar
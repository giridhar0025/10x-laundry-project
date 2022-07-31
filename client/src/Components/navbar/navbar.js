import React, { useState } from 'react'
import './navbar.css'

const Navbar = (props) => {
  console.log(props)
  const [navbarbool,setNavbarbool]=useState(false)

  const token =
  localStorage.getItem("authorization");
  // console.log(token)
 
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
               <button style={{width: "213px", fontSize: "16px;"}} className="n-btns navbarSignIn"><img style={{width: "43px", borderRadius: "50%"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/><span style={{fontSize: "20px", marginLeft: "30px"}}>{props.mainData.name}</span></button>

           </>
        
       </div>
     </div>
    </>
  )
}

export default Navbar
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
     <div className="navbarContainer">
       <div className="navbarLogo">
        <span className="logoContent">LAUNDRY</span>
       </div>
       <div className="navbar-btns">
         <button className="n-btns navbarHome">Home</button>
         <button className="n-btns navbarPricing">Pricing</button>
         <button className="n-btns navbarCareer">Career</button>
         <button className="n-btns navbarSignIn">Sign In</button>
       </div>
     </div>
    </>
  )
}

export default Navbar
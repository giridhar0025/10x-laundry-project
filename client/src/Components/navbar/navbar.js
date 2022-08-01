import React from 'react';
import './navbar.css'
import {useNavigate} from "react-router-dom";


const Navbar = (props) => {

  const navigate = useNavigate();
  
  const handleLogout = ()=> {
    localStorage.setItem("authorization", "");
    navigate("/");
}


  const token = localStorage.getItem('authorization')


  return (
    <>
     <div className="navbarContainer">
       <div className="navbarLogo">
        <span className="logoContent">LAUNDRY</span>
       </div>
       <div className="navbar-btns">
        {
           token.length ? 
           <>
               <button className="n-btns navbarPricing">Pricing</button>
               <button className="n-btns navbarCareer">Career</button>
               <button onclick={handleLogout} style={{width: "213px", fontSize: "16px;"}} className="n-btns navbarSignIn"><img style={{width: "43px", borderRadius: "50%"}} src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="avatar"/><span style={{fontSize: "20px", marginLeft: "30px"}}>{props.mainData.name}</span></button>

           </>
           :
           <>
               <button className="n-btns navbarHome">Home</button>
               <button className="n-btns navbarPricing">Pricing</button>
               <button className="n-btns navbarCareer">Career</button>
               <button className="n-btns navbarSignIn">Sign In</button>
           </>
        }
        
       </div>
     </div>
    </>
  )
}

export default Navbar
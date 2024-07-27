import React from 'react'
import {assets} from "../../assets/assets"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="logo" />
      <img src={assets.profile_image} className='profile' alt="profile_image" />
    </div>
  )
}

export default Navbar
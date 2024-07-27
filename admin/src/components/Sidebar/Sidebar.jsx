import React from 'react'
import "./Sidebar.css"
import { assets } from "../../assets/assets"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar_options">
        <div className="sidebar_option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </div>
        <div className="sidebar_option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>
        <div className="sidebar_option">
          <img src={assets.order_icon} alt="" />
          <p>Order Items</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
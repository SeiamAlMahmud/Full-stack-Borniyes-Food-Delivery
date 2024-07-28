import React from 'react'
import Navbar from "../components/Navbar.jsx/Navbar"
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
const Root = () => {
  return (
    <div>
      <Navbar />
      <hr></hr>
      <div className='outlet'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Root
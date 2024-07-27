import React from 'react'
import Navbar from "../components/Navbar.jsx/Navbar"
import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Outlet />
    </div>
  )
}

export default Root
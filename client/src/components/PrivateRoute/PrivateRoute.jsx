import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { foodStoreContext } from '../../context/StoreContext'


const PrivateRoute = ({ children }) => {
    const { token } = useContext(foodStoreContext)
    const location = useLocation()
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (!token) {
    //         navigate('/login', {state: location.pathname})
    //     }
    // }, [token])
    // console.log(location)
    
    return (
        <>
          {
            !token && children
          }  
        </>
    )
}

export default PrivateRoute
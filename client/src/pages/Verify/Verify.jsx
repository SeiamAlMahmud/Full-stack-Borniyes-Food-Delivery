import React, { useEffect } from 'react'
import "./Verify.css"
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {foodStoreContext} from "../../context/StoreContext"
import axios from 'axios'
const Verify = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const {url, token} = useContext(foodStoreContext)
  const navigate = useNavigate()

  const verifyPayment = async (req,res) => {
    const response = await axios.post(`${url}/api/order/verify`, {success,orderId}, {headers: {token}})

    if (response.data.success) {
      navigate("/myorders")
    }else{
      navigate("/")
    }
  }
useEffect(()=>{
  verifyPayment()
},[])
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
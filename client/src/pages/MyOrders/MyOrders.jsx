import React, { useContext, useEffect, useState } from 'react'
import { foodStoreContext } from '../../context/StoreContext'
import axios from 'axios'

const MyOrders = () => {
    const [data, setData] = useState([])
    const { token, url } = useContext(foodStoreContext)

    const fetchOrders = async () => {
        const response = await axios.post(`${url}/api/order/userOrders`, {}, { headers: { token } })
        setData(response.data.data)
        console.log(response)
    }

    useEffect(()=> {
        if (token) {
            fetchOrders()
        }
    },[token])

    return (
        <div>

        </div>
    )
}

export default MyOrders
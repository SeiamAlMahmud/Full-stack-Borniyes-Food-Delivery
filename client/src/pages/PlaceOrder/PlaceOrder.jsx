import React, { useContext, useState } from 'react'
import './placeOrder.css'
import { foodStoreContext } from '../../context/StoreContext'
import axios from 'axios'
const PlaceOrder = () => {
  const { getTotaCartAmmount, token, url, food_list, cartItems } = useContext(foodStoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  })

  const onChangeHandlers = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }))
  }
  
  const placeOrderHandler = async (event) => {
    event.preventDefault();
    
    let orderItems = [];
    food_list.map(item => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        // console.log(itemInfo) 
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
        // console.log(itemInfo);
      }
    })
    // console.log(orderItems)
    const amount = Number(getTotaCartAmmount() + 2);
    let orderData = {
      address: {...data},
      items: orderItems,
      amount: amount,
      status: "Order Processing"
    }
    let response = await axios.post(`${url}/api/order/place`, orderData, {headers: {token}});
    // console.log(response.data)
    if (response.data.success) {
      const {session_url} =response.data;
      window.location.replace(session_url);
    }else{
      alert("Error")
    }
  }
  // console.log(Date.now())
  return (
    <>
      <form onSubmit={placeOrderHandler} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" value={data.firstName} name='firstName' onChange={onChangeHandlers} placeholder='First name' />
            <input type="text" name='lastName' onChange={onChangeHandlers} value={data.lastName} placeholder='Last name' />
          </div>
          <input type="email" name='email' onChange={onChangeHandlers} value={data.email} placeholder='Email Address' />
          <input type="text" name='street' onChange={onChangeHandlers} value={data.street} placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' name='city' onChange={onChangeHandlers} value={data.city} />
            <input type="text" placeholder='State' name='state' onChange={onChangeHandlers} value={data.state} />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip Code' name='zipCode' onChange={onChangeHandlers} value={data.zipCode} />
            <input type="text" placeholder='Country' name='country' onChange={onChangeHandlers} value={data.country} />
          </div>
          <input type="text" placeholder='Phone' name='phone' onChange={onChangeHandlers} value={data.phone} />
        </div>
        <div className="place-order-right">

          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p> $ {getTotaCartAmmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {getTotaCartAmmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>$ {getTotaCartAmmount() === 0 ? 0 : getTotaCartAmmount() + 2}</b>
              </div>
            </div>
            <button type='submit'>Proceed to Payment</button>
          </div>

        </div>
      </form>
    </>
  )
}

export default PlaceOrder
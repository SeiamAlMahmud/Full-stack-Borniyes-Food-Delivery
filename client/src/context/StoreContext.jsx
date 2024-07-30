import React, { createContext, useEffect, useState } from 'react'
import { food_list } from "../assets/assets"
export const foodStoreContext = createContext(null)
const StoreContext = ({ children }) => {
    const [cartItems, setCartItems] = useState({})
    const [count, setCount] = useState(0)
    const url = 'http://127.0.0.1:3000'
    const [token, setToken] = useState("")


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const deleteFromCart = (itemId) => {
        // Create a copy of the cartItems state object
        const updatedCartItems = { ...cartItems };

        // Remove the itemId key from the copied object
        delete updatedCartItems[itemId];

        // Update the cartItems state with the modified object
        setCartItems(updatedCartItems);
    };


    const getTotaCartAmmount = () => {
        let totalAmmount = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                let itemInfo = food_list.find((product) => product._id === key);
                totalAmmount += itemInfo.price * cartItems[key]
            }
        }
        return totalAmmount
    }



    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }
    },[])

    const content = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotaCartAmmount,
        count,
        setCount,
        deleteFromCart,
        url,
        setToken,
        token
    }


    return (
        <foodStoreContext.Provider value={content}>
            {children}
        </foodStoreContext.Provider>
    )
}

export default StoreContext
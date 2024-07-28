import React, { createContext } from 'react'
export const adminContent = createContext(null)
const AdminContext = ({children}) => {
const url = 'http://127.0.0.1:3000/api/food'
const info = {url}
  return (
   
   <adminContent.Provider value={info}>
   {children}
   </adminContent.Provider>
   
  )
}

export default AdminContext
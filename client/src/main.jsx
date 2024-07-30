import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx'
import StoreContext from './context/StoreContext.jsx'
import Login from './pages/Login/Login.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import AddFoodForm from './pages/AddFoodForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add",
        element: <AddFoodForm />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContext>
    <Analytics />
    <Toaster />
      <RouterProvider router={router} />
    </StoreContext>
  </React.StrictMode>,
)

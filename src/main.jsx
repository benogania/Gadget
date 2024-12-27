import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import Orders from './components/Orders.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Signup from './components/signup.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },{
    path: '/orders',
    element: <Orders/>
  },{
    path: '/signup',
    element: <Signup/>
  },{
    path: '/cart',
    element: <Cart/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Authentication/Login/Login';
import Registration from './Authentication/Registration/Registration';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddToCart from './Pages/AddToCart/AddToCart';
import ProductDetails from './Pages/Home/ProductDetails';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Errror from './Error Page/Errror';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errror></Errror>,
    children:[
      {
       path:"/",
       element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/registartion",
        element:<Registration></Registration>,
       },
       {
        path:"/addProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
       path:"/addToCart",
       element:<PrivateRoute><AddToCart></AddToCart></PrivateRoute>
      },
      {
        path: '/productDetails/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
)

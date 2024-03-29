import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Routes/Home'
import ErrorPage from './Components/ErrorPage'
import AboutUs from './Routes/AboutUs'
import Shop from './Routes/Shop'
import Product from './Routes/Product'
import Splash from './Components/Splash'
import Projects from './Routes/Projects'
import './index.css'

//Creates root route for website 
import { createBrowserRouter as Router,RouterProvider } from 'react-router-dom'

const route = Router([
  {
    path:'/',
    element:<Splash imageSource = {'./src/assets/splash-logo.png'}/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'Home',
    element:<Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'AboutUs',
    element:<AboutUs/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'Shop',
    element:<Shop/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'Products',
    element:<Product/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: ':productName',
        element:<Product/>,
        errorElement:<ErrorPage/>
      },
    ]
  },
  {
    path:'Projects',
    element:<Projects/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:':projectId',
        element:<Projects/>,
        errorElement : <ErrorPage/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {route}/>
  </React.StrictMode>,
)

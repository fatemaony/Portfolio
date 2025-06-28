import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
   <div>
    <Navbar/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default Layout
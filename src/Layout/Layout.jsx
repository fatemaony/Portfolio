import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'
import Loading from '../Component/Loading'

const Layout = () => {
  return (
   <div>
    <Navbar/>
    <Loading/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default Layout
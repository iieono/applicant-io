import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from '../components/Footer'
import { useSelector } from 'react-redux';
import { selectInteract } from "../store/slices/interactSlice"

function Layout() {
  const interact = useSelector(selectInteract);

  return (
    <div className='flex relative min-h-screen w-full'>
      {interact.isSidebar && <div>
        <Sidebar />
      </div>}
      <div className={`flex flex-col w-full max-h-screen min-h-screen overflow-auto pt-3`}> 
      {/* //should e changed in  case faulty home page */}
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Layout
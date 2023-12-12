import React, { useEffect } from 'react'
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from '../components/Footer'
import { useSelector } from 'react-redux';
import { selectInteract } from "../store/slices/interactSlice"
import { selectAuth } from "../store/slices/authSlice"

function Layout() {
  const navigate = useNavigate();
  const interact = useSelector(selectInteract);
  const auth = useSelector(selectAuth);
  useEffect(()=>{
    if(!auth.isAuthenticated){
      navigate('/signin')
    }
  },[])

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
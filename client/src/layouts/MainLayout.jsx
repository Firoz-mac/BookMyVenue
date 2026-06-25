import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import BottomNav from '../components/bottomNav/BottomNav';

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full flex flex-col'>

      <Sidebar/>

      <Navbar/>

      <main className="flex-1 pt-16 pb-25 md:pb-5 bg-[var(--bg)]">
        <Outlet/>
      </main>
      
      <div className='flex md:hidden'>
        <BottomNav/>
      </div>

    </div>
  )
}

export default MainLayout
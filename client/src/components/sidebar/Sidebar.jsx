import React from 'react'
import { useSidebarStore } from '../../store/sidebarStore'

const Sidebar = () => {
    const {isOpen, closeSidebar} = useSidebarStore();
  return (
    <>
        {isOpen && (
            <div onClick={closeSidebar} className='fixed inset-0 bg-black/40 z-40'/>
        )}
        <div 
            className={
                `fixed top-0 right-0 w-80 bg-white h-screen shadow-lg z-50 
                transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
            } 
            
        >
            Sidebar
        </div>
    </>
  )
}

export default Sidebar
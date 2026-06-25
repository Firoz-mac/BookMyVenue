import React, { useEffect } from 'react'
import { icons } from '../../assets/icons';
import SearchInput from './SearchInput';
import { useSidebarStore } from '../../store/sidebarStore';
import { images } from '../../assets/assets';

const Navbar = () => {
  const { Search, FaUserCircle, MapPin } = icons;
  const {isOpen, openSidebar} = useSidebarStore();

  return (
    <nav 
      className='fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between border-b 
      border-[var(--border)] bg-[var(--card)] p-5 md:px-6 md:py-4'
    >

      <div className='flex items-center gap-10'>

        <div className='flex items-center gap-4'>

          <div className='flex gap-2'>

            <img 
              className='w-5 h-5' 
              src={images.bookMyVenue} 
              alt="Logo" 
            />

            <h2 className='font-semibold text-[var(--text)]'>
              book
              <span className='text-[var(--primary)]'>
                my
              </span>
              venue
            </h2>

          </div>

          <div className='hidden md:block w-px h-5 bg-[var(--border)]'></div>

          <button
            type='button'
            className=' hidden md:flex items-center gap-1 cursor-pointer text-sm text-[var(--text)] 
            hover:text-[var(--text-secondary)]'
          >
            
            <span className='text-[var(--text-secondary)]'><MapPin size={15}/></span>
            <span>Perinthalmanna</span>

          </button>

        </div>

        <ul className='hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text)]'>

          <li className='cursor-pointer hover:text-[var(--text-secondary)]'>Home</li>
          <li className='cursor-pointer hover:text-[var(--text-secondary)]'>Venues</li>
            
        </ul>

      </div>

      <div className='flex gap-3 items-center'>

        <div className='hidden md:flex'>
          <SearchInput/>
        </div>

        <button
            type='button'
            className='md:hidden flex items-center gap-1 cursor-pointer text-sm text-[var(--text)]'
        >
            <span>Perinthalmanna</span>
            <span className='text-[var(--text-secondary)]'><MapPin size={15}/></span>
        </button>

        <button
          type='button'
          onClick={openSidebar}
          className='hidden md:block cursor-pointer text-[var(--text-secondary)]'
        >
          <FaUserCircle size={30}/>
        </button>
          
      </div>
        

    </nav>
  )
}

export default Navbar
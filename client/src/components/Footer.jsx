import React from 'react'
import { footerData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { images } from '../assets/assets';

const Footer = () => {

    const navigate = useNavigate();

  return (
    <footer className='bg-[var(--card)] border-t border-[var(--border)]'>

        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 px-10 md:px-30 py-20 text-[var(--text)] gap-10'>

                <div>

                    <div className='flex gap-2'>

                        <img
                            className='w-5 h-5'
                            src={images.bookMyVenue} 
                            alt="Logo" 
                        />

                        <h2 className='text-xl font-semibold'>
                            book
                            <span className='text-[var(--primary)]'>my</span>
                            venue
                        </h2>
                    </div>
                    <p className='mt-3 text-sm text-[var(--text-secondary)] leading-tight'>
                        Providing the world's most sophisticated and easy-to-use platform for 
                        discovering premium event spaces
                    </p>
                    
                </div>

                <div className='text-sm space-y-4'>
                    <h3 className='font-semibold'>Explore</h3>
                    <ul className='space-y-3'>
                        {
                            footerData.explore.map((item)=>(
                                <li 
                                    key={item.title}
                                    className="text-[var(--text-secondary)] cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='text-sm space-y-4'>
                    <h3 className='font-semibold'>Links</h3>
                    <ul className='space-y-3'>
                        {
                            footerData.links.map((item)=>(
                                <li 
                                    key={item.title}
                                    className="text-[var(--text-secondary)] cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='text-sm space-y-4'>
                    <h3 className='font-semibold'>Company</h3>
                    <ul className='space-y-3'>
                        {
                            footerData.company.map((item)=>(
                                <li 
                                    key={item.title}
                                    className="text-[var(--text-secondary)] cursor-pointer"
                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

            <div 
                className='md:flex justify-between text-sm text-[var(--text-secondary)] 
                border-t border-[var(--border)] px-10 md:px-30 py-10'
            >
                <span>© 2024 BookMyVenue. Premium Marketplace for Event Spaces.</span>

                <div className='flex gap-6'>
                    {
                        footerData.terms.map((item)=>(
                            <span 
                                key={item.title} 
                                className='cursor-pointer mt-5 md:mt-0'
                            >
                                {item.title}
                            </span>
                        ))
                    }
                    
                </div>
            </div>

        </div>
        



    </footer>
  )
}

export default Footer
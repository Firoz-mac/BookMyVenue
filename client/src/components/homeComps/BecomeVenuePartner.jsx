import React from 'react'
import { icons } from '../../assets/icons'

const BecomeVenuePartner = () => {
    const {IoIosCheckmarkCircle} = icons;
  return (
    <section className='py-20 md:px-30 px-5'>

        <div 
            className='bg-gradient-to-br from-slate-50 to-slate-200 
            space-y-8 p-10 rounded-2xl'
        >

            <button 
                className='bg-[var(--primary-blue)] hover:bg-[var(--primary-hover-blue)]
                text-xs py-3 px-5 rounded-md cursor-pointer transition-colors duration-300 text-white'
            >
                Become a Venue Partner
            </button>

            <div className='space-y-1'>
                <h5 className='text-2xl font-semibold'>Turn Your Venue Into a Revenue</h5>
                <p className='text-[var(--text-secondary)] text-sm'>
                    Showcase your venue to a growing audience of event organizers, 
                    wedding planners, businesses, and individuals searching for exceptional spaces.
                </p>
            </div>

            <div className='flex flex-col gap-2'>

                <span className='font-semibold'>Benefits</span>
                <div className='flex flex-col'>

                    <div className='flex gap-2 items-center'>
                        <IoIosCheckmarkCircle className='text-[var(--primary-blue)]'/>
                        <span>Reach More Customers</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosCheckmarkCircle className='text-[var(--primary-blue)]'/>
                        <span>Increase Bookings</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IoIosCheckmarkCircle className='text-[var(--primary-blue)]'/>
                        <span>Easy Venue Management</span>
                    </div>
                    
                </div>

            </div>
        </div>

    </section>
  )
}

export default BecomeVenuePartner
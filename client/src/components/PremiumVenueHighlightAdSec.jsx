import React from 'react'
import { icons } from '../assets/icons'

const PremiumVenueHighlightAdSec = () => {
  const {ChevronRight, FaStar} = icons;

  return (
    <section className='md:px-30 px-5 py-10'>

      <div 
        className='group md:flex p-3 bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl 
        transition-all duration-300'
      >

        <div className='w-full md:w-1/2 md:h-[380px] h-[280px] relative overflow-hidden rounded-xl'>

          <img 
            className='w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110' 
            src="https://images.unsplash.com/photo-1505236858219-8359eb29e329" 
            alt="venue" 
          />

          <div 
            className='absolute top-0 flex flex-col justify-between 
            bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white 
            w-full h-full md:p-8 p-5 rounded-xl'
          >

            <span 
              className='text-[11px] font-medium bg-[var(--primary-blue)] w-fit py-1 px-3 rounded-full'
            >
              Recommended venue
            </span>

            <div>
              
              <h5 className='font-medium text-xl'>Warsaw Experience Ceniter</h5>

              <div className='flex text-sm gap-2'>

                <span>Warsaw, Masovian</span>
                
                <div className='flex items-center gap-1'>
                  <FaStar size={12} className='text-[var(--color-gold)]'/>
                  <span className='text-sm '>4.9</span>
                </div>

              </div>
          
            </div>

          </div>

        </div>

        <div className='p-5 md:p-10 md:w-1/2 flex flex-col justify-between gap-5'>

          <div className='space-y-2'>

            <h4 className='font-semibold text-xl md:text-2xl leading-tight'>
              Large-scale venue with expansive open space, ideal for concerts,
              large productions and high-capacity events
            </h4>

            <p 
              className='text-[var(--text-secondary)] text-sm'
            >
              degigned to handle complex setups while maintaining a premium, modern atmosphere.
            </p>

          </div>

          <button 
            className='flex items-center gap-2 bg-[var(--primary-blue)] text-white py-3 px-5 
            rounded-xl cursor-pointer hover:bg-[var(--primary-hover-blue)] transition-colors'
          >
            <span className='text-sm'>See venue</span>
            <ChevronRight size={14}/>
          </button>

        </div>

      </div>

    </section>
  )
}

export default PremiumVenueHighlightAdSec
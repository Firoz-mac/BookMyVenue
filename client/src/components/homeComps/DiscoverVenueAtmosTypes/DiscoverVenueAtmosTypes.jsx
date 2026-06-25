import React, { useEffect, useRef, useState } from 'react'
import AtmosphereCard from './AtmosphereCard'
import { icons } from '../../../assets/icons';
import { venueAtmospheresCategory } from '../../../assets/assets';

const DiscoverVenueAtmosTypes = () => {

  const { ChevronRight } = icons;

  return (
    <section className='space-y-4'>

      <div className='text-center py-10'>
        <h3 
          className='text-xl md:text-4xl font-semibold text-[var(--text)]'
        >
          What kind of atmosphere <br /> are you planning for your event?
        </h3>
        <p className='text-sm pt-3 text-[var(--text-secondary)]'>
          Over 5000 venues across Poland 
          <br /> ready for your event
        </p>
      </div>

      <div className='w-full flex justify-center gap-2 overflow-hidden'>
        {
          venueAtmospheresCategory.slice(0,6).map((cat, i)=>(
            <AtmosphereCard 
              key={i} 
              title={cat.title} 
              image={cat.image}
            />
          ))
        }
        
      </div>

      <div 
        className='flex justify-center text-[var(--primary-blue)] 
        hover:text-[var(--primary-hover-blue)] 
        text-md gap-1 items-center py-6 cursor-pointer'
      >
        <span>See all</span>
        <ChevronRight size={14}/>
      </div>
      
    </section>
  )
}

export default DiscoverVenueAtmosTypes
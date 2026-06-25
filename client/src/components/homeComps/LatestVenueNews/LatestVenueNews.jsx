import React from 'react'
import LargeCard from './LargeCard'
import NormalCard from './NormalCard'
import { icons } from '../../../assets/icons'

const LatestVenueNews = () => {

  const { ChevronRight } = icons;

  return (
    <div className='md:px-30 py-15 px-5 space-y-4'>

      <div className='text-center py-10'>

        <h3 
          className='text-xl md:text-4xl font-semibold text-[var(--text)]'
        >
          News from Venues
        </h3>

      </div>

      <div className='grid md:grid-cols-2 gap-10 md:h-[400px]'>

        <LargeCard/>

        <div className='grid md:grid-cols-2 gap-5 h-full'>

          <NormalCard/>
          <NormalCard/>
          <NormalCard/>
          <NormalCard/>

        </div>

      </div>

      <div 
        className='flex justify-center text-[var(--primary-blue)]
        hover:text-[var(--primary-hover-blue)]
        text-md gap-1 items-center py-6 cursor-pointer'
      >
        <span>See all</span>
        <ChevronRight size={14}/>
      </div>

    </div>
  )
}

export default LatestVenueNews
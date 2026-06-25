import React from 'react'
import { icons } from '../../assets/icons'
import { dummyVenues } from '../../assets/assets';
import VenueDetailCard from '../VenueDetailCard';

const VenuesInLocation = () => {
  const { Users, ChevronRight } = icons;
  return (
    <section className='md:px-30 px-5 py-10'>

      <div className='space-y-5'>

        <div className='flex justify-between'>

          <h3 className='text-xl font-semibold text-[var(--text)]'>Venues in Perinthalmanna</h3>

          <button
            type='button'
            className='flex items-center gap-1 cursor-pointer
            text-[var(--primary-blue)] hover:text-[var(--primary-hover-blue)]'
          >
            <span className='text-xs cursor-pointer '>View All</span>
            <ChevronRight size={12}/>
          </button>

        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5'>
          {
            dummyVenues
              .filter((venue) => venue.featured)
              .slice(0, 4)
              .map((venue)=> (
                <VenueDetailCard
                  key={venue.title}
                  image={venue.image}
                  title={venue.title}
                  rating={venue.rating}
                  reviewsCount={venue.reviews}
                  location={venue.location}
                  featured={venue.featured}
                  status='Next Availablility : 24 June 2026'
                  facilities={[
                    {
                      icon: Users,
                      label: "500 Capacity"
                    },
                    {
                      icon: Users,
                      label: "50+ Parking"
                    },
                    {
                      icon: Users,
                      label: "Stage"
                    },
                  ]}
                />
              ))
          }
        </div>

      </div>

    </section>
  )
}

export default VenuesInLocation
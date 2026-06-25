import React, { useEffect, useState } from 'react'
import { icons } from '../assets/icons'
import { images } from '../assets/assets';

const VenueDetailCard = ({title, rating, reviewsCount, location, featured, image}) => {

    const {IoMdHeartEmpty, IoMdHeart, FaStar} = icons;

    const [favorite, setFavorite] = useState(false);

    const handleFavoriteButton = ()=>{
        setFavorite(prev => !prev)
    }

  return (
    <div 
        className='group w-full bg-[var(--card)] rounded-xl md:rounded-2xl overflow-hidden  border 
        border-[var(--border)] cursor-pointer'
    >
        <div className='relative h-30 md:h-36 overflow-hidden'>

            <img 
                className='w-full h-full object-cover transition-transform group-hover:scale-105' 
                src={image} 
                alt="venue"
            />

            {
                featured && (
                    <button 
                        className='absolute bottom-3 left-3 text-[9px] font-medium bg-[var(--primary-blue)] 
                        text-white py-1 px-3 rounded-full z-10'
                    >
                        Featured
                    </button>
                )
            }

            <button
                type='button'
                onClick={handleFavoriteButton}
                className='absolute top-3 right-3 bg-white/80 rounded-full p-1 cursor-pointer 
                  hover:bg-white transition-colors z-10'>

                {
                    favorite ? (
                        <IoMdHeart className='w-4.5 h-4.5 md:w-4.5 md:h-4.5 text-[var(--text-secondary)] text-red-600'/>
                    ) : <IoMdHeartEmpty className='w-4.5 h-4.5 md:w-4.5 md:h-4.5 hover:text-red-600'/>
                }
                
            </button>

        </div>

        <div className='bg-[var(--card)] px-3 py-4 md:p-5 flex flex-col gap-2'>

            <div className='flex justify-between'>
                <div className='flex gap-2 items-center text-[11px]'>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[var(--color-gold)]'/>
                        <span className='text-[var(--text-secondary)]'>{rating}</span>
                    </div>

                    <div className='w-px h-[70%] bg-[var(--border)]'></div>
                    <span className='text-[var(--text-secondary)] flex gap-2'>{reviewsCount} <span className='hidden md:block'>Reviews</span></span>
                </div>
            </div>

            <div className='space-y-1'>
                
                <h4 className='text-sm md:text-lg font-semibold text-[var(--text)] leading-tight'>{title}</h4>
                <div className='flex text-xs items-center gap-2 text-[var(--text-secondary)]'>
                    
                    <span>{location}</span>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default VenueDetailCard
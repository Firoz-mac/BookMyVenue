import React from 'react'

const NormalCard = () => {
  return (
    <div className='flex flex-col text-[var(--text)] cursor-pointer gap-2'>

      <div className='h-29 rounded-md overflow-hidden'>

        <img
          className='w-full h-full object-cover' 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
          alt="Venue" 
        />

      </div>

      <div className='space-y-2'>

        <p 
          className='text-xs leading-snug line-clamp-2'
        >
          We were there, we saw: Warsaw Experience Center 
          new chapter for the event center at Legia stadium Legia stadium
        </p>

        <span className='text-xs text-[var(--text-secondary)]'>Tulip Inn Hotel</span>

      </div>

    </div>
  )
}

export default NormalCard
import React from 'react'

const LargeCard = () => {
  return (
    <div className='relative h-full overflow-hidden rounded-2xl cursor-pointer'>

        <img
            className='w-full h-full object-cover' 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945" 
            alt="venue" 
        />

        <div className='absolute bg-gradient-to-t from-black/80 via-black/20 to-transparent inset-0'>
            <div className="absolute bottom-6 left-6 right-6">
                <p className='text-white text-xl line-clamp-2'>
                    When a hotel isn't enough how Blue Mountain Resort meets MICE event standards
                </p>
            </div>
        </div>

    </div>
  )
}

export default LargeCard
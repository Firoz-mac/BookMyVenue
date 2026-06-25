import React from 'react'

const AtmosphereCard = ({title, image}) => {
  return (
    <div className='relative w-72 h-44 overflow-hidden cursor-pointer shrink-0 rounded-xl oe'>

        <img
            className='w-full h-full object-cover'
            src={image} 
            alt="venue"
        />

        <div className='absolute bg-gradient-to-t from-black/80 via-black/20 to-transparent inset-0'>
            <div className="absolute bottom-4 left-4">
                <h4 className="text-white text-md font-medium">{title}</h4>
            </div>
        </div>

    </div>
  )
}

export default AtmosphereCard
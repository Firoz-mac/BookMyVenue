import React from 'react'

const StepCards = ({title, description, stepNumber}) => {
  return (
    <div className='flex flex-col items-center max-w-[220px] gap-3'>
        
        <span 
            className='text-7xl font-bold leading-none text-[var(--text-secondary)]/30 select-none'
        >
            {stepNumber}
        </span>

        <div className='text-center'>
            <h4 className='font-semibold text-base text-[var(--text)]'>{title}</h4>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
                {description}
            </p>
        </div>
    </div>
  )
}

export default StepCards
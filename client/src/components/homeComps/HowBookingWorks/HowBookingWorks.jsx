import React from 'react'
import StepCards from './StepCards'
import { bookingSteps } from '../../../assets/assets'

const HowBookingWorks = () => {
  return (
    <section className="py-20 md:px-30 px-5">

        
        <div className='flex flex-col md:flex-row gap-15'>

            <div className='md:w-1/4 flex flex-col justify-center '>

                <div>
                    <h4 className="text-2xl font-semibold text-[var(--text)]">4 Easy Steps To Book A Venue</h4>
                    <p className='text-sm text-[var(--text-secondary)] mt-3'>
                        Get familiar with our simple venue booking process.
                    </p>
                </div>

                <button
                    type='button' 
                    className='bg-[var(--primary-blue)] hover:bg-[var(--primary-hover-blue)] transition-colors
                    text-sm text-white px-5 py-3 rounded-full cursor-pointer md:w-fit mt-6'
                >
                    Book Venue
                </button>

            </div>

            <div 
                className='md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 
                justify-items-center items-center'
            >

                {bookingSteps.map((step, i)=>(
                    <StepCards 
                        key={i}
                        title={step.title}
                        description={step.description}
                        stepNumber={i+1}
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default HowBookingWorks
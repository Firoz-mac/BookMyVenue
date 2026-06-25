import React from 'react'
import { feedbackOptions } from '../../../assets/assets'

const QuickFeedbackSection = () => {
  return (
    <section className='py-20 md:px-30 px-5'>

        <div>

            <div className='text-center py-5'>
                <h3 className='text-xl md:text-4xl font-semibold text-[var(--text)]'>How was your experience?</h3>
                <p className='text-sm pt-3 text-[var(--text-secondary)]'>
                    Your feedback helps us improve and create better experiences.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-6 md:gap-10 py-8'>
                {
                    feedbackOptions.map((opt)=>(

                        <div
                            key={opt.label}
                            className='group flex flex-col items-center gap-2 md:gap-4 text-center cursor-pointer transition-all duration-300 p-3'>
                            <img 
                                className='w-12 md:w-20 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 ' 
                                src={opt.icon} alt={opt.label} 
                            />
                            <p className='text-[9px] md:text-xs text-[var(--text-secondary)]'>
                                {opt.label}
                            </p>
                        </div>

                    ))
                }
            </div>

        </div>

    </section>
  )
}

export default QuickFeedbackSection
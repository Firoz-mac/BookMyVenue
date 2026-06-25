import React from 'react'
import { mobileNavMenuContent } from '../../assets/assets'

const BottomNav = () => {
  return (
    <div 
        className='fixed bottom-0 left-0 right-0 z-50 w-full bg-[var(--card)] border-t border-[var(--border)] 
        flex justify-between px-6 py-4'
    >

        {
            mobileNavMenuContent.map((item)=>{
                const Icon = item.icon;
                return (
                    <div 
                        key={item.title} 
                        className='flex flex-col items-center gap-1'
                    >
                        <span className='text-[var(--text-secondary)]'><Icon size={25}/></span>
                        <span className='text-xs text-[var(--text-secondary)]'>{item.title}</span>
                    </div>
                );
            })
        }

    </div>
  )
}

export default BottomNav
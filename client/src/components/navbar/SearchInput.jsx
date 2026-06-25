import React from 'react'
import { icons } from '../../assets/icons'

const SearchInput = () => {
  const { Search } = icons;
  return (
      
    <div className='flex relative'>

      <Search
        size={18}
        className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]'
      />

      <input 
        type="text"
        placeholder="Search for venues, halls and more"
        className='h-10 w-72 pl-11 pr-4 rounded-xl text-[var(--text-secondary)] border border-[var(--border)] 
        bg-transparent placeholder:text-[var(--text-secondary)] outline-none text-sm transition'
      />

    </div>

  )
}

export default SearchInput
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { mainCategories } from '../../assets/assets'
import { icons } from '../../assets/icons'

const MainCategories = () => {

    const { ChevronLeft, ChevronRight } = icons;

    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollRef = useRef(null);

    const handleScrollLeft = ()=>{
        scrollRef.current?.scrollBy({
            left: -300,
            behavior: 'smooth',
        });
    };

    const handleScrollRight = ()=>{
        scrollRef.current?.scrollBy({
            left: 300,
            behavior: 'smooth',
        });
    };

    const checkScrollPosition =()=>{
      const container = scrollRef.current;
      if (!container) return;

      const {scrollLeft, scrollWidth, clientWidth} = container;

      setShowLeftArrow(scrollLeft > 0);

      setShowRightArrow(
        scrollLeft < scrollWidth - clientWidth - 5
      );
    };


    useEffect(()=>{
      const container = scrollRef.current;
      if (!container) return;

      checkScrollPosition();

      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);

      return ()=>{
        container.removeEventListener(
          'scroll',
          checkScrollPosition
        );

        window.removeEventListener(
          'resize',
          checkScrollPosition
        );
      };
    },[]);


  return (
    <section className='w-full text-[var(--text)] py-5 md:pt-10'>

      <h3 className='text-xl font-semibold mb-3 md:px-30 px-5'>Browse by Category</h3>

      <div className='w-full flex gap-3 md:px-22 px-5'>

        <button
          type='button'
          onClick={handleScrollLeft}
          className={`hidden md:flex items-center cursor-pointer 
          ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronLeft size={25}/>
        </button>
          
        <div 
          ref={scrollRef} 
          className='flex gap-2 overflow-x-scroll scrollbar-hide flex-1'
        >

          {
            mainCategories.map((category, i)=>{

                const Icon=category.icon;

                return (
                    <button
                      key={i}
                      type='button'
                      className='flex shrink-0 gap-2 min-w-fit text-xs bg-[var(--card)] border border-[var(--border)] 
                      rounded-full px-4 py-2 cursor-pointer items-center transition-all hover:bg-[var(--primary)]
                      hover:text-white'
                    >
                      <Icon size={15} className="shrink-0"/>
                      {category.title}
                    </button>
                );
            })
          }

        </div>
          
        <button 
          type='button'
          onClick={handleScrollRight}
          className={`hidden md:flex items-center cursor-pointer 
            ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ChevronRight size={25}/>
        </button>
          
      </div>

    </section>
  )
}

export default MainCategories
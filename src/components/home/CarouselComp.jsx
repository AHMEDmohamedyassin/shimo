import React from 'react'
import database from '../../database.json'

const CarouselComp = () => {
  return (
    <>
    
    
    <div id="default-carousel" class="relative w-full" data-carousel="slide">

        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

            {
                database.portfolio?.map((data , index) => (
                    <div key={index} className="hidden duration-700 ease-in-out " data-carousel-item>
                        <img src={data.image} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={data.title}/>
                    </div>
                ) )
            }

        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {
                database.portfolio?.map((data , index) => (
                    <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={index}></button>
                ) )
            }
        </div>

        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>

    </>
  )
}

export default CarouselComp
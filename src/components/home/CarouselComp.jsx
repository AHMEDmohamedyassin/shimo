import React, { useState } from 'react'
import database from '../../database.json'

const CarouselComp = () => {
    const [active , setActive] = useState(0)

    const navigate_carousel = (next = true) => {
        let length = database.portfolio?.length

        if(next && length && active < length -1)
            setActive(active + 1)
        else if (next && length && active == length - 1)
            setActive(0)
        else if (!next && length && active > 0)
            setActive(active - 1)
        else if (!next && length && active == 0)
            setActive(length - 1 )
    }
  return (
    <>
    
    
    <div  className="relative w-full" >

        <div className="relative h-[100vb] rounded-lg md:h-96">

            {
                database.portfolio?.map((data , index) => (
                    <div key={index}>

                        {/* large screen carousel  */}
                        <div className={`${index != active ? 'hidden' : ''} max-md:hidden absolute top-0 left-0 w-full h-full flex items-center justify-between px-20`} >
                            {/* data */}
                            <div className='flex-1 flex flex-col gap-4'>
                                <h1 className='font-extrabold text-4xl dark:text-white '>{data.title}</h1>
                                <p className='text-gray-500 dark:text-gray-400 font-semibold'>{data.description}</p>
                            </div>
                            {/* image  */}
                            <div className='flex-1 relative w-full h-full'>
                                <img src={data.image ?? database.default_img} className=" object-cover object-top absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 rounded-full h-[90%] w-[90%] shadow-xl shadow-gray-500/50 border-gray-500 border-[1px]" alt={data.title}/>
                            </div>
                        </div>

                        {/* small screen carousel  */}
                        <div className={`${index != active ? 'hidden' : ''} md:hidden absolute top-0 left-0 w-full h-full flex items-end p-4 py-20`} >
                            {/* data */}
                            <div className='flex flex-col gap-4 z-10 bg-white/50 p-10 rounded-xl shadow shadow-white'>
                                <h1 className='font-extrabold text-4xl '>{data.title}</h1>
                                <p className='text-gray-700 font-semibold'>{data.description}</p>
                            </div>
                            {/* image  */}
                            <div className='absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden'>
                                <img src={data.image ?? database.default_img} className="h-full object-cover object-center" alt={data.title}/>
                            </div>
                        </div>

                    </div>
                ) )
            }

        </div>

        <div className="absolute z-30 flex -translate-x-1/2 md:bottom-0 bottom-2 left-1/2 space-x-3 rtl:space-x-reverse">
            {
                database.portfolio?.map((data , index) => (
                    <button onClick={() => setActive(index)} key={index} type="button" className={`${active == index ? 'bg-blue-600' : 'bg-gray-500/50'} hover:bg-blue-600 w-3 h-3 rounded-full `} ></button>
                ) )
            }
        </div>

        <button onClick={() => navigate_carousel(false)} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button onClick={navigate_carousel} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>

    </>
  )
}

export default CarouselComp
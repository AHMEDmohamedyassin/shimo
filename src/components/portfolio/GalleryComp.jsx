import React from 'react'
import database from '../../database.json'

const GalleryComp = () => {
  return (
    <div className='flex flex-col gap-6'>
        <p class="w-full text-center text-4xl text-gray-900 dark:text-white">معرض الصور</p>
        
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {
                database.portfolio?.map((data , index) => (
                    <div key={index}>
                        <img className="h-auto max-w-full rounded-lg" src={data.image} alt=""/>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default GalleryComp
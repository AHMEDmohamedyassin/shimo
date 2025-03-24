import React from 'react'
import CardComp from './CardComp'
import database from '../../database.json'

const PortofolioDataComp = () => {
  return (
    <>
        <div className='flex items-center justify-center flex-col gap-6'>
            <p class="w-full text-center text-4xl text-gray-900 dark:text-white">السيرة الذاتية</p>
            <div className='w-full grid lg:grid-cols-3 sm:grid-cols-2 justify-center gap-4'>
                {
                  database.portfolio?.map((data , index) => (
                    <CardComp key={index} title={data.title} description={data.description}/>
                  ))
                }
            </div>
        </div>
    </>
  )
}

export default PortofolioDataComp
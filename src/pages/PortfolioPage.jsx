import React from 'react'
import CardComp from '../components/portfolio/CardComp'
import GalleryComp from '../components/portfolio/GalleryComp'
import SeparatorComp from '../components/public/SeparatorComp'

const PortfolioPage = () => {
  return (
    <>

        <div className='flex items-center justify-center flex-col gap-6'>
            <p class="w-full text-center text-4xl text-gray-900 dark:text-white">السيرة الذاتية</p>
            <div className='w-full grid grid-cols-3 gap-4'>
                <CardComp title={'test'} description={'test test test test test test test test test test test test test test test test test test test test '}/>
                <CardComp title={'test'} description={'test test test test test test test test test test test test test test test test test test test test '}/>
                <CardComp title={'test'} description={'test test test test test test test test test test test test test test test test test test test test '}/>
                <CardComp title={'test'} description={'test test test test test test test test test test test test test test test test test test test test '}/>
                <CardComp title={'test'} description={'test test test test test test test test test test test test test test test test test test test test '}/>
            </div>
        </div>

        <SeparatorComp/>

        <GalleryComp/>
    </>
  )
}

export default PortfolioPage
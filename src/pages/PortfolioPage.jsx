import React from 'react'
import CardComp from '../components/portfolio/CardComp'
import GalleryComp from '../components/portfolio/GalleryComp'
import SeparatorComp from '../components/public/SeparatorComp'
import database from '../database.json'
import PortofolioDataComp from '../components/portfolio/PortofolioDataComp'

const PortfolioPage = () => {
  return (
    <>

        <PortofolioDataComp/>

        {
          database.portfolio?.length ? (
            <>
              <SeparatorComp/>

              <GalleryComp/>
            </>
          ) : <div className='font-bold text-sm text-center text-red-500'>لا يوجد بيانات حاليا</div>
        }
    </>
  )
}

export default PortfolioPage
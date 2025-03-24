import React from 'react'
import CarouselComp from '../components/home/CarouselComp'
import SeparatorComp from '../components/public/SeparatorComp'
import PortofolioDataComp from '../components/portfolio/PortofolioDataComp'

const HomePage = () => {
  return (
    <div>
        <CarouselComp/>

        <SeparatorComp/>

        <PortofolioDataComp/>
    </div>
  )
}

export default HomePage
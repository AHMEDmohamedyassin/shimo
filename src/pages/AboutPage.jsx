import React from 'react'
import AccordionArrayComp from '../components/about/AccordionArrayComp'
import database from '../database.json'

const AboutPage = () => {
  return (
    <>
    <div class="flex flex-col items-center pb-10">
        <img class="sm:w-64 aspect-square object-cover object-center mb-3 rounded-full shadow-lg" src={database.default_img} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{database.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{database.spectialization}</span>
    </div>


        <AccordionArrayComp/>
    </>

  )
}

export default AboutPage
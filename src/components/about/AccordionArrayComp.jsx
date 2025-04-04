import React, { useState } from 'react'
import AccordionComp from './AccordionComp'
import database from '../../database.json'

const AccordionArrayComp = () => {
  const [open , setOpen] = useState(0)
  return (
    <div className='border-gray-200 dark:border-gray-700 border-b-2'>
    {
        database.about?.map((e , index) => (
            <AccordionComp id={index} {...e} open={open} setOpen={setOpen}/>
        ))
    }
    </div>
  )
}

export default AccordionArrayComp
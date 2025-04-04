import React from 'react'
import AccordionComp from './AccordionComp'
import database from '../../database.json'

const AccordionArrayComp = () => {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
    {
        database.about?.map((e , index) => (
            <AccordionComp id={index} {...e}/>
        ))
    }
    </div>
  )
}

export default AccordionArrayComp
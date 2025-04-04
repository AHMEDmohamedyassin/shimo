import React from 'react'

const AccordionComp = ({id , title , desc}) => {
  return (
    <div>
        {
            title ? (
                <>
                    <h2 id={`accordion-collapse-heading-${id}`}>
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-collapse-body-${id}`} aria-expanded="true" aria-controls={`accordion-collapse-body-${id}`}>
                        <span>{title}</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id={`accordion-collapse-body-${id}`} class="hidden" aria-labelledby={`accordion-collapse-heading-${id}`}>
                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">{desc ?? title}</p>
                        </div>
                    </div>
                </>
            ) : null
        }
    </div>
  )
}

export default AccordionComp
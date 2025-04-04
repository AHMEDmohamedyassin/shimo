
const AccordionComp = ({id , title , desc , open , setOpen}) => {
  return (
    <div>
        {
            title ? (
                <>
                    <h2 >
                        <button onClick={() => open == id ? setOpen(null) : setOpen(id)} type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"  aria-expanded="true" >
                        <span>{title}</span>
                        <svg  class={`w-3 h-3 ${open == id ? "" : "rotate-180" } shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    {
                        open == id ? (
                            <div >
                                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">{desc ?? title}</p>
                                </div>
                            </div>
                        ) : null
                    }
                </>
            ) : null
        }
    </div>
  )
}

export default AccordionComp
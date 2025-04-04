import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
        <img src='/shimo.svg' className='lg:w-1/4 w-2/4'/>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 text-center">الصفحة غير موجودة.</p>
        
        <Link to={'/'} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">الصفحة الرئيسية</Link>
    </div>
  )
}

export default NotFoundPage
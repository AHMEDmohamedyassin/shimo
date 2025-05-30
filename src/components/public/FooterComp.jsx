import React from 'react'
import database from '../../database.json'
import { Link } from 'react-router-dom'

const FooterComp = () => {
  return (
    <div>

        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4 mt-10 mb-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex max-sm:flex-col-reverse sm:items-center sm:justify-between">
                    <Link to={'/'}  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/shimo.svg" className="h-8" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shimo</span> */}
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {
                            database.routes?.map((e , index) => (
                                <li key={index}>
                                    <Link to={e.path} className="hover:underline me-4 md:me-6">{e.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span> */}
            </div>
        </footer>

    </div>
  )
}

export default FooterComp
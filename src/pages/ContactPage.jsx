import React from 'react'
import database from '../database.json'

const ContactPage = () => {
  return (
    <>
        <div className='w-full flex items-center justify-center flex-col gap-6'>
            <p class="w-full text-center text-4xl text-gray-900 dark:text-white">بيانات الاتصال</p>
            {
                database.contacts?.length ? (
                    <div className='w-full flex flex-col'>
                        {
                            database.contacts?.map((contact , index) => (
                                <a key={index} href={contact.href} className='w-full flex items-center justify-start gap-2 bg-gray-50 dark:bg-gray-800 lg:py-6 py-4 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm border-y-[1px] border-gray-200 dark:border-gray-500'>
                                    <i className={`${contact.icon} text-gray-500`}></i>
                                    <h1 className="max-lg:text-lg text-xl font-semibold text-gray-900 dark:text-white hover:underline">{contact.value}</h1>
                                </a>
                            ))
                        }
                    </div>
                ) : <div className='font-bold text-sm text-center text-red-500'>لا يوجد بيانات حاليا</div>
            }
        </div>
    </>
  )
}

export default ContactPage
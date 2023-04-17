import React from 'react'

function Appbar() {
  return (
    <>
        <nav className="bg-white dark:bg-purple-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-purple-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center"><img src="https://img.icons8.com/ios/50/null/car--v1.png" className="h-8 mr-3" alt="Logo"/> <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PriceWise</span> </a>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-purple-800 md:dark:bg-purple-900 dark:border-gray-700">
                    <li>
                        <a href="/" className=" py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/" className=" py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="/" className=" py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                        <a href="/" className=" py-2 pl-3 pr-4 text-purple-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-purple-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>



    </>
  )
}

export default Appbar;

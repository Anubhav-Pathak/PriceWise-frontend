import React from 'react'

function Appbar() {
  return (
    <>
        <nav className="bg-white dark:bg-purple-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-purple-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center"><img src="https://img.icons8.com/ios/50/null/car--v1.png" className="h-8 mr-3" alt="Logo"/> <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PriceWise</span> </a>
            </div>
        </nav>



    </>
  )
}

export default Appbar;

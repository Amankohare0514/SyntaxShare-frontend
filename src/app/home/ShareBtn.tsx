import Link from 'next/link'
import React from 'react'

const ShareBtn = () => {
    return (
        <section className="text-gray-700 dark:text-gray-400 body-font">
            <div className="container px-5 py-14 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-700 dark:text-gray-400">Have a cool coding tip, project, or resource? Share it on Syntax Share and inspire fellow developers!.</h1>
                    <Link href={"/share"} >
                        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Share</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ShareBtn
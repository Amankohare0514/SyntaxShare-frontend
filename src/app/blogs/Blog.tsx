"use client"
import React from 'react'
import BlogData from './BlogData'
const Blog = () => {
    return (
        <div>
            <div className="grid mt-6 md:p-0 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mx-auto max-w-6xl">
                {BlogData.map((item, index) => (
                    <div key={index} className="max-w-6xl hover:dark:bg-neutral-950 hover:bg-neutral-100 p-4 border rounded-xl overflow-hidden ">
                        <img className="w-full" src={item.image} alt="blog image" />
                        <div className="py-4">
                            <div className="font-bold text-xl mb-2">{item.title}</div>
                            <p className="text-base">
                                {item.description}
                            </p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener"
                                className="flex mt-4 items-center justify-center text-gray-600 dark:text-gray-400 border h-10 w-32 rounded-full mx-auto "
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
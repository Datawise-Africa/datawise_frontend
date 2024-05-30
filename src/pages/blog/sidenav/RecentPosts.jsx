import React from 'react'
import { NavLink } from 'react-router-dom'

const RecentPosts = ({blogs}) => {
    const recentBlogs = blogs.slice(0,5)
    return (
        <div className='p-4 bg-n-7 rounded-lg'>
            <h2 className='text-n-14 mb-4 font-bold'>Recent Posts</h2>
            <ul className='space-y-4'>
                {recentBlogs.map((blog) => (
                        <li key={blog.id} >
                            <NavLink to={`/blog/${blog.slug}`} className='text-n-14 flex items-center'>
                                <svg className="w-6 h-6 text-n-13 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
                                </svg>

                                {blog.title}
                            </NavLink>
                        </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default RecentPosts
import React from 'react'

const SortData = ({ sortIsOpen, toggleDropdown }) => {
    const sortOptions = ["Relevant", "Popular", "Most Recent"]
    return (
        <div className='relative inline-block z-50'>
            <div onClick={toggleDropdown} className='cursor-pointer'>
                <p>Sort by</p>
            </div>
            {sortIsOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-n-7 border bordner-n-4 rounded-md shadow-lg'>
                    {sortOptions.map((option, index) => (
                        <div key={index} onClick={() => toggleDropdown()}
                        className='px-4 py-2 cursor-pointer hover:text-n-9'
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SortData

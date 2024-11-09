import React from 'react'

const FilterSection = ({title, options}) => {
  return (
    <div className='border-t border-n-14 pt-4'>
      <h3 className='font-semibold text-lg'>{title}</h3>
      <div className='flex flex-col space-y-2'>
        {options.map((option, index) => (
            <label key={index} className='flex items-center space-x-2'>
                <input type="checkbox" className='form-checkbox' />
                <span>{option}</span>
            </label>
        ))}
      </div>
    </div>
  )
}

export default FilterSection

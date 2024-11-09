import React from 'react'
import filter_icon from "/assets/datalab/filter-icon.svg";

const FilterIcon = () => {
  return (
    <div className='flex gap-1'>
      <img src={filter_icon} alt="" className='w-4 h-6'/>
      <p>Filter</p>
    </div>
  )
}

export default FilterIcon

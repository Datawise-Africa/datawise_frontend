import React from 'react'
import FilterSection from './FilterSection'

const FilterPanel = () => {
  return (
    <div className="lg:col-span-1">
    {/* Map over your filters here */}
    {/* Example filter section */}
    <div className="flex flex-col space-y-4 mt-5">
      <FilterSection title="Access Level" options={["Public Access", "Non-Profit", "Commercial", "Student"]} />
      <FilterSection title="Data Type" options={["Agriculture", "Economic", "Healthcare", "Environmental"]} />
      <FilterSection title="Region" options={["East Africa", "West Africa", "North Africa", "Southern Africa"]} />
      <FilterSection title="Timeframe" options={["Last Year", "Last 5 Years", "5+ Years"]} />
    </div>
  </div>
  )
}

export default FilterPanel

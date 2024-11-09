import React from 'react'
import DatasetCard from './DatasetCard';

const DatasetGrid = ({ datasets }) => {
  return (
    <div className='md:col-span-3 lg:col-span-3 lg:mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {datasets.map((dataset, index) => (
            <DatasetCard key={index} dataset={dataset} />
        ))}
      </div>
    </div>
  )
}

export default DatasetGrid

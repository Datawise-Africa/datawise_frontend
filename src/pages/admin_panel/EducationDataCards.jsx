import React from 'react'

const EducationDataCards = ({ data }) => {
    if (!data.length) return <p>Data loading...</p>

    return (
        <div className="p-4 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0, 10).map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-bold">{item.programme_name}</h3>
            <p>Institution: {item.institution_name}</p>
            <p>Program Code: {item.program_code}</p>
            <p>Cost: {item.program_cost}</p>
            <p>Category: {item.programme_category.category}</p>
            <p>Credential: {item.programme_category.credential}</p>
            </div>
        ))}
        </div>
    )
    
}

export default EducationDataCards
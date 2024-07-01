import React from 'react'

function UserTable({columns, data}) {
  return (
    <div className="overflow-x-auto">
        <table className='min-w-full'>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th 
                            key={column.id} 
                            className='py-2 px-4 border-b text-left text-n-1'>
                                {column.name}
                            </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr
                        key={row.id}
                    >
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserTable
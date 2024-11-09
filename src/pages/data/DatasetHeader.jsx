import React from 'react'

import SearchDatasets from "./SearchDatasets";

import datalab from "/assets/datalab-logo.svg";
import user_icon from "/assets/user.svg";

const DatasetHeader = ({userId, userNames, handleAuthModalToggle, handleSearch}) => {
  return (
    <div className='flex items-center justify-between py-4 gap-12'>
        <div className='flex items-center space-x-1'>
            <img src={datalab} alt="Datalab Logo" className="w-6 h-8" />
            <h2 className="h4 text-n-14">Datalab</h2>
        </div>
        <div className="hidden lg:flex flex-grow max-w-xl">
            <SearchDatasets onSearch={handleSearch} className="w-full"/>
        </div>
        <div className="">
            {userId ? (
                <span className=''>Welcome, {userNames}</span>
            ) : (
                <button onClick={handleAuthModalToggle} className="py-2 px-3 rounded-md text-white bg-n-8 hover:bg-n-6 transition-all duration-300 flex gap-1">
                    <img src={user_icon} alt="User Icon" className="w-6 h-6" />
                    Login
                </button>
            )}
        </div>
    </div>
  )
}

export default DatasetHeader

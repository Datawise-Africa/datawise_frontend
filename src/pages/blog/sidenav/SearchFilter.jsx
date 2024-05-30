import {useState} from 'react'

const SearchFilter = ({onSearch}) => {
    const [searchText, setSearchText] = useState("");

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onSearch(value);
    }

    return (
        <div className='p-4 my-5 bg-n-7 rounded-lg flex items-center'>
            <input 
                type="text" 
                className='flex-grow rounded-full p-2' 
                placeholder='Search...'
                value={searchText}
                onChange={handleSearchChange}
            />
            <button className="ml-2">
            <svg 
                className="h-6 w-6 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                // onClick={handleSearchChange}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        </div>
    )
}

export default SearchFilter
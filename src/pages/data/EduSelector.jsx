import {useEffect, useState} from 'react'
import apiService from '../../services/apiService';
import Section from '../../components/HomePage/Section';

const EduSelector = () => {
    const [formData, setFormData] = useState({
        county: '',
        qualification: '',
        programme_category: '',
        programme_category_search: ''  // New state for search input
    });

    const [dropdownOptions, setDropdownOptions] = useState({
        counties: [],
        qualification: [],
        programmeCategories: [],
        filteredProgrammeCategories: [] // State to store filtered programme categories
    });

    const [queryResults, setQueryResults] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [queryLoading, setQueryLoading] = useState(false);
    const [showProgrammeSearch, setShowProgrammeSearch] = useState(false);

    const column_headers = [
        "Institution Name",
        "Programme Name",
        "Programme Cost",
        "Programme Category",
        "Level",
        "County"
    ];

    useEffect(() => {
        const fetchEduData = async () => {
            setDataLoading(true);
            try {
                const data = await apiService.get('/data/edu_query_tool/');
                const counties = data ? [...new Set(data.map(item => item.county))] : [];
                const qualification = data ? [...new Set(data.map(item => item.qualification))] : [];
                const programmeCategories = data ? [...new Set(data.map(item => item.programme_category))] : [];

                setDropdownOptions({
                    counties,
                    qualification,
                    programmeCategories,
                    filteredProgrammeCategories: programmeCategories // Initialize with all categories
                });
            } catch (error) {
                console.log('Error fetching edu query tool:', error);
            } finally {
                setDataLoading(false);
            }
        };

        fetchEduData();
    }, []);

    // Handle changes in search input for programme categories
    const handleProgrammeCategorySearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setFormData({ ...formData, programme_category_search: searchValue });

        // Apply stemming or simple search filter based on the search value
        const filtered = dropdownOptions.programmeCategories.filter(category =>
            category.toLowerCase().includes(searchValue) // Simple contains check
        );

        setDropdownOptions({
            ...dropdownOptions,
            filteredProgrammeCategories: filtered
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDropdownClick = () => {
        setShowProgrammeSearch(!showProgrammeSearch); // Toggle the visibility of the search input
    };

    const handleSubmit = async () => {
        const queryParams = new URLSearchParams(formData).toString();
        setQueryLoading(true);
        try {
            const data = await apiService.get(`/data/edu_query_tool/?${queryParams}`);
            setQueryResults(data);
        } catch (error) {
            console.log('Error performing query:', error);
        } finally {
            setQueryLoading(false);
        }
    };

    return (
        <section className="">
            <div className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/edu_selector-bg1.png')" }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="relative z-10 ml-20 mt-20 mb-5 md:mt-20 flex md:justify-center items-center md:flex-row">
                    <button className='relative mt-15 md:mt-20 lg:mt-10 font-code text-2xl 
                        transition-colors px-4 py-4 
                        rounded-full hover:text-n-14 hover:bg-n-8 
                        bg-n-14 text-n-11'>
                        Edu Selector
                    </button>
                </div>

                <div className='relative z-10 max-w-3xl mx-auto text-center mt-4 mb-10 px-4 md:px-0'>
                    <p className='md:text-lg text-n-1'>
                        Edu Selector is an easy-to-use tool designed to help you find and compare educational programs and institutions in Kenya. Customize your search by county and/or education level to find the right program for you.
                    </p>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    {dataLoading && <div className="text-center py-4">Data loading...</div>}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {[
                            { name: 'county', label: 'County', options: dropdownOptions.counties },
                            { name: 'qualification', label: 'Level', options: dropdownOptions.qualification }
                        ].map(({ name, label, options }) => (
                            <div key={name} className="flex flex-col">
                                <label htmlFor={name} className="bold font-semibold mb-2">{label}</label>
                                <select
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-n-15 rounded-lg text-n-1 focus:ring-n-6 focus:border-n-6"
                                >
                                    <option value="">Select {label}</option>
                                    {options.map(option => (
                                        <option className='bg-n-8 text-n-1 border rounded-lg' key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        ))}

                        {/* Programme Category with Search */}
                        <div className="flex flex-col">
                            <label htmlFor="programme_category_search" className="bold font-semibold">Course Category</label>
                            
                            <select
                                id="programme_category"
                                name="programme_category"
                                value={formData.programme_category}
                                onChange={handleChange}
                                className="block w-full p-3 border border-n-15 rounded-lg text-n-1 focus:ring-indigo-700 focus:border-indigo-700 mt-2"
                            >
                                <option value="">Select Course Category</option>
                                {dropdownOptions.filteredProgrammeCategories.map(option => (
                                    <option className='bg-n-8 text-n-1 border rounded-lg' key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className='relative z-10 mt-10 flex justify-center item-center'>
                    <button
                        onClick={handleSubmit}
                        className='text-n-14 bg-blue-950 font-bold border rounded-full py-4 px-8'>
                        Search
                    </button>
                </div>

                {queryLoading && <div className="relative z-10 text-center py-4">Performing search...</div>}
                {queryResults.length > 0 && (
                    <div className="relative z-10 mt-6 overflow-x-auto" style={{ maxHeight: '60vh' }}>
                        <div className="relative">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="break-words">
                                    <tr className='sticky top-0 z-10 bg-n-14'>
                                        {column_headers.map(column => (
                                            <th key={column} className="px-6 py-3 text-left font-bold text-n-11 uppercase">
                                                {column}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {queryResults.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4">{item.institution_name}</td>
                                            <td className="px-6 py-4">{item.programme_name}</td>
                                            <td className="px-6 py-4">{item.programme_cost.toLocaleString()}</td>
                                            <td className="px-6 py-4">{item.programme_category}</td>
                                            <td className="px-6 py-4">{item.qualification}</td>
                                            <td className="px-6 py-4">{item.county}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EduSelector;



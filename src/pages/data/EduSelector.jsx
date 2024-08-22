import {useEffect, useState} from 'react'
import apiService from '../../services/apiService';
import Section from '../../components/HomePage/Section';

const EduSelector = () => {
    const [formData, setFormData] = useState({
        county:'',
        qualification: '',
        // institutionName: ''
    });

    const [dropdownOptions, setDropdownOptions] = useState({
        counties: [],
        qualification: [],
        // institutionNames: []
    });

    const [queryResults, setQueryResults] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [queryLoading, setQueryLoading] = useState(false);

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
                const data  = await apiService.get('/data/edu_query_tool/');

                const counties = data ? [...new Set(data.map(item => item.county))] : [];
                const qualification = data ? [...new Set(data.map(item => item.qualification))] : [];
                // const institutionNames = data ? [...new Set(data.map(item => item.institution_name))]: [];
                
                setDropdownOptions({
                    counties,
                    qualification,
                    // institutionNames
                });
            } catch (error) {
                console.log('Error fetching edu query tool:', error);
            } finally {
                setDataLoading(false);
            }
        };

        fetchEduData();
    }, []);

    // Filter institutions based on selected county and qualification
    // const filteredInstitutionNames = dropdownOptions.institutionNames.filter(item =>
    //     (!formData.county || item.county === formData.county) &&
    //     (!formData.qualification || item.qualification === formData.qualification)
    // ).map(item => item.name)

    // Handle input changes
    // const handleChange = (e) => {
    //     const {  name, value } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }))
    // }

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Handle form submission
    const handleSubmit = async () => {
        const queryParams = new URLSearchParams(formData).toString();
        setQueryLoading(true);
        try {
            const data = await apiService.get(`/data/edu_query_tool/?${queryParams}`);
            setQueryResults(data);
        } catch (error) {
            console.log('Error performing query:', error)
        } finally {
            setQueryLoading(false);
        }
    }

    return (
        <Section className="">
            <div className="relative h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/edu_selector-bg1.png')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                
                <div className="relative z-10 ml-20 mt-20 mb-5 md:mt-0 flex md:justify-center items-center md:flex-row">
                    <button 
                        className='first-line:relative mt-10 md:mt-20 lg:mt-10 font-code text-2xl 
                        transition-colors px-4 py-4 
                        rounded-full hover:text-n-14 hover:bg-n-8 
                        bg-n-14 text-n-11'
                    >
                        Edu Selector
                    </button>
                </div>
                <div className='relative z-10 max-w-3xl mx-auto text-center mt-4 mb-10 px-4 md:px-0'>
                    <p className='md:text-lg text-n-1'>
                    Edu Selector is an easy-to-use tool designed to help you find and compare educational programs and institutions in Kenya. Customize your search by county and/or education level to find the right progam for you.
                    </p>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    {dataLoading && <div className="text-center py-4">Data loading...</div>}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {[
                            { name: 'county', label: 'County', options: dropdownOptions.counties },
                            { name: 'qualification', label: 'Level', options: dropdownOptions.qualification },
                        ].map(({ name, label, options }) => (
                            <div key={name} className="flex flex-col">
                                <label htmlFor={name} className="bold font-semibold mb-2">{label}</label>
                                <select
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="block w-full p-3 border border-n-3 rounded-lg text-n-1 focus:ring-indigo-700 focus:border-indigo-700"
                                >
                                    <option value="">Select {label}</option>
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className='relative z-10 mt-10 flex justify-center item-center'>
                    <button 
                        onClick={handleSubmit}
                        className='text-n-14 bg-blue-950 font-bold border rounded-full py-4 px-8'
                    >
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
        </Section>
    )
    
}

export default EduSelector



{/* <div className="absolute inset-0 bg-black opacity-70"></div> */}


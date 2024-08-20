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
        qualifications: [],
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
        "Qualification",
        "County"
    ];

    useEffect(() => {
        const fetchEduData = async () => {
            setDataLoading(true);
            try {
                const data  = await apiService.get('/data/edu_query_tool/');

                const counties = data ? [...new Set(data.map(item => item.county))] : [];
                const qualifications = data ? [...new Set(data.map(item => item.qualification))] : [];
                // const institutionNames = data ? [...new Set(data.map(item => item.institution_name))]: [];
                
                setDropdownOptions({
                    counties,
                    qualifications,
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
        <Section className="p-6">
            <div className='max-w-4xl mx-auto'>
                {dataLoading && <div className="text-center py-4">Data loading...</div>}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {[
                            { name: 'county', label: 'County', options: dropdownOptions.counties },
                            { name: 'qualification', label: 'Qualification', options: dropdownOptions.qualifications },
                            // { name: 'institutionName', label: 'Institution Name', options: dropdownOptions.institutionNames},
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
            <div className='mt-10 flex justify-center item-center'>
                <button 
                    onClick={handleSubmit}
                    className='text-n-14 bg-blue-950 font-bold border rounded-full py-4 px-4'
                >
                    Perform Query
                </button>
            </div>
            {queryLoading && <div className="text-center py-4">Performing query...</div>}
            {queryResults.length > 0 && (
                <div className="mt-6 overflow-x-auto" style={{ maxHeight: '60vh' }}>
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
        </Section>
    )
}

export default EduSelector




{/* <div className='flex justify-end'>
                        <button
                            onClick={handleSubmit}
                            className="bg-indigo-700 text-white p-3 rounded-lg hover:bg-indigo-800 transition-colors"
                        >
                            Perform Query
                        </button>
                    </div> */}


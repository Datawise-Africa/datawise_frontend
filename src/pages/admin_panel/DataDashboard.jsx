import {useState, useEffect} from 'react'
import apiService from '../../services/apiService'
import Loader from '../blog/Loader';
import EducationStatistics from './EducationStatistics';
import EducationDataCards from './EducationDataCards';
import SearchFilter from '../blog/sidenav/SearchFilter';
import Pagination from './Pagination';

const DataDashboard = () => {
  const [educationData, setEducationData] = useState([]);
  const [selectedDataType, setSelectedDataType] = useState('EducationData');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDataType === 'EducationData') {
          const response = await apiService.get("/data/education/");
          console.log('fetch_data', response)
          setEducationData(response.data);
          setFilteredData(response.data);
        }
      } catch (error) {
        console.log('Failed to fetch blogs', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedDataType]);

  const handleSearch = (searchText) => {
    const filtered = educationData.filter(item => 
      item.programme_name.toLowerCase().include(searchText.toLowerCase()) ||
      item.institution_name.toLowerCase().include(searchText.toLowerCase()) ||
      item.programme_category.category.toLowerCase().include(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  } 

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <Loader />
  }

  return (  
    <div className='flex flex-col lg:flex-row'>
      <div className="text-w-full lg:w-1/4">
        <div className="flex flex-col justify-around p-4">
          <button
            className={`text-xl ${selectedDataType === 'EducationData' ? 'font-bold' : ''}`}
            onClick={() => setSelectedDataType('EducationData')}
          >
            Education Data
          </button>
          {selectedDataType === 'EducationData' && <EducationStatistics data={educationData} />}
        </div>
      </div>
      <div className="w-full lg:w-3/4">
          <SearchFilter onSearch={handleSearch} />
          {selectedDataType === 'EducationData' && <EducationDataCards data={educationData} />}
          {/* <div className='flex justify-center mt-4'>
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={filteredData.length} paginate={paginate} />
          </div> */}
        </div>
    </div>
  )
}

export default DataDashboard
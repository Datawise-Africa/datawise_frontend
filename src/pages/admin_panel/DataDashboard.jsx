import {useState, useEffect} from 'react'
import apiService from '../../services/apiService'
import Loader from '../blog/Loader';
import EducationStatistics from './EducationStatistics';
import EducationDataCards from './EducationDataCards';
import SearchFilter from '../blog/sidenav/SearchFilter';
import Pagination from './Pagination';

const DataDashboard = () => {
  const [educationData, setEducationData] = useState([]);
  const [statisticEduData, setStatisticEduData] = useState([]);
  const [selectedDataType, setSelectedDataType] = useState('EducationData');
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    const fetchStatsData = async () => {
      try {
        const response = await apiService.get('/data/edu_stats/');
        setStatisticEduData(response);
      } catch (error) {
        console.log('Failed to fetch stats data', error);
      }
    };
    fetchStatsData();
  }, []);

  useEffect(() => {
    const fetchData = async (page = 1) => {
      setIsLoading(true);
      try {
        if (selectedDataType === 'EducationData') {
          const response = await apiService.get(`/data/education/?page=${page}&limit=${itemsPerPage}`);
          console.log(response)
          setEducationData(response.data);
          setFilteredData(response.data); // Ensure filteredData is also set
          setTotalPages(response.meta.totalPages);
        }
      } catch (error) {
        console.log('Failed to fetch data', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData(currentPage);
  }, [selectedDataType, currentPage, itemsPerPage]);

  const handleSearch = (searchText) => {
    const filtered = educationData.filter(item => 
      item.programme_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.institution_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.programme_category.category.toLowerCase().includes(searchText.toLowerCase()) ||
      item.programme_category.credential.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <Loader />;
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
          {selectedDataType === 'EducationData' && <EducationStatistics data={statisticEduData} />}
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <SearchFilter onSearch={handleSearch} />
        {selectedDataType === 'EducationData' && <EducationDataCards data={filteredData} />}
        <div className='flex justify-center mt-4'>
          <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default DataDashboard
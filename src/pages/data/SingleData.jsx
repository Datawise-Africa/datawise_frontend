import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../../services/apiService'
import SinglePageLoader from '../blog/SinglePageLoader';
import MaxWidthWrapper from '../../helpers/max-width-wrapper';
import Section from '../../components/HomePage/Section';

const SingleData = () => {
  const { id } = useParams();
  const [dataset, setDataset] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdataset = async () => {
        try {
            const response = await apiService.get(`/data/lab/${id}/`);
            console.log(response)
            setDataset(response);
        } catch (error) {
            console.log('Failed to fetch blog', error);
        } finally {
            setIsLoading(false);
        }
    };
    fetchdataset();
  }, [id]);

  if (isLoading) {
    return <SinglePageLoader />
  }
  return (
    <Section>
      <div className='mt-20 lg:mt-5 min-h-[50vh]'>
        <MaxWidthWrapper className="py-2 flex flex-col gap-2 px-3 max-w-6xl">
          <div className='flex items-center justify-center'>
              <h1 className='text-3xl font-bold mx-auto'>{dataset?.title}</h1>
          </div>
          <div className='mt-10'>
            <h2 className='text-left text-2xl'>About Dataset</h2>
            <p className='mt-5'>{dataset.description}</p>

            <h3 className='mt-10 text-left text-xl'>Key Features</h3>
          </div>
        </MaxWidthWrapper>
      </div>
    </Section>
  )
}

export default SingleData

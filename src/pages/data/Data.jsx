import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Section from "../../components/HomePage/Section";
import apiService from "../../services/apiService";
import Loader from "../blog/Loader";

const Data = () => {
  const [datasets, setDatasets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        const response = await apiService.get("/data/lab/");
        setDatasets(response);
      } catch (error) {
        console.log('Failed to fetch datasets', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDatasets();
  }, []);

  if (isLoading) {
    return <Loader />
  }
  
  return (
    <Section className="py-10 px-10">
        <div className="container mx-auto pt-20 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {datasets.map(dataset => (
              <NavLink
              to={`/data/${dataset.id}`}
              >
              <div key={dataset.id} className="border p-4 rounded-lg cursor-pointer">
                <h2 className="text-bold text-xl">{dataset.title}</h2>
                <div className="flex flex-col mt-2 text-xs gap-5">
                  <p className="underline">{dataset.created_by}</p>
                  <p>Updated {dataset.last_modified_ago}</p>
                  <p className="right-3">{dataset.size_bytes}</p>
                  <p className="left-3">{dataset.csv_count} File (CSV)</p>
                </div>
              </div>
              </NavLink>
            ))}

          </div>
        </div>
    </Section>
  )
}

export default Data

{/* <div className="mt-20 flex flex-col max-w-[62rem] border border-n-15 shadow-md shadow-neutral-100/60 rounded-xl items-center justify-between">
          <p className="body-1 mx-6 my-6 text-n-14 lg:mb-8 font-normal">
              We collect, host and provide well validated datasets to researchers and industries in critical domains such as languages, agriculture and healthcare in the continent. If you would like to access our data hub or work with us, please send us an email to <span className="text-n-16">info@datawise.africa</span>.
          </p>
        </div> */}
import { useEffect, useState} from "react";

import Section from "../../components/HomePage/Section";
import apiService from "../../services/apiService";
import Loader from "../blog/Loader";
import { REACT_PUBLIC_API_HOST } from "../../constants";

import { Document, Page } from 'react-pdf';
import axios from "axios";

const Resources = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [resources, setResources] = useState([]);
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchResources = async () => {
          try {
            const response = await apiService.get("/data/resources/");
            setResources(response.data);
          } catch (error) {
            console.log('Failed to fetch blogs', error);
          } finally {
            setIsLoading(false);
          }
        };
        fetchResources();
      }, []);
    
      if (isLoading) {
        return <Loader />
      }

    //   console.log('resources: ', resources[0].resources[0].file)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const renderPrewview = (resource) => {
        const fileExtension = resource.file.split('.').pop().toLowerCase();
        console.log(resource.file)

        if (fileExtension == 'pdf') {
            return (
                <div className="h-40 mb-4 flex items-center justify-center">
                    <Document file={resource.file} onLoadSuccess={onDocumentLoadSuccess} className='h-full w-full overflow-hidden'>
                        
                        <Page pageNumber={pageNumber}  />
                    </Document>
                </div>
            )
        }

        return (
            <div className="h-40 mb-4 flex items-center justify-center">
                <img src={resource.file} alt={resource.title} className="object-cover rounded-lg h-full w-full"/>
            </div>
        )
    }

    const returnFullUrl = (resource) => {
        let url = `/data/download_resources/${resource.id}/download/`
        let full_url = `${REACT_PUBLIC_API_HOST}${url}`
        return full_url
    }

    const downloadPdf = async (resource) => {
        try {
            let url = `/data/download_resources/${resource.id}/download/`
            let full_url = `${REACT_PUBLIC_API_HOST}${url}`
            const response = await apiService.get(url, {
                responseType: 'blob',
            }); // Fetch the file from the URL
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    }

    return (
        <Section className="mt-10 items-center justify-center">
            <div className="container mx-auto">
                {resources.length === 0 ? (
                    <div className="text-center">
                        <h1>No resources yet</h1>
                    </div>
                ) : (
                    resources.map((category) => (
                        <div key={category.id} className="mb-10">
                            <h2 className="text-2xl font-bold mb-4 mt-10 md:mt-0">{category.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.resources.slice(0, 8).map((resource) => (
                                    <div key={resource.id} className="border p-2 rounded-lg">
                                        <div className="rounded-lg">
                                            {renderPrewview(resource)}
                                        </div>
    
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-center mb-2">
                                                {resource.title}
                                            </h3>
                                        </div>
                                            <button className="border px-2 w-full text-n-6 rounded bg-white hover:bg-slate-600 hover:text-n-1">
                                                <a  href={returnFullUrl(resource)}>Download</a>
                                            </button>
                                            
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </Section>
    )
}

export default Resources

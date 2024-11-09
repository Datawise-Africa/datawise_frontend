import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {FaUser, FaCheck, FaTimes} from "react-icons/fa";

import Section from "../../components/HomePage/Section";
import DatasetHeader from "./DatasetHeader";
import FilterIcon from "./FilterIcon";
import SortData from "./SortData";
import FilterPanel from "./FilterPanel";
import DatasetGrid from "./DatasetGrid";
import Loader from "../blog/Loader";
import apiService from "../../services/apiService";
import AuthModal from "../../components/Modals/AuthModal";
import useAuthModal from "../../hooks/useAuthModal";
import { getUserId } from "../../lib/auth/actions";
import { getUserNames } from "../../lib/auth/actions";

const DataCatalog = () => {
    const [datasets, setDatasets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [navUrl, setNavUrl] = useState("");
    const [sortIsOpen, setSortIsOpen] = useState(false);

    const authModal = useAuthModal();
    const pathname = useLocation();
    const userId = getUserId();
    const userNames = getUserNames();

    useEffect(() => {
        const fetchDatasets = async () => {
          try {
            const response = await apiService.get("/data/local/");
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

    const handleAuthModalToggle = () => {
        if (!userId) {
            authModal.open();
            setNavUrl(pathname.pathname)
            return;
        }
    }

    const handleSearch = (searchText) => {
        console.log("Searching for:", searchText);
    }

    const toggleDropdown = () => setSortIsOpen(!sortIsOpen)
    const handleSortOptionClick = (option) => {
        setSortIsOpen(false);
    }

    return (
        <Section className="flex items-center justify-center">
            <div className="container w-full mt-15">
                <DatasetHeader userId={userId} userNames={userNames} handleAuthModalToggle={handleAuthModalToggle} handleSearch={handleSearch} />
                <div className="flex items-center justify-between pt-2">
                    <div className="hidden lg:flex">
                        <FilterIcon />
                    </div>
                    <div className="ml-auto">
                        <SortData sortIsOpen={sortIsOpen} toggleDropdown={toggleDropdown} />
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="hidden lg:block">
                        <FilterPanel />
                    </div>
                    <DatasetGrid datasets={datasets} />
                </div>
            </div>
            <AuthModal navUrl={navUrl} />
        </Section>
    )
}

export default DataCatalog

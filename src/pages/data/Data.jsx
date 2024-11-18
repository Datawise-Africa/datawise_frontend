import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Section from "../../components/HomePage/Section";

import AuthModal from "../../components/Modals/AuthModals/AuthModal";
import useAuthModal from "../../hooks/useAuthModal";
import { getUserId } from "../../lib/auth/actions";
import { getUserNames } from "../../lib/auth/actions";

import check from "/assets/check-1.svg";
import datalab from "/assets/Datalab.svg";
import right_arrow from "/assets/white-right-arrow.svg";
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Data = () => {
  const [navUrl, setNavUrl] = useState("");
  const navigate = useNavigate();
  const authModal = useAuthModal();

  const pathname = useLocation();
  const userId = getUserId();
  const userNames = getUserNames();

  const handleBrowseDataClick = () => {
    navigate("/datalab/catalog");
  }

  const handleAuthModalToggle = () => {
    if (!userId) {
        authModal.open();
        setNavUrl(pathname.pathname)
        return; 
    }
  }
 
  return (
    <Section className="flex items-center justify-center">
        <div className="container mx-auto pt-20 lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="md:mt-10"> {/* Should be on the left  */}
            <h1 className="h1 mt-5 text-n-14">
              Power Your Insights with Trusted Data
            </h1>

            <p className="p mt-3">
            Unlock the Power of Data At DataLab, we offer a comprehensive catalog of high-quality datasets that empower you to:
            <span className="">
              <ul className="mt-5 mb-10 md:mb-14">
                  <li className="mb-3 py-3">
                    <div className="flex items-center border-t border-n-8">
                      <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                      <h6 className="body-2 ml-5">Make smarter, data-driven decisions for your projects, research, or business.</h6>
                    </div>
                  </li>
                  <li className="mb-3 py-3">
                    <div className="flex items-center border-t border-n-8">
                      <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                      <h6 className="body-2 ml-5">Access trusted, curated data from leading sources across different industries.</h6>
                    </div>
                  </li>
                  <li className="mb-3 py-3">
                    <div className="flex items-center border-t border-n-8">
                      <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                      <h6 className="body-2 ml-5">Customize your downloads to focus on what's relevant for you</h6>
                    </div>
                  </li>
              </ul>
            </span>
            </p>

            
            <div className="flex justify-between">
              {!userId && (
                <button onClick={handleAuthModalToggle} className="bg-n-20 py-3 px-3 md:px-6 rounded-xl hover:bg-n-15 cursor-pointer">Sign in</button>
              )}
              <div>
              <button onClick={handleBrowseDataClick} className="flex gap-2 border border-n-3 py-3 px-4 md:px-9 rounded-xl hover:bg-n-5 cursor-pointer md:mr-10">
                Browse Datasets
                <img src={right_arrow} alt="right_arrow" width={16} height={16} loading="lazy" />
              </button>
              </div>
            </div>
            <div className="flex mt-2 items-center space-x-2">
              <AiOutlineInfoCircle className="text-xl"/>
              <small className="text-sm">An account is needed to download datasets</small>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center lg:justify-end">
            <img src={datalab} alt="datalab" loading="lazy" />
          </div>
          </div>

          
        </div>
        <AuthModal navUrl={navUrl} />
    </Section>
  )
}

export default Data

{/* <div className="mt-20 flex flex-col max-w-[62rem] border border-n-15 shadow-md shadow-neutral-100/60 rounded-xl items-center justify-between">
          <p className="body-1 mx-6 my-6 text-n-14 lg:mb-8 font-normal">
              We collect, host and provide well validated datasets to researchers and industries in critical domains such as languages, agriculture and healthcare in the continent. If you would like to access our data hub or work with us, please send us an email to <span className="text-n-16">info@datawise.africa</span>.
          </p>
        </div> */}
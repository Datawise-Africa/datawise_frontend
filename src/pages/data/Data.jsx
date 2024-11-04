import Section from "../../components/HomePage/Section";
import check from "/assets/check-1.svg";
import datalab from "/assets/datalab-logo.svg";

import { AiOutlineInfoCircle } from 'react-icons/ai'

const Data = () => {

  return (
    <Section className="flex items-center justify-center">
        <div className="container mx-auto pt-20 lg:pt-10">
          <div className="flex items-center space-x-1">
          <img src={datalab} alt="Datalab Logo" className="w-10 h-8" />
            <h2 className="h2 text-n-14">
              Datalab
            </h2>
          </div>

          <h3 className="h3 mt-5 text-n-14">
            Power Your Insights with Trusted Data
          </h3>

          <p className="p mt-3">
          Unlock the Power of Data At DataLab, we offer a comprehensive catalog of high-quality datasets that empower you to:
          <span className="">
            <ul className="mt-5 mb-10 md:mb-14">
                <li className="mb-3 py-3">
                  <div className="flex items-center border-t border-n-6">
                    <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                    <h6 className="body-2 ml-5">Make smarter, data-driven decisions for your projects, research, or business.</h6>
                  </div>
                </li>
                <li className="mb-3 py-3">
                  <div className="flex items-center border-t border-n-6">
                    <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                    <h6 className="body-2 ml-5">Access trusted, curated data from leading sources across different industries.</h6>
                  </div>
                </li>
                <li className="mb-3 py-3">
                  <div className="flex items-center border-t border-n-6">
                    <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                    <h6 className="body-2 ml-5">Customize your downloads to focus on what's relevant for you</h6>
                  </div>
                </li>
            </ul>
          </span>
          </p>

          <button className="border border-n-3 py-3 px-3 rounded-xl hover:bg-n-5 cursor-pointer">Browse Datasets</button>
          <div className="flex mt-2 items-center space-x-2">
            <AiOutlineInfoCircle className="text-xl"/>
            <small className="text-sm">An account is needed to download datasets</small>
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
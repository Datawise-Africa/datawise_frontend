import { useState } from "react";

import Section from "../../components/HomePage/Section";
import EduSelector from "./EduSelector";

const Data = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('EduSelector');

  const renderSelectedComponent = () => {
    switch (selectedMenuItem) {
      case 'EduSelector':
        return <EduSelector />
      default:
        return null;
    }
  }
  return (
    <Section className="">
        <div className={`h-screen ${selectedMenuItem === 'EduSelector' ? 'bg-cover bg-center' : ''}`}
                style={selectedMenuItem === 'EduSelector' ? {backgroundImage: "url('/assets/edu_selector-bg1.png')"} : {}}
        >
        {selectedMenuItem === 'EduSelector' && (
          <div className="absolute inset-0 bg-black opacity-70"></div>
        )}
          <div className="ml-20 mt-20 mb-5 md:mt-0 flex md:justify-center items-center md:flex-row">
            <button 
            className={`relative mt-10 md:mt-20 lg:mt-10 font-code text-2xl 
              transition-colors px-4 py-4 
              rounded-full hover:text-n-14 hover:bg-n-8 
              ${selectedMenuItem === 'EduSelector' ? 'bg-n-14 text-n-11' : 'text-n-14'}`} 
            onClick={() => setSelectedMenuItem('EduSelector')}
            >
              Edu Selector
            </button>
            {/* <button className={`relative mt-10 md:mt-20 lg:mt-10 font-code text-2xl 
              transition-colors px-4 py-4 md:py-6 
              rounded-full hover:text-n-14 hover:bg-n-8 `}>Health Selector</button> */}
          </div>
        
          {renderSelectedComponent()}
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
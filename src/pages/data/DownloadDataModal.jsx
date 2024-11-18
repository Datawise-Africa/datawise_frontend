import { useState } from 'react';
import Modal from "../../components/Modals/DataModals/Modal";
import useDownloadDataModal from "../../hooks/useDownloadDataModal";
import CustomButton from '../../components/Modals/AuthModals/CustomButton';

import {FaUser, FaCheck, FaTimes} from "react-icons/fa";

import non_profit_icon from "/assets/datalab/non-profit-icon.svg";
import company_icon from "/assets/datalab/company-icon.svg";
import student_icon from "/assets/datalab/student-icon.svg";
import public_icon from "/assets/datalab/public2-icon.svg";

const DownloadDataModal = ({ dataset }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const downloadDataModal = useDownloadDataModal();
  const downloadStep = ["Overview", "Verification", "License", "Payment", "Download"]

  const displayStep = dataset?.is_premium ? downloadStep : downloadStep.filter(step => step !== "Payment");

  const profiteerIcons = {
    non_profit: non_profit_icon,
    company: company_icon,
    students: student_icon,
    public: public_icon,
  }

  const handleNextStep = () => {
    if (currentStep < displayStep.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const contentMap = {
    Overview: {
      title: "Overview",
      details: (
        <>
          <div className='flex justify-between'>
                <h3 className='font-semibold text-xl'>{dataset?.title}</h3>
                <div>
                    <p className='bg-n-14 text-n-8 px-2 rounded-md'>
                        {dataset?.is_premium ? `$${dataset?.price}` : "Free"}
                    </p>
                </div>
          </div>
          {/* <p className='pt-2'>{dataset?.description}</p> */}
          <div className="pt-2 flex flex-wrap gap-2">
            {Object.entries(dataset?.profiteers || {}).map(([profiteer, status], Pindex) => (
            <div
            key={Pindex}
            className="bg-gray-800 rounded-lg px-1 py-1 text-xs text-n-1 flex items-center gap-1">
                <img src={profiteerIcons[profiteer]} alt={`${profiteer} icon`} className="w-3 h-3"/>
                <span>{profiteer.charAt(0).toUpperCase() + profiteer.slice(1)}</span>
                {status ? (
                    <FaCheck className="text-green-500" />
                ) : (
                    <FaTimes className="text-red-500" />
                )}
            </div>
            ))}
          </div>
          <div className='pt-4'>
            <h4 className='font-semibold'>Intended Use</h4>
            <input className='w-full border border-n-3 rounded-md p-2' type="text" />
          </div>

          <div className='pt-6'>
            <h4 className='font-semibold'>Project Description</h4>
            <textarea className='w-full border border-n-3 rounded-md p-2' type="text" />
          </div>
          <div className='pt-2 bg-n-5'>
            <div>
              <p>License Summary</p>
            </div>
            <p></p>
          </div>
        </>
      )
    },
    Verification: {
      title: "Verification",
      details: (
        <div>
          <p>Please verify your <details></details></p>
        </div>
      )
    },
    License: {
      title: "License",
      details: (
        <div>
          <p>Please choose your license</p>
        </div>
      )
    },
    Payment: {
      title: "Payment",
      details: (
        <div>
          <p>Please make your payment</p>
        </div>
      )
    },
    Download: {
      title: "Download",
      details: (
        <div>
          <p>Please download your data</p>
        </div>
      )
    }
  }

  const renderStepContent = () => {
    const step = displayStep[currentStep - 1]
    const stepContent = contentMap[step]

    return (
      <>
        <div>
          {/* <h2 className='text-2xl font-semibold'>{stepContent.title}</h2> */}
          {stepContent.details}
        </div>
      </>
    )
  }

  const renderProgress = () => (
    <div className='flex items-center justify-between pl-5 pr-5'>
      {displayStep.map((step, index) => (
        <div key={index} className='flex items-center'>
          <div 
            className={`flex flex-col items-center ${index + 1 === currentStep ? 'text-n-14' : 'text-n-14'}`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index + 1 === currentStep ? 'bg-n-15 text-n-14 border-n-15' : 'bg-n-6 text-n-14 border-n-8'
              }`}
            >
              {index + 1}
            </div>
            <span className='mt-2 text-xs font-medium'>{step}</span>
          </div>
          {index < displayStep.length - 1 && (
            <div className='flex-1 h-px bg-slate-400 mx-2'></div>
          )}
        </div>
      ))}
    </div>
  );

  const content = (
    <>
      <div>
        {/* Step Indicator */}
        <div>{renderProgress()}</div>

        <div className='pt-6'>
          {/* Step Content */}
         <div className='border border-n-4 shadow-sm p-2 rounded-md'>{renderStepContent()}</div>

          {/* Step Navigation */}
          <div className='flex justify-between mt-4 gap-4'>
            {currentStep > 1 && (
              <CustomButton label="Previous" onClick={handlePreviousStep} className='bg-n-16'/>
            )}
            {currentStep < displayStep.length && (
              <CustomButton label="Next" onClick={handleNextStep} />
            )}
          </div>
        </div>
      </div>
    </>
  )
  return (
    <Modal 
      isOpen={downloadDataModal.isOpen}
      close={downloadDataModal.close}
      content={content}
    />
  )
}

export default DownloadDataModal

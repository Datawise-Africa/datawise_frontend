import React from 'react'
import {FaUser, FaCheck, FaTimes} from "react-icons/fa";

import Modal from "../../components/Modals/DataModals/Modal";
import useDataModal from '../../hooks/useDataModal';
import useDownloadDataModal from '../../hooks/useDownloadDataModal';

import non_profit_icon from "/assets/datalab/non-profit-icon.svg";
import company_icon from "/assets/datalab/company-icon.svg";
import student_icon from "/assets/datalab/student-icon.svg";
import public_icon from "/assets/datalab/public2-icon.svg";
import spinning_timer_icon from "/assets/datalab/spinning-timer.svg";
import database_icon from "/assets/datalab/db-icon.svg";
import download_icon from "/assets/datalab/download-icon.svg";
import file_icon from "/assets/datalab/file-text.svg";
import list_circle_icon from "/assets/datalab/list-circle.svg";
import download_arrow_icon from "/assets/datalab/download-arrow-icon.svg";

const SingleDataModal = ({dataset, handleDownloadDataClick}) => {
  const dataModal = useDataModal();

  const csvData = dataset.csv_data
  const columnHeaders = csvData.length ? Object.keys(csvData[0]) : [];
  const previewData = csvData.slice(0, 20)

  const profiteerIcons = {
    non_profit: non_profit_icon,
    company: company_icon,
    students: student_icon,
    public: public_icon,
  }

  console.log(dataset.keywords[0])

  const content = (
    <>
      <div className='border border-n-3 p-6 rounded-xl shadow-md'>
        <div className='flex justify-between'>
          <h3 className='font-bold text-xl'>{dataset.title}</h3>
          <div>
              <p className='bg-n-14 text-n-8 px-2 rounded-md'>
                  {dataset.is_premium ? `$${dataset.price}` : "Free"}
              </p>
          </div>
        </div>
        <div className='flex flex-wrap items-center space-x-2'>
            <FaUser className='text-n-4 w-2 h-4' />
            {dataset.dataset_author.map((author, authorIndex) => (
            <small key={authorIndex} className='text-n-4 text-xs'>
                {author?.first_name} {author?.last_name}
            </small>
            ))}
        </div>
        <p className='pt-2'>{dataset.description}</p>
        <div className='pt-2 flex flex-wrap gap-2'>
            {dataset.tags.map((tag, tagIndex) => (
            <div key={tagIndex} className='bg-gray-800 text-n-14 rounded-lg px-3 py-1 text-xs'>
                {tag}
            </div>
            ))}
        </div>
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
        <div className="pt-5 flex flex-wrap space-x-3">
            <div className="flex">
                <img src={spinning_timer_icon} alt="timer" className="w-4 h-4"/>
                <span className="ml-1 text-n-14 text-xs">
                    Updated: {dataset.updated_at}
                </span>
            </div>
            <div className="flex">
                <img src={database_icon} alt="database" className="w-4 h-4"/>
                <span className="ml-1 text-n-14 text-xs">
                    CSV ({dataset.size_bytes})
                </span>
            </div>
            <div className="flex">
                <img src={download_icon} alt="download" className="w-4 h-4"/>
                <span className="ml-1 text-n-14 text-xs">
                    {dataset.download_count} downloads
                </span>
            </div>
        </div>
        <hr className="mt-8 border-t border-n-3 -mx-6"/>
        <div className='pt-4'>
          <h4 className='font-semibold text-xl text-n-14'>File Information</h4>
          <div className='pt-2 flex'>
            <img src={file_icon} alt="database" className="w-4 h-4"/>
            <span className="ml-1 text-n-14 text-xs">
                CSV ({dataset.size_bytes})
            </span>
          </div>
        </div>
        <div className='pt-4'>
          <h4 className='font-semibold text-xl text-n-14'>Dataset Overview</h4>
          <div className='pt-2 flex justify-between'>
            <div>
              <p className='text-sm font-semibold'>Covered Regions</p>
              <ul>
                <small>
                  <span>
                    {dataset.covered_regions.map((region, regionIndex) => (
                      <li key={regionIndex} className='flex gap-1'>
                        <img src={list_circle_icon} alt="" className='w-3 h-4 pt-2' />
                        {region.region}
                      </li>
                    ))}
                  </span>
                </small>
              </ul>
            </div>
            <div className='mr-5'>
              <p className='text-sm font-semibold'>Key Words</p>
              <ul>
                <small>
                  <span>
                  {dataset.keywords.map((keyword, keywordIndex) => (
                      <li key={keywordIndex} className='flex gap-1'>
                        <img src={list_circle_icon} alt="" className='w-3 h-4 pt-2' />
                        {keyword.keyword}
                      </li>
                    ))}
                  </span>
                </small>
              </ul>
            </div>
          </div>
        </div>
        <div className='pt-4'>
          <h4 className='font-semibold text-xl text-n-14'>Dataset Preview</h4>
          {csvData.length > 0 ? (
            <div className='overflow-auto max-h-40'>
              <table className='min-w-full border-collapse border border-n-2'>
                <thead className=''>
                  <tr>
                    {columnHeaders.map((header, index) => (
                      <th key={index} className='text-left border-b border-n-2 text-n-14 px-4 py-1'>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {previewData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columnHeaders.map((header) => (
                        <td key={header} className='border px-4 py-2'>
                          {row[header]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className='text-n-14 text-center'>No data available for this dataset.</p>
          )}
        </div>
        <hr className="mt-8 border-t border-n-3 -mx-6"/>
        <div className="mt-4 flex justify-between">
          {/* <button onClick={() => handleDownloadDataClick(dataset)} className="border py-2 px-3 rounded-xl bg-n-14 hover:bg-n-2 text-n-8 flex space-x-1">
              <img src={download_arrow_icon} alt="" className="w-6 h-6"/>
              Download
          </button> */}
        </div>
      </div>
    </>
  )

  return (
    <Modal 
        isOpen={dataModal.isOpen}
        close={dataModal.close}
        content={content}
    />
  )
}

export default SingleDataModal

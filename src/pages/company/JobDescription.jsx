import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { PositionContext } from "../../storage/PositionProvider";
import Section from "../../components/HomePage/Section";
import list_circle_icon from "/assets/datalab/list-circle.svg";

const JobDescription = () => {
  const {
    state: { selectedPosition: position },
  } = useContext(PositionContext);

  return (
    <Section className="mt-10">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col mt-10 mb-10 items-center justify-center max-w-screen-lg">
        <h3 className="h3 mb-4 md:mb-8">Role: {position?.title}</h3>
        {/* Who we are */}
        <div className="text-center mb-8">
          <h5 className="h5 mb-4">Who we are:</h5>
          <p className="text-n-14 leading-relaxed">
            At Datawise Africa, we are on a mission to bridge the data gap in Africa. We create and provide high-quality, labeled datasets which can be used to draw valuable insights. Since our foundation in 2023, we have focused on providing businesses, researchers, and institutions across the African region with the correct data and AI solutions that unlock innovation and growth.
          </p>
        </div>
        
        {/* About the program */}
        <div className="text-center mb-8">
          <h5 className="h5 mt-4 mb-4">About the role</h5>
          <p className="text-n-14leading-relaxed">{position?.overview}</p>
        </div>
        
        {/* Responsibilities */}
        <div className="w-full mb-8">
          <h5 className="text-center h5 mt-4 mb-4">Responsibilities</h5>
          <ul className="list-disc list-inside">
            {position?.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src={list_circle_icon} alt="list-circle" className="w-4 h-4 mt-1" />
                <p className="text-n-14">{responsibility}</p>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Skills */}
        <div className="w-full mb-8">
          <h5 className="text-center h5 mt-4 mb-4">Skills</h5>
          <ul className="list-disc list-inside">
            {position?.skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src={list_circle_icon} alt="list-circle" className="w-4 h-4 mt-1" />
                <p className="text-n-14">{skill}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* What you will get */}
        <div className="w-full mb-8">
          <h5 className="h5 mt-4 mb-4">What you will get</h5>
          <ul className="list-disc list-inside">
            {position?.what_you_get.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src={list_circle_icon} alt="list-circle" className="w-4 h-4 mt-1" />
                <p className="text-n-14">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply button */}
        <div className="w-full mt-6 flex justify-center">
          <button 
            onClick={() => window.open("https://airtable.com/appyJCBfT7JCdYREt/pag9kw9lRkNZwv8G8/form")} 
            className="w-full border py-3 px-12 rounded-full bg-n-14 hover:bg-n-2 text-n-8 transition duration-300"
          >
            Apply for Position
          </button>
        </div>
      </div>
    </Section>
  );
};

export default JobDescription;


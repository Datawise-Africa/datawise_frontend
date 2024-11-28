import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import  { PositionContext } from '../../storage/PositionProvider';
import Section from "../../components/HomePage/Section";
import career_hero from "/assets/career/career_hero.svg";
import rectangle_pointer from "/assets/career/rectangle.svg";

import { available_positions } from "../../constants";
const JoinUs = () => {
    const navigate = useNavigate();
    const openPositionRef = useRef(null);
    const { state, dispatch } = useContext(PositionContext);

    const scrollToOpenPositions = () => {
        openPositionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const handleViewDetails = (position) => {
        dispatch({ type: 'SET_POSITION', payload: position })
        navigate('/job-description');
    }
    
  return (
    <Section className="mt-15 md:mt-1">
        <section className="items-center justify-center flex flex-col py-5 mb-10 bg-gray-600 w-full">
            <div className="">
                <div className="text-center max-w-[30rem]">
                    <h2 className="h3 mb-4 md:mb-8">
                        Shape Africa's Future Through Data
                    </h2>
                    <p>
                        Join a passionate team leveraging data to drive impactful decisions in health, education, and governance
                    </p>
                    <button
                        onClick={scrollToOpenPositions} 
                        className="bg-n-15 text-n-14 rounded-full px-2 py-2 mt-2"
                    >
                        View Available Positions
                    </button>
                </div>
                <img src={career_hero} alt=""  className="w-full max-w-md pt-4"/>

            </div>
        </section>
        <section className="px-8 md:px-20">
            <div className="flex flex-col items-center justify-center py-5 mb-10">
                <h4 className="h4 mb-4 md:mb-8">
                    Why work with us?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <img src={rectangle_pointer} alt="" className="w-10 h-10 mb-2 mx-auto"/>
                        <p className="font-bold xl">
                            Impactful Work
                        </p>
                        <p>
                            Contribute to projects that tackle real-world challenges
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={rectangle_pointer} alt="" className="w-10 h-10 mb-2 mx-auto"/>
                        <p className="font-bold xl">
                            Innovative Culture
                        </p>
                        <p>
                            Collaborate with experts in data science, technology, and policy
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={rectangle_pointer} alt="" className="w-10 h-10 mb-2 mx-auto"/>
                        <p className="font-bold xl">
                            Career Development
                        </p>
                        <p>
                            Expand your skills through learning and mentorship
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={rectangle_pointer} alt="" className="w-10 h-10 mb-2 mx-auto"/>
                        <p className="font-bold xl">
                            Diversity & Inclusion
                        </p>
                        <p>
                            Thrive in a workplace where every voice matters
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section ref={openPositionRef} className="px-8 md:px-20 items-center justify-center flex flex-col py-5 mb-10 bg-gray-600 w-full">
            <div>
                <h4 className="h4 mb-4 md:mb-8">Open Positions</h4>
            </div>
            <div className='md:col-span-3 lg:col-span-3 lg:mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {available_positions.map((position, index) => (
                        <div key={index} className='border border-n-8 bg-n-8 p-6 rounded-xl shadow-md'>
                            <div className="space-y-2 md:flex justify-between ">
                                <h3 className='font-semibold text-xl'>{position.title}</h3>
                                <button 
                                    className="hover:cursor-pointer hover:bg-n-9 hover:border-n-9 hover:rounded-lg hover:px-2 hover:py-2"
                                    onClick={() => handleViewDetails(position)}
                                >
                                    View Details
                                </button>
                            </div>
                            <p className="pt-5"> 
                                {position.overview}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="px-8 md:px-20 items-center justify-center flex flex-col py-5 mb-10">
            <div className="max-w-[40rem]">
                <h4 className="text-center h4 mb-4 md:mb-5">
                    Steps to Join Us
                </h4>
                <ul className="space-y-6">
                    {['Apply Online', 'Interviews', 'Onboarding'].map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-n-14 text-n-8 rounded-full flex items-center justify-center text-lg font-semibold">
                                {index + 1}
                            </div>
                            <div>
                                <p className="font-bold">{step}</p>
                                <p className="font-thin">
                                    {index === 0 && "Submit your resume and cover letter for the desired role."}
                                    {index === 1 && "Showcase your expertise through discussions with our team."}
                                    {index === 2 && "Start your journey with a comprehensive onboarding program."}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </Section>
  )
}

export default JoinUs

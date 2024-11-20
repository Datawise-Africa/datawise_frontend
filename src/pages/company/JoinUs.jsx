import Section from "../../components/HomePage/Section";
import list_circle_icon from "/assets/datalab/list-circle.svg";

const JoinUs = () => {
    const developer_skills = ["Proficiency in HTML, CSS, JS and React.", 
        "Knowledgeable with building tools and ecosystem e.g., npm, pnpm etc.",
        "Ability to style and design (use of tailwind or related css frameworks)",
        "Debugging and testing (Use of browser developer tools, testing frameworks and error handling)",
        "API integration (Understands how to consume APIs)",
        "Performance optimization (familiarity with code optimization, and profiling tools)",
        "Occupies soft skills (e.g., problem solving, team collaboration and adaptability)."
    ]

    const communication_skills = ["Excellent written and verbal communication skills, with the ability to present complex information in a clear and concise manner.", 
        "Social Media Management: Creating and managing content across our platforms.",
        "Problem solving: Addressing communication challenges with creative solutions.",
        "Presentation skills: Proficiency in tools such as Microsoft PowerPoint and Google slides",
        "Strong analytical and research skills with a keen eye for detail.",
        "Constant collaboration with team members.",
        "Interpersonal skills."
    ]

    const what_you_get = [
        "Working in a fast paced environment.",
        "Collaborating with like minded individuals.",
        "Opportunity to build and refine your skills.",
        "Access to resources and tools for learning.",
        "Monthly stipend plus career progression."
    ]

  return (
    <Section className="mt-10 items-center justify-center">
        <div className="container flex flex-col mt-10 mb-10">
            <div className="max-w-[80rem]">
                <h2 className="h3 mb-4 md:mb-8">
                    Role: Internship (Open Application)
                </h2>
            </div>
            <div className="max-w-[80rem]">
                <h5 className="h5 mb-2 md:mb-4">
                    Who we are:
                </h5>
            </div>
            <div className="max-w-[80rem]">
                <p>
                At Datawise Africa, we are on a mission to bridge the data gap in Africa. We create and provide high-quality, labeled datasets which then can be used to draw valuable insights. Since our foundation in 2023, we have focused on providing businesses, researchers, and institutions across the African region with the correct data and AI solutions that unlock innovation and growth.
                </p>
            </div>
            <div className="max-w-[80rem]">
                <h5 className="h5 mt-4 mb-2 md:mb-4">
                    About the internship program
                </h5>
                <p>
                This program is tailored to provide recent graduates and young professionals a platform to showcase their skills and to gain mentorship from like minded professionals. The intern will be engaged for a period of 4 months. 
                </p>
            </div>
            <div className="max-w-[80rem]">
                <h5 className="h5 mt-4 mb-2 md:mb-4">
                    Applicants can work in either of the following areas:
                </h5>
                <p className="font-bold">Frontend Development</p>
                <p className="pt-2 pb-2">Skills:</p>
                <ul>
                    {developer_skills.map((skill, index) => (
                        <li key={index} className="flex gap-1">
                            <img src={list_circle_icon} alt="list-circle" className="w-3 h-4 pt-2" />
                            <p>{skill}</p>
                        </li>
                    ))}
                </ul>

                <p className="pt-4 font-bold">Communications</p>
                <p className="pt-2 pb-2">Skills:</p>
                <ul>
                    {communication_skills.map((skill, index) => (
                        <li key={index} className="flex gap-1">
                            <img src={list_circle_icon} alt="list-circle" className="w-3 h-4 pt-2" />
                            <p>{skill}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-[80rem]">
                <h5 className="h5 mt-4 mb-2 md:mb-4">
                    What you will get
                </h5>
                <ul>
                    {what_you_get.map((skill, index) => (
                        <li key={index} className="flex gap-1">
                            <img src={list_circle_icon} alt="list-circle" className="w-3 h-4 pt-2" />
                            <p>{skill}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-6 flex justify-between">
                <button onClick={() => window.open("https://airtable.com/appyJCBfT7JCdYREt/pag9kw9lRkNZwv8G8/form")} 
                className="w-full border py-3 px-12 rounded-full bg-n-14 hover:bg-n-2 text-n-8 items-center justify-center flex space-x-1">
                    Apply for Position
                </button>
            </div>
        </div>
    </Section>
  )
}

export default JoinUs

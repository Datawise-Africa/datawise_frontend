import Section from "../../components/HomePage/Section";
import Heading from "../../components/HomePage/Heading";
import { teamMembers } from "../../constants";
import { SocialIcon } from "react-social-icons";

const TeamMembers = () => {
  return (
    <Section crosses>
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Team Members"/>

        <div className="flex flex-wrap gap-10 mb-10">
          {teamMembers.map((item) => (
            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] hover:cursor-pointer'
              key={item.id}
            >
              <div className="relative">
                <div className="flex items-center mt-auto">
                    <img src={item.image} alt={item.name} width={300} height={150} className="rounded-xl m-auto" loading="lazy"/>

                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start bg-black bg-opacity-70 text-white text-sm font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <p className="z-10">{item.description}</p>
                    </div> */}
                </div>
              </div>
              <div className="info mt-5">
                <div className="flex justify-center">
                  <ul className="flex gap-4 z-20">
                    <li className="bg-conic-gradient rounded-full"><SocialIcon url={item.linkedin_url} bgColor="#0E0C15" /></li>
                    {/* <li className="bg-conic-gradient rounded-full"><SocialIcon url={item.twitter_url} bgColor="#0E0C15" /></li> */}
                  </ul>
                </div>
                <div className="flex flex-col items-center">
                  <h5 className='h5 mb-5 mt-5'>{item.name}</h5>
                  <p>{item.title}</p>
                </div>
              </div>
             </div>
          ))}
        </div> 
      </div>
    </Section>
  )
}

export default TeamMembers
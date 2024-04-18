import Section from './Section';
import Heading from './Heading';
import datawise_about from "/assets/datawise_about2.png";

const AboutUs = () => {
  return (
    <Section className="lg:mt-5" id="aboutus">
        <div className="z-2 container lg:mt-5">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col items-start justify-center">
              <div className='mb-6 lg:mb-10'>
                <h2 className='h2'>About us</h2>
              </div>

              <p className="body-1 max-w-3xl mx-auto mb-4 text-n-2 lg:mb-8">
                We are a research and development company conducting applied research in Data and AI while building the critical infrastructure and tools to connect the two. Our goal is to leverage Data to develop AI and other tools that are relevant and appropriate for the communities we live in while building research capacity and leadership in the continent. 
              </p>
            </div>
            <div className="mt-10 relative z-1 p-1">
                <div className="mt-8 relative rounded-[1rem]">
                    <img src={datawise_about} loading="lazy" alt="hero" className="rounded-[1rem]" width={400} height={300}/>
                </div>
            </div>
          </div>
        </div>
    </Section>
  )
}

export default AboutUs
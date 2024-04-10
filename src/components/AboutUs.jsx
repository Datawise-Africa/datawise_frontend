import Section from './Section';
import Heading from './Heading';
import { aboutUs } from '../constants';
import { GradientLight } from "./designs/AboutUs";
import ClipPath from "../assets/svg/ClipPath";

import Arrow from "../assets/svg/Arrow";

const AboutUs = () => {
  return (
    <Section id="aboutus">
        <div className="container relative z-2">
            <Heading className="md:max-w-md lg:max-w-2xl" title="About us"/>

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Datawise Africa is a research and development company that conducts applied research and development in Artificial Intelligence, Data Science, and the essential infrastructure that connects these fields. Our mission is simple yet ambitious: to create a data wise Africa through innovation and develop practical solutions for today’s challenges using Data and AI. Through our dedicated applied research, we aim to contribute meaningfully to the advancement of AI and Data Science. Our goal is to improve data processes, system integration, and unleash the full potential of AI and Data Science.
            </p>

            <Heading className="md:max-w-md lg:max-w-2xl items-center lg:mb-20" title="Our Services"/>

            <div className="flex flex-wrap gap-10 mb-10">
              {aboutUs.map((item) => (
                <div
                  className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]' 
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`
                  }}
                  key={item.id}>
                  <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                    <h5 className='h5 mb-5'>{item.title}</h5>
                    <p className='body-2 mb-6 text-n-3'>{item.description}</p>
                    <div className="flex items-center mt-auto">
                      {/* <img src={item.imageUrl} width={60} height={60} alt={item.title} /> */}

                      <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore more</p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#about-us)"}}>
                    <div className='absolute inset-0 opacity-0 translate-opacity hover:opacity-10'>
                      {item.imageUrl && (
                        <img 
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt="item.title"
                          className='w-full h-full object-cover'
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </div>
              ))}
            </div>

        </div>
    </Section>
  )
}

export default AboutUs
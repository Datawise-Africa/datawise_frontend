import Section from './Section';
import Heading from './Heading';
import datawise_hero from "/assets/illustration/5.png";
import datawise_about from "/assets/datawise_about2.png";
import { Gradient } from "./designs/Hero";
import { aboutUs } from '../constants';
import { GradientLight } from "./designs/AboutUs";
import ClipPath from "../../public/assets/svg/ClipPath";

import Arrow from "../../public/assets/svg/Arrow";

const AboutUs = () => {
  return (
    <Section id="aboutus">
        <div className="container lg:flex">
          <div className="max-w-[30rem]">
            <Heading className="md:max-w-md lg:max-w-2xl" title="About us"/>

            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Datawise Africa is a research and development company that conducts applied research and development in Artificial Intelligence, Data Science, and the essential infrastructure that connects these fields. Our mission is simple yet ambitious: to create a data wise Africa through innovation and develop practical solutions for today’s challenges using Data and AI. Through our dedicated applied research, we aim to contribute meaningfully to the advancement of AI and Data Science. Our goal is to improve data processes, system integration, and unleash the full potential of AI and Data Science.
            </p>
          </div>

          <div className=" relative lg:ml-auto xl:max-w-[30rem] md:max-w-5xl xl:mb-24">
            <div className="mt-10 relative z-1 p-1">
                <div className="mt-8 relative rounded-[1rem]">
                    <img src={datawise_about} loading="lazy" alt="hero" className="w-full border border-n-5 rounded-[1rem]" width={600} height={1800}/>
                </div>
            </div>
                    
          </div>
        </div>
    </Section>
  )
}

export default AboutUs
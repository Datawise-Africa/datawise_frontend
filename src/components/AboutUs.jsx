import Section from './Section';
import Heading from './Heading';
import datawise_hero from "/assets/illustration/5.png";
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

          <div className="mt-20 relative lg:ml-auto xl:max-w-[40rem]">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="aspect=[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/460] lg:aspect-[1024/]">
                <img src={datawise_hero} loading="lazy" alt="hero" className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" width={1024} height={1800}/>
              </div>
          </div>
          </div>
        </div>
    </Section>
  )
}

export default AboutUs
import { useRef } from "react";

import Button from "./Button";
import Section from "./Section";
import datawise_hero from "/assets/illustration/5.png";
import curve from "/assets/hero/curve.png";
import heroBackground from "/assets/hero/hero-background.jpg";
import myBackground from "/assets/datawise_about2.png";
import { BackgroundCircles, BottomLine, Gradient } from "./designs/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">
            <div className="container relative lg:mt-10" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] lg:max-w-[70rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] mt-10">
                    <h1 className="h1 mb-6">
                        <span className="inline-block relative">
                            Datawise Africa{" "}
                            <img src={curve} alt="" />
                        </span>
                    </h1>

                    <h1 className="h3 max-w-7xl mx-auto mb-6 text-n-2 lg:mb-8 font-normal">
                        We conduct applied research in Data and AI while building the critical infrastructure and tools to connect the two for a data wise continent.
                    </h1>

                </div>
            </div>
        </Section>
    )
}

export default Hero
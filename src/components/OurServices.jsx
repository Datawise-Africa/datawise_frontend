import Section from "./Section";
import check from "/assets/check.svg";
import Button from "./Button";
import datawise_image from "/assets/datawise-image.jpeg";

import { coreServices, ourServices } from "../constants";
import { LeftCurve, RightCurve } from "./designs/OurServices";

const OurServices = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[45rem]">
          <h2 className="h2 mb-4 md:mb-8">We conduct research in several thematic areas and emerging technologies</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {coreServices.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center border-t border-n-6">
                  <img src={check} width={24} height={24} alt="check" loading="lazy"/>
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {/* <p className="body-2 mt-3 text-n-4">{item.description}</p> */}
              </li>
            ))}
          </ul>

          {/* <Button href="/contact">Try it now</Button> */}
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:w-[22rem] lg:mx-auto"></p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img src={datawise_image} loading="lazy" alt="Datawise" width={48} height={48} />
                  </div>
                </div>
              </div>

              <ul>
                {ourServices.slice(0,8).map((item, index) => (
                  <li 
                    key={item.id} 
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                    style={{ transition: "transform 0.3s ease-in-out"}}>
                    <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        width={88} height={62} 
                        className="m-auto hover:blur:sm transition-all duration-300"
                        loading="lazy"
                      />

                      <div 
                        className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-sm font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                      >
                        {item.title}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* <LeftCurve /> */}
              <RightCurve />
            </div>
        </div>
      </div>
    </Section>
  )
}

export default OurServices
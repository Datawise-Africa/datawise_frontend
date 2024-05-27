import Section from "../../components/HomePage/Section"
import ServiceDetail from "../../components/HomePage/ServiceDetail"

const WhatWeDo = () => {
  return (
    <Section className="mt-10 items-center justify-center">
        <div className="container flex flex-col mt-10 mb-10">
            <div className="max-w-[80rem]">
                <h2 className="h2 mb-4 md:mb-8">We conduct research in several thematic areas and emerging technologies</h2>
            </div>
        </div>
        <ServiceDetail />
    </Section>
  )
}

export default WhatWeDo
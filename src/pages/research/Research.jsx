import Section from "../../components/HomePage/Section";
import PortfolioSection from "../../components/HomePage/PortfolioSection";

const Research = () => {
  return (
    <Section className="mt-10 items-center justify-center">
      
      <div className="container lg:flex mt-10 mb-10">
            <div className="max-w-[80rem]">
                <h2 className="h2 mb-4 md:mb-8">Current research projects</h2>
            </div>
        </div>
        <PortfolioSection />

    </Section>
  )
}

export default Research


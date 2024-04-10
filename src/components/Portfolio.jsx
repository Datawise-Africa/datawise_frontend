import Section from "./Section"
import { portfolioText } from "../constants"
import Button from "./Button"
import PortfolioSection from "./PortfolioSection"

const Portfolio = () => {
  return (
    <Section id="portfolio" crosses>
        <div className="container lg:flex">
            <div className="max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">Explore our showcase of exceptional projects</h2>
            </div>
            <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">{portfolioText}</p>
            </div>
        </div>
        <PortfolioSection />
    </Section>
  )
}

export default Portfolio

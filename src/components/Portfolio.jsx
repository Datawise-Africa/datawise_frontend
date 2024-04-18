import Section from "./Section"
import { projectText } from "../constants"
import PortfolioSection from "./PortfolioSection"

const Portfolio = () => {
  return (
    <Section id="portfolio" crosses>
        <div className="container lg:flex">
            <div className="max-w-[80rem] items-center justify-center">
                <h2 className="h2 mb-4 md:mb-8">Current research projects</h2>
            </div>
        </div>
        <PortfolioSection />
    </Section>
  )
}

export default Portfolio

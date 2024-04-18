import Section from "./Section"
import { projectText } from "../constants"
import PortfolioSection from "./PortfolioSection"

const Portfolio = () => {
  return (
    <Section id="portfolio" crosses>
        <div className="container lg:flex">
            <div className="max-w-[80rem]">
                <h2 className="h2 mb-4 md:mb-8">Explore our showcase of exceptional projects</h2>
            </div>
        </div>
        <PortfolioSection />
    </Section>
  )
}

export default Portfolio

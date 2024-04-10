import Section from "./Section"
import { ourPartners } from "../constants"

const OurPartners = () => {
  return (
    <Section crosses>
        <div className="hidden relative z-1 mt-1 lg:block">
            <h5 className="tagline mb-6 text-center text-n-1/50">
                Our Partners
            </h5>
            <ul className="flex">
                {ourPartners.slice(4,).map((logo) => (
                    <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={logo.id}>
                        <img src={logo.logo} alt="logo"  width={250} height={28}/>
                    </li>

                ))}
            </ul>
        </div>

    </Section>
  )
}

export default OurPartners
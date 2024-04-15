import ButtonGradient from '../../../public/assets/svg/ButtonGradient';
import AboutUs from '../../components/AboutUs';
import Contact from '../../components/Contact';
import Hero from '../../components/Hero';
import OurPartners from '../../components/OurPartners';
import OurServices from '../../components/OurServices';
import Portfolio from '../../components/Portfolio';

const Home = () => {
  return (
    <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Hero />
            <AboutUs />
            <OurServices />
            <OurPartners />
            <Portfolio />
            <Contact />
        </div>
        <ButtonGradient />
    </>
  )
}

export default Home
import ButtonGradient from '../../../public/assets/svg/ButtonGradient';
import AboutUs from '../../components//HomePage/AboutUs';
import Contact from '../../components/HomePage/Contact';
import Hero from '../../components/HomePage/Hero';
import OurPartners from '../../components/HomePage/OurPartners';
import OurServices from '../../components/HomePage/OurServices';
import Portfolio from '../../components/HomePage/Portfolio';

const Home = () => {
  return (
    <>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Hero />
            <AboutUs />
            <OurServices />
            <Portfolio />
            <OurPartners />
            <Contact />
        </div>
        <ButtonGradient />
    </>
  )
}

export default Home
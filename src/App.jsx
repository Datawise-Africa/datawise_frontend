import ButtonGradient from '../public/assets/svg/ButtonGradient';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import OurPartners from './components/OurPartners';
import OurServices from './components/OurServices';
import Portfolio from './components/Portfolio';
import TeamMembers from './components/TeamMembers';

const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <OurPartners />
        <Portfolio />
        <TeamMembers />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App

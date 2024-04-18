import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import datawise from "/assets/datawise-image.jpeg";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../../public/assets/svg/MenuSvg";
import { HamburgerMenu } from "./designs/Header";
import Section from "./Section";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const toolsRef = useRef(null);
  const companyRef = useRef(null);
  const navigate = useNavigate();

  const pathname = useLocation();

  const toggleToolsDropdown = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsCompanyOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsToolsOpen(false);
  };

  const handleDropdownClick = () => {
    setIsCompanyOpen(false);
    setIsToolsOpen(false);
  }

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleDropdownNavigationClick = () => {
    if(openNavigation) {
      toggleNavigation()
    }
  }

  const handleNavItemClick = (e, item) => {
    e.preventDefault();
    if (item.hasDropdown) {
      if (item.title === 'Tools') {
        toggleToolsDropdown();
      } else if (item.title === 'Company') {
        toggleCompanyDropdown();
      }
      
    } else {
      navigate(item.url)
      if(openNavigation) {
        toggleNavigation();
      }
    }
  }

  return (
    <Section id="header" className="!px-0 !py-0">
      <div className={`fixed top-0 left-0 lg:left-20 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-15 xl:px-20 max-lg:py-4">
          <a href="/" className="w-[12rem] xl:mr-12">
              <img className="lg:ml-20" src={datawise} loading="lazy" alt="Datawise" width={65} height={20}/>
          </a>

          <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  <Link
                    to={item.url}
                    onClick={(e) => handleNavItemClick(e, item)}
                    className={`block relative font-code text-2xl text-n-14 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:py-8 lg:-mr-0.25 lg:text-md lg:font-semibold ${item.url === pathname.pathname ? 'z-2 lg:text-n-15' : 'lg:text-n-14'} lg:leading-5 lg:hover:text-n-15 xl:px-8`}
                  >
                    {item.title}
                    {item.hasDropdown && ' ⇲'}
                  </Link>
                  {
                    item.title === "Tools" && isToolsOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItems) => (
                          <Link
                            key={dropdownItems.id}
                            to={dropdownItems.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsToolsOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItems.title}
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  {
                    item.title === "Company" && isCompanyOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItems) => (
                          <Link
                            key={dropdownItems.id}
                            to={dropdownItems.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsCompanyOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItems.title}
                          </Link>
                        ))}
                      </div>
                    )
                  }
                </div>
              ))}

            </div>
            <HamburgerMenu />
          </nav>
          <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation}/>
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Header;

{/* <Button className="hidden lg:flex" href="#signin">
              Staff Log in
          </Button> */}
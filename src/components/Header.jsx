import { useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import datawise from "../assets/datawise-logo-white.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./designs/Header";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const toolsRef = useRef(null);
  const companyRef = useRef(null);

  const pathname = useLocation();

  const toggleToolsDropdown = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsCompanyOpen(false);
  };

  const toggleCompanDropdown = () => {
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

  const handleNavigationClick = () => {
    setOpenNavigation(false);
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a href="/" className="block w-[12rem] xl:mr-8">
              <img src={datawise} alt="Datawise" width={190} height={20}/>
          </a>

          <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  <a
                    href={item.url}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden': ""} px-6 py-6 md:py-8 lg:py-8 lg:-mr-0.25 lg:text-md lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.hasDropdown) {
                        if (item.title === "Tools") {
                          toggleToolsDropdown();
                        } else if (item.title === "Company"){
                          toggleCompanDropdown();
                        }
                        
                      }
                    }}
                  >
                    {item.title}
                    {item.hasDropdown && ' ⇲'}
                  </a>
                  {
                    item.title === "Tools" && isToolsOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItems) => (
                          <a
                            key={dropdownItems.id}
                            href={dropdownItems.url}
                            className="block px-4 py-3 text-sm text-n-8 hover:text-color-1"
                          >
                            {dropdownItems.title}
                          </a>
                        ))}
                      </div>
                    )
                  }
                  {
                    item.title === "Company" && isCompanyOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItems) => (
                          <a
                            key={dropdownItems.id}
                            href={dropdownItems.url}
                            className="block px-4 py-3 text-sm text-n-8 hover:text-color-1"
                          >
                            {dropdownItems.title}
                          </a>
                        ))}
                      </div>
                    )
                  }
                </div>
              ))}

            </div>
            <HamburgerMenu />
          </nav>

          <Button className="hidden lg:flex" href="#signin">
              Staff Log in
          </Button>

          <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation}/>
          </Button>
        </div>
    </div>
  )
}

export default Header;

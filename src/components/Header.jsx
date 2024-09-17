import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import datawise from "/assets/logo-round.png";
import { navigation } from "../constants";
import Button from "./HomePage/Button";
import MenuSvg from "../../public/assets/svg/MenuSvg";
import { HamburgerMenu } from "./designs/Header";
import Section from "./HomePage/Section";
import { getUserId } from "../lib/auth/actions";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const navigate = useNavigate();

  const pathname = useLocation();

  const userId = getUserId(); 

  const toggleToolsDropdown = () => {
    setIsToolsOpen(!isToolsOpen);
    setIsCompanyOpen(false);
    setIsResourceOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsToolsOpen(false);
    setIsResourceOpen(false);
  };

  const toggleResourceDropdown = () => {
    setIsResourceOpen(!isResourceOpen);
    setIsToolsOpen(false);
    setIsCompanyOpen(false);
  };

  const toggleAdminPanelDropdown = () => {
    setIsAdminPanelOpen(!isAdminPanelOpen);
    setIsAdminPanelOpen(false);
  };

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
      } else if (item.title == 'Resources') {
        toggleResourceDropdown();
      } else if (item.title === 'Admin Panel') {
        toggleAdminPanelDropdown();
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
              <img className="lg:ml-20" src={datawise} loading="lazy" alt="Datawise" width={80} height={20}/>
          </a>

          <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => {
                // Check if the item requires user to be logged in
                if (item.isLoggedIn && !userId) {
                  return null;
                }
                
                return (
                  <div key={item.id} className="relative">
                    <Link
                      to={item.url}
                      onClick={(e) => handleNavItemClick(e, item)}
                      className={`block relative font-code text-2xl text-n-14 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:py-8 lg:-mr-0.25 lg:text-md lg:font-semibold ${item.url === pathname.pathname ? 'z-2 lg:text-n-15' : 'lg:text-n-14'} lg:leading-5 lg:hover:text-n-15 xl:px-8`}
                    >
                      {item.title}
                      {item.hasDropdown && ' ⇲'}
                    </Link>
                    {item.hasDropdown && item.title === "Tools" && isToolsOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsToolsOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.hasDropdown && item.title === "Company" && isCompanyOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsCompanyOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.hasDropdown && item.title === "Resources" && isResourceOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsResourceOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.hasDropdown && item.title === "Admin Panel" && isAdminPanelOpen && (
                      <div className="absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsAdminPanelOpen(false);
                              handleDropdownNavigationClick();
                            }}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

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
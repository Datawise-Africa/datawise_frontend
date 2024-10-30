// Header.js

import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import datawise from "/assets/logo-round.png";
import { navigation } from "../../constants";
import Button from "../HomePage/Button";
import MenuSvg from "../../../public/assets/svg/MenuSvg";
import { HamburgerMenu } from "../designs/Header";
import Section from "../HomePage/Section";
import { getUserId } from "../../lib/auth/actions";
import AuthModal from "../Modals/AuthModal";
import useAuthModal from "../../hooks/useAuthModal";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const [navUrl, setNavUrl] = useState("");
  const dropdownRef = useRef(null); // For handling outside clicks
  const navigate = useNavigate();
  const authModal = useAuthModal();

  const pathname = useLocation();
  const userId = getUserId();

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsToolsOpen(false);
        setIsCompanyOpen(false);
        setIsResourceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleNavItemClick = (e, item) => {
    e.preventDefault();

    if (item.requiresAuth && !userId) {
      authModal.open();
      setNavUrl(item.url);
      return;
    }

    if (item.hasDropdown) {
      if (item.title === "Tools") {
        setIsToolsOpen(!isToolsOpen);
      } else if (item.title === "Company") {
        setIsCompanyOpen(!isCompanyOpen);
      } else if (item.title === "Resources") {
        setIsResourceOpen(!isResourceOpen);
      }
    } else {
      navigate(item.url);
      if (openNavigation) {
        toggleNavigation();
      }
    }
  };

  return (
    <Section id="header" className="!px-0 !py-0">
      <div
        className={`fixed top-0 left-0 lg:left-20 w-full z-50 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-15 xl:px-20 max-lg:py-4">
          <a href="/" className="w-[12rem] xl:mr-12">
            <img
              className="lg:ml-20"
              src={datawise}
              loading="lazy"
              alt="Datawise"
              width={80}
              height={20}
            />
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div
              className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row"
              ref={dropdownRef}
            >
              {navigation.map((item) => {
                if (item.isLoggedIn && !userId) {
                  return null;
                }

                return (
                  <div key={item.id} className="relative group">
                    <Link
                      to={item.url}
                      onClick={(e) => handleNavItemClick(e, item)}
                      className={`block relative font-code text-2xl text-n-14 transition-colors hover:text-color-1 ${
                        item.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-4 md:py-4 lg:py-4 lg:-mr-0.25 lg:text-md lg:font-semibold ${
                        item.url === pathname.pathname
                          ? "border-b-4 border-n-14 text-n-14 font-bold"
                          : "text-n-14"
                      }`}
                    >
                      {item.title}
                    </Link>
                    {item.hasDropdown && (
                      <div
                        className={`absolute z-10 top-full left-0 mt-1 w-full bg-n-8 border border-n-5 rounded-lg shadow-lg ${
                          (item.title === "Tools" && isToolsOpen) ||
                          (item.title === "Company" && isCompanyOpen) ||
                          (item.title === "Resources" && isResourceOpen)
                            ? "block"
                            : "hidden"
                        } group-hover:block`}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.url}
                            className="block px-4 py-3 text-sm text-n-14 hover:text-n-15"
                            onClick={() => {
                              setIsToolsOpen(false);
                              setIsCompanyOpen(false);
                              setIsResourceOpen(false);
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
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
      <AuthModal navUrl={navUrl} />
    </Section>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import {
  ProductsMenu,
  ServicesMenu,
  IndustriesMenu,
  OfferingMenu,
} from "../Container";
import { favicon, hamburger, cross } from "../assets";
import { Link } from "react-router-dom";
import { GoPerson, GoSearch, GoChevronDown } from "react-icons/go";
import { TbMessage2Question } from "react-icons/tb";

function Navbar() {
  const [dropDownBox, setDropDownBox] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (dropDownBox || navVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [dropDownBox, navVisible]);

  const links = [
    {
      title: "Products",
      path: "/products",
      dropDown: <ProductsMenu setDropDownBox={setDropDownBox} />,
      down: true,
    },
    {
      title: "Services",
      path: "/services",
      dropDown: <ServicesMenu setDropDownBox={setDropDownBox} />,
      down: true,
    },
    {
      title: "Industries",
      path: "/industries",
      dropDown: <IndustriesMenu setDropDownBox={setDropDownBox} />,
      down: true,
    },
    {
      title: "Offering",
      path: "/offering",
      dropDown: <OfferingMenu setDropDownBox={setDropDownBox} />,
      down: true,
    },
  ];

  const handleToggle = () => {
    setNavVisible((prev) => !prev);
    if(navVisible) {
      setDropDownBox(null)
    }
  }

  const handleNavItemClick = (navItem) => {
    setDropDownBox((prev) => {
      if (prev) {
        const currentElementName =
          prev?.type?.name?.split("M")[0];
        if (currentElementName === navItem.title) {
          return null;
        }
      }
      return navItem.dropDown;
    })
  }
  return (
    <div
      className={`fixed w-full ${dropDownBox? "h-screen" : 'h-fit'} grid grid-rows-[auto_auto_auto_1fr] transform transform-translate duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white flex items-center justify-between main-container">
        <div className="flex items-center">
          <img
            src={navVisible ? cross : hamburger}
            alt="hamburger"
            className={`h-10 block sm:hidden cursor-pointer p-2 hover:bg-neutral-200`}
            onClick={() => handleToggle()}
          />
          <img src={favicon} alt="logo" className="h-7 mx-2" />

          <div className="w-[1px] h-7 bg-slate-300 hidden sm:block mx-2"></div>

          <ul
            className={`w-full bg-white ${
              navVisible
                ? "flex flex-col min-h-screen absolute top-11 sm:top-12"
                : "hidden sm:flex"
            }`}
          >
            {links.map((navItem) => (
              <li
                key={navItem.title}
                onClick={() => handleNavItemClick(navItem)}
                className="flex items-center gap-1 cursor-pointer hover:bg-neutral-200 px-3.5 py-2.5 border-b sm:border-0"
              >
                <span>{navItem.title}</span>
                <GoChevronDown size={16} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <GoPerson size={20} />
          <GoSearch size={20} />
          <TbMessage2Question size={20} />
        </div>
      </div>

      <div className='w-full h-[1px] bg-neutral-200'></div>

      {dropDownBox}

      <div
        onClick={() => setDropDownBox(null)}
        className="h-full bg-black opacity-40"
      ></div>
    </div>
  );
}

export default Navbar;

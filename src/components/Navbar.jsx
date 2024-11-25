import React, { useEffect, useState } from "react";
import { Container, ProductsNav, SolutionsNav, SupportsNav } from "./index";
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
    if (dropDownBox) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      console.log("Viewport Width:", window.innerWidth);
      console.log("Content Width:", document.documentElement.clientWidth);
      console.log(
        "Scrollbar Width:",
        window.innerWidth - document.documentElement.clientWidth
      );

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [dropDownBox]);

  const links = [
    {
      title: "Products",
      path: "/products",
      dropDown: <ProductsNav setDropDownBox={setDropDownBox}/>,
      down: true,
    },
    {
      title: "Solutions",
      path: "/solutoins",
      dropDown: <SolutionsNav />,
      down: true,
    },
    {
      title: "Consulting",
      path: "/consulting",
      dropDown: null,
      down: false,
    },
    {
      title: "Support",
      path: "/support",
      dropDown: <SupportsNav />,
      down: true,
    },
    {
      title: "Think",
      path: "/think",
      dropDown: null,
      down: false,
    },
  ];

  return (
    <div
      className={`fixed bg-white w-full transition-transform duration-100 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="grid grid-cols-[1fr_auto] ">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="w-full flex justify-between">
            <div className="flex items-center">
              <img
                onClick={() => setNavVisible((pre) => !pre)}
                src={navVisible ? cross : hamburger}
                alt="hamburger"
                className="block md:hidden h-7 px-2 cursor-pointer"
              />

              <img
                src={favicon}
                alt="ibm-icon"
                className="h-11 p-2 hover:bg-grayHover"
              />

              <div className="hidden md:block h-6 w-[1px] mx-[1px] bg-gray-300"></div>

              <ul className="ml-3 hidden md:flex items-center">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    onClick={() =>
                      link.dropDown ? setDropDownBox(link.dropDown) : null
                    }
                    className="px-3 py-2 flex items-center gap-2 hover:bg-neutral-200 cursor-pointer"
                  >
                    <span>{link.title}</span>
                    {link.down ? <GoChevronDown /> : null}
                  </Link>
                ))}
              </ul>

              {navVisible && (
                <ul className="w-full absolute top-[45px] bg-white flex flex-col">
                  {links.map((link) => (
                    <Link>
                      <div
                        key={link.title}
                        onClick={() =>
                          link.dropDown ? setDropDownBox(link.dropDown) : null
                        }
                        className="px-3 py-2 flex justify-between items-center gap-2 hover:bg-neutral-200 cursor-pointer"
                      >
                        <span>{link.title}</span>
                        <div className="-rotate-90">
                          {link.down ? <GoChevronDown /> : null}
                        </div>
                      </div>
                      <div className="w-full flex bg-gray-300 h-[1px]"></div>
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            <div className="icons flex items-center gap-8 mr-4">
              <GoSearch size={20}/>
              <TbMessage2Question size={20}/>
              <GoPerson size={20}/>
            </div>
          </div>
        </div>

        <div
          className={` bg-gray-500 h-full w-[17px] ${
            dropDownBox ? "block" : "hidden"
          }`}
        ></div>
      </div>
      <div className="w-full flex bg-gray-300 h-[1px]"></div>
      {dropDownBox && (
        <div className="w-full h-[calc(100vh-2.75rem)] mt-1 bg-black bg-opacity-30 absolute top-11">
          <div className="shadow-xl">{dropDownBox}</div>
          <div className="h-full" onClick={() => setDropDownBox(null)}></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

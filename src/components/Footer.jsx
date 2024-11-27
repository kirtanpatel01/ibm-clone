import React, { useState } from "react";
import Container from "./Container";
import { ibmWhite } from "../assets";
import { IoEarthSharp, IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    {
      head: "Discover",
      list: [
        "Products",
        "Trials",
        "Services",
        "Industries",
        "Case studies",
        "Financing",
      ],
      order: 1,
    },
    {
      head: "Connect with us",
      list: [
        "Engage IBM Consulting",
        "Support",
        "Find a partner",
        "Developers",
        "Business Partners",
      ],
      order: 2,
    },
    {
      head: "Follow IBM",
      list: ["LinkedIn", "X", "Instagram", "Subscription Center"],
      order: 5,
    },
    {
      head: "Learn about",
      list: [
        "Artificial intelligence",
        "Machine learning",
        "Generative AI",
        "Responsible AI",
        "Cybersecurity",
        "Business analytics",
        "Quantum computing",
      ],
      order: 3,
    },
    {
      head: "About IBM",
      list: [
        "Careers",
        "Newsroom",
        "What’s new",
        "Investor relations",
        "Corporate responsibility",
        "About IBM",
      ],
      order: 4,
    },
  ];

  const extra = [
    "Contact",
    "Terms of use",
    "Cookie Preferences",
    "Privacy",
    "Accessibility",
  ];

  const [dropDown, setDropDown] = useState(false);
  const [index, setIndex] = useState(-1);
  const [preIndex, setPreIndex] = useState(-1);

  const handleClick = (index) => {
    console.log(`Pre: ${preIndex} & current: ${index}`)
    setDropDown(preIndex===index ? false : true);
    setIndex(index);
    setPreIndex(index);
  };

  return (
    <div className="w-full bg-neutral-800 py-16 text-white text-sm">
      <Container>
        <div className="w-full flex flex-col gap-16 mx-4 2xl:mx-0">
          <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-16 sm:gap-0">
            <img src={ibmWhite} alt="IBM Logo" className="h-14 " />
            <div className="h-fit text-white border border-white cursor-pointer flex p-3 items-center justify-between w-full sm:w-96 hover:bg-white hover:text-black">
              <span>India - English</span>
              <IoEarthSharp size={16} />
            </div>
          </div>

          <div className="flex">
            <div className="w-0 lg:w-96"></div>
            <div className="w-full flex flex-col gap-0 sm:gap-4">
              <div className="w-full h-[1px] bg-neutral-600"></div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:mx-4">
                {links.map((item, i) => (
                  <li
                    onClick={() => handleClick(i)}
                    className={`flex flex-col justify-between gap-2 sm:mb-10 order-${item.order} border-b-[1px] border-neutral-600 py-3 px-2 sm:px-0 sm:border-none sm:py-0`}
                  >
                    <div className='w-full flex justify-between'>
                      <span className="sm:font-semibold">{item.head}</span>
                      <IoChevronDownOutline
                        className={`sm:hidden ${
                          dropDown && i === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {item.list && (
                      <ul
                        className={`sm:flex flex-col gap-2 text-neutral-300 my-4 sm:my-0 ${
                          dropDown && i === index ? "flex" : "hidden"
                        }`}
                      >
                        {item.list.map((link) => (
                          <Link className="hover:underline py-2 sm:py-0">{link}</Link>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="hidden sm:block w-full h-[1px] bg-neutral-600"></div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-neutral-300 gap-4 sm:gap-2 mx-2 sm:mx-4 mt-8 sm:mt-0">
                {extra.map((link) => (
                  <Link className=" hover:underline">{link}</Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

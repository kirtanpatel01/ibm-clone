import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

function NavItemMenu({ navItemName, leftLinks, setDropDownBox }) {
  const [selected, setSelected] = useState(leftLinks[0].title || '');
  const [sub, setSub] = useState(leftLinks[0].subTitle || '');
  const [content, setContent] = useState(leftLinks[0]?.content || []);
  const [isSubContentVisible, setIsSubContentVisible] = useState(false);

  const handleClick = ({ title = "", sub = "", content = [] } = {}) => {
    setSelected(title);
    setSub(sub);
    setContent(content);
    setIsSubContentVisible((prev) => !prev);
  };

  const handleBackClick = () => {
    if (isSubContentVisible) {
      setIsSubContentVisible(false);
    } else {
      setDropDownBox(null);
    }
  };

  console.log(leftLinks[0])

  return (
    <div className="h-screen sm:h-fit bg-white flex text-sm z-10">
      {/* for larger screens */}
      <div className="main-container hidden sm:grid grid-cols-1 sm:grid-cols-[.4fr_auto_1fr] lg:grid-cols-[.25fr_auto_1fr]">
        <ul className="mt-1 ml-1">
          {leftLinks.map((link) => (
            <li
              key={link.title}
              onClick={() =>
                handleClick({
                  title: link.title,
                  sub: link.subTitle,
                  content: link?.content,
                })
              }
              className={`px-3 py-1 cursor-pointer hover:bg-neutral-100 ${
                selected === link.title ? "bg-neutral-200" : "text-neutral-500"
              }`}
            >
              {link.title}
            </li>
          ))}
          <div className="w-full h-[1px] bg-gray-200"></div>
          <Link
            to={`/${navItemName.toLowerCase()}`}
            onClick={() => setDropDownBox(null)}
            className="flex items-center gap-2 text-primary px-4 py-2 hover:bg-neutral-100 cursor-pointer"
          >
            <span>View all {navItemName}</span>
            <GoArrowRight />
          </Link>
        </ul>
        <div className="h-full w-[1px] hidden sm:block bg-gray-200"></div>
        <div className="mt-4 ml-6 hidden sm:flex flex-col gap-2 lg:gap-7">
          <div>
            <h1 className="text-3xl">{selected}</h1>
            <h2 className="text-neutral-700 mt-1">{sub}</h2>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-3">
            {content.map((item) => (
              <Link
                key={item.heading}
                onClick={() => setDropDownBox(null)}
                to={"/products/api-connect"}
                className="text-neutral-600 flex flex-col w-64 lg:w-72 xl:w-[19rem] hover:bg-neutral-100 cursor-pointer pl-0 p-4 lg:p-4"
              >
                <span className="font-semibold">{item.heading}</span>
                <span className="text-sm">{item.desc}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* for smaller screens */}
      <div className="visible sm:hidden w-full h-full">
        <div
          onClick={() => handleBackClick()}
          className="text-blue-600 flex gap-1 p-2 border-2 border-transparent hover:border-2 hover:border-blue-600 w-full cursor-pointer"
        >
          <IoChevronDownOutline size={16} className="rotate-90" />
          <span>Back</span>
        </div>
        <ul className={`${isSubContentVisible ? "hidden" : "visible"}`}>
          <div className="border-b py-2 px-4 font-semibold">{navItemName}</div>
          {leftLinks.map((linkItem) => (
            <li
              onClick={() =>
                handleClick({
                  title: linkItem.title,
                  content: linkItem.content,
                })
              }
              className="border-b py-3 px-4 cursor-pointer hover:bg-neutral-200"
              key={linkItem.title}
            >
              {linkItem.title}
            </li>
          ))}
        </ul>
        <ul className={`${isSubContentVisible ? "visible" : "hidden"}`}>
          <div className="border-b py-2 px-4 font-semibold">{selected}</div>
          {content.map((subLink) => (
            <li
              key={subLink.heading}
              className="flex flex-col border-b py-3 px-4 cursor-not-allowed"
            >
              <span>{subLink.heading}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavItemMenu;

import React from "react";
import { Link } from "react-router-dom";
import { learning, jobs } from "../../assets";
import { RxExternalLink } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

function NextSteps() {
  const list = [
    {
      title: "IBM India Careers",
      sub: "Become IBMer",
      cta: "Explore Jobs",
      icon: <GoArrowRight size={20} />,
      img: jobs,
    },
    {
      title: "IBM SkillBuild",
      sub: "Explore learning opportunities",
      cta: "Start Learning",
      icon: <RxExternalLink size={20} />,
      img: learning,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-0 sm:mx-8 2xl:mx-0 mb-32">
      <h1 className="mx-4 sm:mx-0 text-4xl lg:text-5xl xl:text-6xl sm:font-light">Take the next step</h1>
      <p className="mx-4 sm:mx-0 mt-8 lg:mt-0 mb-20 lg:mb-0 text-2xl sm:text-xl xl:text-2xl">
        Solving the world’s problems through technology wouldn’t be possible
        without people with the right skills. See what it takes to become an
        IBMer, or build your skills with our educational courses.
      </p>
      {list.map((item) => (
        <Link className="sm:flex border p-0 sm:p-4 gap-8 mt-0 lg:mt-20">
          <img src={item.img} alt={item.img} className="w-full sm:w-[50%] lg:w-80" />
          <div className='flex flex-col gap-8 m-4 sm:m-0'>
            <div>
              <h3 className="text-xs text-neutral-600">{item.title}</h3>
              <span>{item.sub}</span>
            </div>
            <Link className="flex text-primary items-center gap-2">
              <span className="hover:underline underline-offset-4">{item.cta}</span>
              {item.icon}
            </Link>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NextSteps;

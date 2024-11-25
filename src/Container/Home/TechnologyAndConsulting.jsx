import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  ai,
  ai_models,
  people,
  analytics,
  automation,
  servers,
  db,
  security,
} from "../../assets";

function TechnologyAndConsulting() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(-1);

  const list = [
    {
      head: "AI solutions",
      desc: "Go from AI pilots to production with AI technologies built for business",
      img: ai,
    },
    {
      head: "AI models",
      desc: "Get started with cost-efficient AI models, tailored for business and optimized for scale",
      img: ai_models,
    },
    {
      head: "Consulting",
      desc: "Engage with IBM Consulting to design, build and operate high-performing businesses",
      img: people,
    },
    {
      head: "Analytics",
      desc: "Support data-driven decisions for your business",
      img: analytics,
    },
    {
      head: "IT automation",
      desc: "Automate IT infrastructure management",
      img: automation,
    },
    {
      head: "Compute & servers",
      desc: "Handle mission-critical workloads while maintaining security, reliability and control of your entire IT infrastructure",
      img: servers,
    },
    {
      head: "Databases",
      desc: "Run your applications, analytics and generative AI with databases on any cloud",
      img: db,
    },
    {
      head: "Security & identity",
      desc: "Secure hybrid cloud and AI with data and identity-centric cybersecurity solutions",
      img: security,
    },
  ];

  const handleHover = (index) => {
    setVisible(true);
    setIndex(index);
  };

  return (
    <div className="mb-32 py-16 mx-4 sm:mx-8 2xl:mx-0">
      <h1 className="text-4xl lg:text-6xl font-base sm:font-light w-full 2xl:max-w-96 my-8">
        Technology & Consulting
      </h1>
      <h3 className="my-6 text-xl max-w-2xl">
        From{" "}
        <span className="text-primary text-base hover:underline underline-offset-4 cursor-pointer">
          next-generation AI
        </span>{" "}
        to cutting edge{" "}
        <span className="text-primary text-base hover:underline underline-offset-4 cursor-pointer">
          hybrid cloud solutions
        </span>{" "}
        to the deep expertise of{" "}
        <span className="text-primary text-base hover:underline underline-offset-4 cursor-pointer">
          IBM Consulting
        </span>
        , IBM has what it takes to help you reinvent how your business works in
        the age of AI.
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
        {list.map((item, i) => (
          <Link
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => setVisible(false)}
            className="h-72 sm:h-48 border hover:border-none p-4 flex flex-col justify-between hover:bg-custom-gradient-b hover:text-white"
          >
            <div className='flex flex-col gap-8'>
              <span className={`${visible && i===index ? 'hidden' : 'block'}`}>{item.head}</span>
              <span className={`${visible && i === index ? 'sm:block' : 'sm:hidden'}`}>{item.desc}</span>
            </div>
            <div className="flex justify-between items-end">
              <img src={item.img} alt="img" className="h-12" />
              <GoArrowRight size={20} />
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TechnologyAndConsulting;

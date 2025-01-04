import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

function ProductsMenu({ setDropDownBox }) {
  const leftLinks = [
    {
      title: "Featured",
      subTitle: "",
      content: [
        {
          heading: "API Connect",
          desc: "Software to rapidly create, protect, socialize} and manage APIs",
        },
        {
          heading: "Concert",
          desc: "AI to analyze and manage IT infrastructure using natural} language",
        },
        {
          heading: "Robotic Process Automation (RPA)",
          desc: "Software to automate workflows and business processes",
        },
        {
          heading: "Environmental Intelligence",
          desc: "SaaS for predicting and responding to weather and climate} events",
        },
        {
          heading: "Envizi",
          desc: "ESG data management, reporting and analysis SaaS",
        },
        {
          heading: "FlashSystem",
          desc: "Primary storage for performance and latency sensitive workloads",
        },
        {
          heading: "Hybrid Cloud Mesh",
          desc: "SaaS for deploying and managing hybrid and multicloud networks",
        },
        {
          heading: "IBM Cloud",
          desc: "On-demand cloud computing platform and APIs",
        },
        {
          heading: "IBM Z",
          desc: "Flagship mainframe with on-chip AI and quantum}-safe cryptography",
        },
        {
          heading: "Instana",
          desc: "Software for application performance monitoring and automation",
        },
        {
          heading: "MaaS360",
          desc: "Unified endpoint management software for many device types",
        },
        {
          heading: "Maximo",
          desc: "Software for asset management and related workflows",
        },
        {
          heading: "Planning Analytics",
          desc: "Software to automate financial and operational planning",
        },
        {
          heading: "Storage Defender",
          desc: "Data resiliency software for threat detection and data} recovery",
        },
        {
          heading: "Turbonomic",
          desc: "Software to manage and optimize IT resource usage",
        },
        {
          heading: "watsonx",
          desc: "AI and data platform",
        },
        {
          heading: "watsonx Assistant",
          desc: "Virtual agents customizable to any domain",
        },
        {
          heading: "watsonx Orchestrate",
          desc: "Personal-assistant software that automates repetitive tasks",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      subTitle: "Use IBM Watson's AI or build your own machine learning models",
      content: [
        {
          heading: "Cloud Pak for AIOps",
          desc: "DevOps management tool with AI analysis and recommendations",
        },
        {
          heading: "Cloud Pak for Data",
          desc: "Tools for data analysis, organization, and management",
        },
        {
          heading: "Knowledge Catalog",
          desc: "SaaS to catalog data, AI models, metadata, policies, and more",
        },
        {
          heading: "Watson Discovery",
          desc: "AI to search and answer questions within business documents",
        },
        {
          heading: "Watson Natural Language Understanding",
          desc: "API for text analysis and metadata extraction",
        },
        {
          heading: "Watson Speech to Text",
          desc: "API for real-time speech recognition and transcription",
        },
        {
          heading: "Watson Studio",
          desc: "IDE to build, run, and manage AI models",
        },
        {
          heading: "Watson Text to Speech",
          desc: "API for real-time text-to-speech conversion",
        },
        {
          heading: "Z Anomaly Analytics",
          desc: "Operational anomaly detection software for mainframes",
        },
        {
          heading: "watsonx",
          desc: "AI and data platform",
        },
        {
          heading: "watsonx Assistant",
          desc: "Virtual agents customizable to any domain",
        },
        {
          heading: "watsonx Code Assistant",
          desc: "AI tool to generate code",
        },
        {
          heading: "watsonx Orders",
          desc: "AI voice agent for taking restaurant orders",
        },
      ],
    },
    {
      title: "Analytics",
      subTitle: "Aggregate and analyze large datasets",
      content: [
        {
          heading: "Business Analytics",
          desc: "Enterprise software for business planning and analysis",
        },
        {
          heading: "CPLEX",
          desc: "Software to build and solve complex optimization models",
        },
        {
          heading: "Cloud Pak for Data",
          desc: "Tools for data analysis, organization, and management",
        },
        {
          heading: "Cognos Analytics",
          desc: "Software for business intelligence and performance management",
        },
        {
          heading: "Databand",
          desc: "Data observability software for data engineers and DataOps teams",
        },
        {
          heading: "InfoSphere Information Server",
          desc: "Data integration suite for ETL, governance, and analysis",
        },
        {
          heading: "Manta Data Lineage",
          desc: "Software to visualize the flow of data from origin to consumption",
        },
        {
          heading: "Netezza",
          desc: "Data warehousing and analytics system on custom hardware",
        },
        {
          heading: "Optim",
          desc: "Software to manage test, production, and archived data",
        },
        {
          heading: "Planning Analytics",
          desc: "Software to automate financial and operational planning",
        },
        {
          heading: "SPSS",
          desc: "Software for statistical analysis and business intelligence",
        },
        {
          heading: "Spectrum Computing",
          desc: "Software to optimize resources in complex computing clusters",
        },
        {
          heading: "StreamSets",
          desc: "Graphical interface to build and manage streaming data pipelines",
        },
        {
          heading: "Watson Discovery",
          desc: "AI to search and answer questions about business documents",
        },
        {
          heading: "Watson Studio",
          desc: "IDE to build, run, and manage AI models",
        },
      ],
    },
    {
      title: "Asset Lifecycle Management",
      subTitle: "Manage and maintain physical assets effectively",
      content: [
        {
          heading: "Environmental Intelligence",
          desc: "SaaS for predicting and responding to weather and climate events",
        },
        {
          heading: "Envizi",
          desc: "ESG data management, reporting, and analysis SaaS",
        },
        {
          heading: "Maximo",
          desc: "Software for asset management and related workflows",
        },
        {
          heading: "TRIRIGA",
          desc: "Software for real estate and workplace management",
        },
      ],
    },
  ];

  const [selected, setSelected] = useState(leftLinks[0].title);
  const [sub, setSub] = useState("");
  const [content, setContent] = useState(leftLinks[0].content);
  const [isSubContentVisible, setIsSubContentVisible] = useState(false);

  const handleClick = ({ title = "", sub = "", content = [] } = {}) => {
    setSelected(title);
    setSub(sub);
    setContent(content);
    setIsSubContentVisible((prev) => !prev);
  };

  console.log(isSubContentVisible);

  const handleBackClick = () => {
    if (isSubContentVisible) {
      setIsSubContentVisible(false);
    } else {
      setDropDownBox(null);
    }
  };

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
                  content: link.content,
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
            to={"/products"}
            onClick={() => setDropDownBox(null)}
            className="flex items-center gap-2 text-primary px-4 py-2 hover:bg-neutral-100 cursor-pointer"
          >
            <span>View all products</span>
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
          <div className="border-b py-2 px-4 font-semibold">Products</div>
          {leftLinks.map((linkItem) => (
            <li
              onClick={() => handleClick({title: linkItem.title, content: linkItem.content })}
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

export default ProductsMenu;

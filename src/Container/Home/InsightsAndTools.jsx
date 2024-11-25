import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function InsightsAndTools() {
  const types = [
    {
      head: "For developers",
      desc: "Grow your skills and create something new with our AI tools and foundation models. Then connect, collaborate and innovate with your peers.",
      list: [
        "Start building with IBM Granite 3.0 models",
        "Explore AI courses, APIs, data sets and more",
        "Accelerate software development with watsonx Code Assistant",
        "Check out the watsonx.ai Developer Toolkit",
      ],
    },
    {
      head: "For business leaders",
      desc: "Transform business and drive growth with AI tools, technology and insights that help you stay competitive-and responsibly map your organizations future.",
      list: [
        "Read the CEOs guide to generative AI",
        "Explore an AI curriculum designed for business leaders",
        "Deploy an AI agent for HR with watsonx Orchestrate",
        "Protect your data with IBM Guardium Data Security Center",
      ],
    },
  ];

  return (
    <div className='flex flex-col gap-8 my-16 mx-4 2xl:mx-0'>
      <h1 className="text-4xl lg:text-6xl font-normal sm:font-light my-16">AI insights and tools</h1>
      <ul className="flex flex-col lg:flex-row gap-32 lg:gap-12">
        {types.map((type) => (
          <li className="flex flex-col gap-8">
            <h1 className="text-3xl lg:text-4xl bg-clip-text text-transparent bg-custom-gradient">{type.head}</h1>
            <p>{type.desc}</p>
            {type.list && (
              <ul className="flex flex-col gap-3 lg:gap-4">
                {type.list.map((item) => (
                  <Link className="text-primary flex gap-4">
                    <span>{item}</span>
                    <GoArrowRight size={22}/>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className='w-full h-[1px] bg-gray-400 mt-12'></div>
    </div>
  );
}

export default InsightsAndTools;

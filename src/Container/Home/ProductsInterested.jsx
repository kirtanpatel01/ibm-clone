import React from "react";
import { ProductsInterestedCompo } from "../../components";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function ProductsInterested() {
  const list = [
    {
      head: "Concert",
      desc: "AI to analyze and manage IT infrastructure using natural language",
    },
    {
      head: "Instana",
      desc: "Software for application performance monitoring and automation",
    },
    {
      head: "Apptio",
      desc: "Hybrid cloud financial management and planning software",
    },
    {
      head: "App Connect",
      desc: "Codeless connectors for your data, apps, and APIs",
    },
  ];

  return (
    <div className='mx-4 sm:mx-8 2xl:mx-0 py-8'>
      <h2 className="text-3xl font mb-8">Products you may be interested in</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((item) => (
          <Link className="flex flex-col border p-4 gap-2 hover:bg-neutral-200">
            <span className="text-xs text-neutral-500">
              {item.head}
            </span>
            <p className="">{item.desc}</p>
            <GoArrowRight size={20} className="text-primary mt-16" />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductsInterested;

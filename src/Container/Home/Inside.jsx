import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function Inside() {
  const sections = [
    {
      title: "Our company",
      desc: "Explore IBM history and culture of putting technology to work in the real world",
      links: [
        { text: "About IBM", url: "/about-ibm" },
        { text: "Our history", url: "/our-history" },
      ],
    },
    {
      title: "Our impact",
      desc: "Learn about IBM's commitment to environmental, equitable and ethical pillars",
      links: [
        { text: "Corporate social responsibility", url: "/csr" },
        { text: "Diversity and inclusion", url: "/diversity-inclusion" },
      ],
    },
    {
      title: "Our innovations",
      desc: "Visit the IBM lab, and see what's in store for the future of computing",
      links: [
        { text: "IBM Research", url: "/ibm-research", newTab: true },
        { text: "Quantum computing", url: "/quantum-computing" },
      ],
    },
  ];

  return (
    <div className="my-16 mx-4 sm:mx-8 2xl:mx-0">
      <div className="w-full h-[1px] bg-neutral-400 my-16"></div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 xl:gap-16 xl:py-8 lg:mt-28">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-base sm:font-light min-w-72 xl:min-w-80">Inside IBM</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {sections.map((item) => (
            <li className="flex flex-col gap-8">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="max-w-80">{item.desc}</p>
              </div>
              {item.links && (
                <ul className="flex flex-col gap-2">
                  {item.links.map((link) => (
                    <Link className="flex gap-2 text-primary">
                      <span className="hover:underline underline-offset-4">
                        {link.text}
                      </span>
                      <GoArrowRight size={20} />
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[1px] bg-neutral-400 my-16"></div>
    </div>
  );
}

export default Inside;

import React from "react";
import { RecommendBox } from "../../components";
import { hero, coding, product_launch, digital_monitoring, special_offer } from "../../assets";

function Recommendations() {
  const data = [
    {
      img: coding,
      heading: "Coding made simple",
      desc: "Try watsonx Code Assistant at no cost with the 30-day trial",
    },
    {
      img: product_launch,
      heading: "Product launch",
      desc: "Protect your data with IBM Guardium Data Security Center",
    },
    {
      img: digital_monitoring,
      heading: "Digital experience monitoring",
      desc: "Monitor and optimize user experience across endpoints with Instana Observability",
    },
    {
      img: special_offer,
      heading: "Special offer",
      desc: "Save 30% on select products",
    },
  ];

  return (
    <div className="my-16 mx-4 sm:mx-8 2xl:mx-0">
      <h2 className="font-semibold my-8">Recommonded for you</h2>
      <ul className="grid sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {data.map((item, index) => (
          <RecommendBox key={index} img={item.img} heading={item.heading} desc={item.desc}/>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;

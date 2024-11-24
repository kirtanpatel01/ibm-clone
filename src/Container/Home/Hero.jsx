import React, { useState } from "react";
import { hero } from "../../assets";
import { CTAButton, NewsCompo } from "../../components";

function Hero() {

    const [ underline, setUnderline ] = useState(false);
    const [ index, setIndex] = useState(1);
    const [ selected, setSelected ] = useState(1);

    const handleMouseEnter = (index) => {
        setUnderline(true)
        setIndex(index)
    }

    const handleMouseLeave = () => {
        setUnderline(false)
        // setIndex(index)
    }

  const newsList = [
    {
      1: "IBM Advances Secure AI, Quantum Safe Technology with IBM Guardium Data Security Center",
      2: "Star Union Dai-ichi Life Collaborates with QuantumStreet AI to Launch Investment Offerings Powered by IBM watsonx",
    },
    {
      1: "L&T Semiconductor Technologies Ltd and IBM Announce Plans to Collaborate on Processor Technology Innovations for Automotive, Energy, and Industrial Segments",
      2: "IBM Report: Escalating Data Breach Disruption Pushes Average Cost of a Data Breach in India to All-Time High of INR 195 Million in 2024",
    },
    {
      1: "IBM to launch a GenAI Innovation Center in Kochi",
      2: "IBM and the Government of Gujarat sign MoU to establish AI Cluster in GIFT City to drive AI innovation and collaboration",
    },
    {
      1: "IBM Study: Indian CEOs Say There Is No Effective AI Without Effective Governance, But Most Don’t Have the Policies in Place Yet",
      2: "IBM and Microsoft Collaborate to Launch Experience Zone in Bangalore",
    },
  ];

  const nums = [1, 2, 3, 4];

  return (
    <div className="w-full p-4 sm:p-8 2xl:px-0 flex flex-col lg:flex-row gap-6">
      <div className="w-full flex flex-col justify-between">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light w-full lg:max-w-[28rem] xl:max-w-96 mt-4 leading-[1.15]">
          See, play and build with AI models for business
        </h1>
        <div className="flex flex-col gap-8 mt-16">
          <p className="text-lg lg:text-xl xl:text-2xl w-full lg:max-w-md xl:max-w-lg">
            Meet our trusted, open IBM Granite™ models—optimized to scale your
            AI applications from water management to Fantasy Football
          </p>
          <div className="flex gap-4">
            <CTAButton text="Meet Granite 3.0" type="primary" />
            <CTAButton text="Win at fantasy Football" type="secondary" />
          </div>
        </div>
      </div>
      <img src={hero} alt="hero" className="h-fit xl:max-w-2xl lg:max-w-lg w-full" />
      <div className="h-fit flex flex-col gap-">
        <span className="font-semibold">Latest News</span>
        <div>
          <NewsCompo text={newsList[selected-1][1]} />
          <NewsCompo text={newsList[selected-1][2]} />
        </div>
        <ul className="flex gap-4 px-2">
          {nums.map((i) => (
            <li 
            onClick={() => setSelected(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave()}
            className="text-primaryHvr text-center text-xs font-semibold cursor-pointer hover:">
                <span>{i}</span>
                <div className={`w-4 h-1 ${selected === i ? 'bg-primary' : ''} ${underline ? index === i ? 'bg-primary' : '' : '' } rounded`}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function RecommendBox({ img, heading, desc }) {
  return (
    <Link className={`p-3 xl:p-4 border hover:bg-neutral-200`}>
      <div className="h-full flex gap-3 xl:gap-4">
        <img
          src={img}
          alt={img}
          className="h-[100%] w-[50%] sm:h-[65%] md:h-[100%] lg:w-[28%] lg:h-[40%] xl:w-[40%] xl:h-[65%] min-[1440px]:w-[50%] min-[1440px]:h-[80%]"
        />
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col w-[9.5rem]">
            <span className="text-xs text-neutral-600">{heading}</span>
            <span className="min-[375px]:w-full w-[7.5rem]">
              {desc}
            </span>
          </div>
          <GoArrowRight
            size={24}
            className="text-primary mt-2 flex justify-self-end"
          />
        </div>
      </div>
    </Link>
  );
}

export default RecommendBox;

import React, { useEffect, useState } from "react";
import { hero } from "../assets";
import { FaEye } from "react-icons/fa";
import { OtherBlogs, SpotliteBlogs, HeroBlogs } from '../Container'

const BlogPage = () => {
  return (
    <div>
      {/* <HeroBlogs />

      <div className="w-full h-[1px] bg-slate-300"></div>

      <SpotliteBlogs /> 

      <div className="w-full h-[1px] bg-slate-300"></div> */}

      <OtherBlogs />
    </div>
  );
};

export default BlogPage;

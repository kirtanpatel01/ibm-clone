import React from "react";
import { hero } from "../../assets";

function HeroBlogs() {
    const heroBlogsData = [
        {
          img: hero,
          title:
            "Lorem ipsum dolor sit, amet consecr adiping elit. Aliqepe tempora",
          subTitle:
            "voluptate odit consectetur, cumque mollitia veniam labore incidunt tenetur dolorum quo exercitationem ullam autem tempore!",
        },
        {
          img: hero,
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
          subTitle:
            "voluptate odit consectetur, cumque mollitia veniam labore incidunt tenetur dolorum quo exercitationem ullam autem tempore!",
        },
        {
          img: hero,
          title:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
          subTitle:
            "voluptate odit consectetur, cumque mollitia veniam labore incidunt tenetur dolorum quo exercitationem ullam autem tempore!",
        },
      ];
  return (
    <div className="main-container px-4 my-16 flex flex-col gap-16 xl:gap-20">
      <h1 className="text-3xl sm:text-5xl font-medium">Our Picks...</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 border rounded-lg p-6 hover:shadow-md hover:bg-gray-50 hover:bg-opacity-50 cursor-pointer">
        <img src={hero} alt="hero" className="w-full md:w-2/3 rounded-3xl" />
        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl lg:text-3xl font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            saepe tempora,
          </h2>
          <h3 className="text-neutral-600 lg:text-xl">
            voluptate odit consectetur, cumque mollitia veniam labore incidunt
            tenetur dolorum quo exercitationem ullam autem tempore! Adipisci
            aspernatur dignissimos veritatis?
          </h3>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
        {heroBlogsData.map((blog, i) => (
          <li
            key={i}
            className="max-w-96 flex flex-col gap-2 border rounded-lg p-4 hover:shadow-md hover:bg-gray-50 hover:bg-opacity-50 cursor-pointer"
          >
            <img src={blog.img} alt="img" className="w-96 rounded-xl" />
            <div className="flex flex-col gap-1 px-2">
              <h2 className="text-lg font-medium">{blog.title}</h2>
              <h3 className="text-neutral-600">{blog.subTitle}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroBlogs;

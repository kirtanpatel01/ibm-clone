import React from "react";
import { hero } from "../assets";
import { FaEye } from "react-icons/fa";

const BlogPage = () => {
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
  const trendingBlogsData = [
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consecr adiping elit. Aliqepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consecr adiping elit. Aliqepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
    {
      img: hero,
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquamsaepe tempora",
      date: "12-23-3445",
      views: 1000,
    },
  ];

  const otherBlogData = [
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title:
        "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj dwefw wef wf w f wf 24r 3 v sdc  wdq3 ee",
      img: hero,
    },
    {
      date: "12-3-1230",
      topic: "AI",
      title: "oewrinfe worf wifr wornfw dr203 r2pokawlk xjke wpdkwj",
      img: hero,
    },
  ];

  return (
    <div>
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
          {heroBlogsData.map((blog) => (
            <li
              key={blog.title}
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

      {/* line */}
      <div className="w-full h-[1px] bg-slate-300"></div>

      <div className="w-full bg-slate-50">
        <div className="main-container px-4 py-16">
          <h1 className="text-3xl sm:text-5xl font-medium">Spotlight Blogs</h1>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-12 lg:gap-24 mx-0 sm:mx-8 my-16">
            {trendingBlogsData.map((blog) => (
              <li
                key={blog.title}
                className="min-h-96 w-full sm:max-w-72 bg-white rounded-3xl shadow-md hover:shadow-lg flex flex-col justify-between cursor-pointer"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <h2 className="font-medium">{blog.title}</h2>
                  <div className="flex items-center justify-between text-neutral-600">
                    <span>{blog.date}</span>
                    <div className="flex gap-1 items-center">
                      <FaEye />
                      <span>{blog.views}</span>
                    </div>
                  </div>
                </div>
                <img src={blog.img} alt="img" className="rounded-b-3xl" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* line */}
      <div className="w-full h-[1px] bg-slate-300"></div>

      <div className="main-container px-4 py-16 flex flex-col gap-16">
        <h1 className="text-3xl sm:text-5xl font-medium">
          Checkout our other posts...
        </h1>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center">
          {otherBlogData.map((blog) => (
            <li key={blog.title} className="w-fit p-4 flex rounded-md border gap-2">
              <div className="flex flex-col justify-between gap-4">
                <div className="text-sm flex gap-2">
                  <span className="text-neutral-500 font-medium">
                    {blog.date}
                  </span>
                  |<span className="text-blue-600">{blog.topic}</span>
                </div>
                <span className="font-medium">{blog.title}</span>
                <button className="w-fit px-4 py-2 bg-yellow-200 hover:bg-yellow-500 rounded-md justify-self-end">
                  Read
                </button>
              </div>
              <img src={blog.img} alt="img" className="h-32 rounded-xl" />
            </li>
          ))}
        </ul>
        <button className="w-fit px-4 py-2 border border-blue-400 bg-blue-100 hover:bg-blue-200 rounded-md mx-auto">
          Load More Blogs...
        </button>
      </div>
    </div>
  );
};

export default BlogPage;

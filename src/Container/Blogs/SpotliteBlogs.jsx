import React, { useEffect } from "react";
import { hero } from "../../assets";
import { FaEye } from "react-icons/fa";

function SpotliteBlogs() {
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

  const fetchTopBlogs = async () => {
    const query = `
      query {
        user(username: "arkainfotech") {
          publications(first: 1) {
            edges {
              node {
                posts(first: 100) { // Fetch enough blogs to sort
                  edges {
                    node {
                      title
                      slug
                      views
                      coverImage {
                        url
                      }
                      publishedAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
  
    const { data } = await response.json();
    const posts = data.user.publications.edges[0].node.posts.edges;
  
    // Sort posts by views (descending) and pick top 6
    const topBlogs = posts
      .sort((a, b) => b.node.views - a.node.views)
      .slice(0, 6);
  
    console.log("Top 6 Blogs by Views:", topBlogs);
    return topBlogs;
  };

  useEffect(() => {
    fetchTopBlogs();
  }, [])

  return (
    <div className="w-full bg-slate-50">
      <div className="main-container px-4 py-16">
        <h1 className="text-3xl sm:text-5xl font-medium">Spotlight Blogs</h1>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-12 lg:gap-24 mx-0 sm:mx-8 my-16">
          {trendingBlogsData.map((blog, i) => (
            <li
              key={i}
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
  );
}

export default SpotliteBlogs;

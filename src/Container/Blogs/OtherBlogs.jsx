import React, { useEffect, useState } from "react";

function OtherBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endCursor, setEndCursor] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const returnTopic = (slug) => {
    const topics = [
      {
        topic: "nextjs",
        title: "Next.js",
      },
      {
        topic: "flutter",
        title: "Flutter",
      },
      {
        topic: "mern",
        title: "MERN Stack",
      },
    ];
    // slug = "progressive-web-apps-pwa-with-nextjs-how-to-build-one"
    const matchedTopic = topics.find((topic) =>
      slug.toLowerCase().includes(topic.topic)
    );
    return matchedTopic ? matchedTopic.title : "General";
  };

  const convertInDDMMYYYY = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB").split("/").join("-");
  };

  const fetchBlogs = async (cursor = null) => {
    const startTime = Date.now();
    setIsLoading(true);
    const query = `
      query {
        user(username: "arkainfotech") {
          publications(first: 1) {
            edges {
              node {
                posts(first: 9, after: ${cursor ? `"${cursor}"` : null}) {
                  edges {
                    node {
                      title
                      subtitle
                      slug
                      coverImage {
                        url
                      }
                      publishedAt
                      views
                      author {
                        username
                        name
                      }
                    }
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
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
    const posts = data.user.publications.edges[0].node.posts;
    setBlogs((prevBlogs) => {
      const newBlogs = posts.edges.filter(
        (newBlog) =>
          !prevBlogs.some(
            (existingBlog) => existingBlog.node.slug === newBlog.node.slug
          )
      );
      return [...prevBlogs, ...newBlogs];
    });
    setEndCursor(posts.pageInfo.endCursor);
    setHasNextPage(posts.pageInfo.hasNextPage);
    setIsLoading(false);

    const endTime = Date.now();
    const laodTime = (endTime - startTime) / 1000;
    console.log(`Data loaded in ${laodTime.toFixed(2)} seconds.`);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

//   console.log(blogs);

  return (
    <div className="main-container px-4 py-16 flex flex-col gap-16">
      <h1 className="text-3xl sm:text-5xl font-medium">
        Checkout our other posts...
      </h1>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 justify-items-center">
        {blogs.map((blog, i) => (
          <li
            key={i}
            className="w-full md:w-fit p-4 flex justify-between rounded-md border gap-2"
          >
            <div className="flex flex-col justify-between gap-4">
              <div className="text-sm flex gap-2">
                <span className="text-neutral-500 font-medium">
                  {convertInDDMMYYYY(blog.node?.publishedAt)}
                </span>
                |
                <span className="text-blue-600">
                  {returnTopic(blog.node?.slug)}
                </span>
              </div>
              <span className="font-medium">{blog.node?.title}</span>
              <a 
              href={`https://arkainfotech.hashnode.dev/${blog.node.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-4 py-2 bg-yellow-200 hover:bg-yellow-500 rounded-md justify-self-end">
                Read
              </a>
            </div>
            <img
              src={blog.node?.coverImage?.url}
              alt="img"
              className="h-32 w-40 rounded-xl"
            />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button
          onClick={() => fetchBlogs(endCursor)}
          disabled={isLoading}
          className="w-fit px-4 py-2 border border-blue-400 bg-blue-100 hover:bg-blue-200 rounded-md mx-auto"
        >
          {isLoading ? "Loading..." : "Load More Blogs..."}
        </button>
      )}
    </div>
  );
}

export default OtherBlogs;

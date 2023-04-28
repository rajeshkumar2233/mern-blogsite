import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

const Blogs = () => {
  const URL = "https://mernblogbackend-2rv0.onrender.com";
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    const res = await axios.get(`${URL}/api/blog`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
    });
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <BlogCard
            key={index}
            myid={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;

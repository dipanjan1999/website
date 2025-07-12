import React from "react";
import "./Blogs.css";

const blogs = [
  {
    title: "Unleashing AI in Everyday Life",
    description: "Discover how artificial intelligence is subtly shaping our routines and revolutionizing industries.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYbkWhPKDBmXSVYeBId1tqdLEkFiFTETuOA&s",
  },
  {
    title: "Top 10 Python Libraries in 2025",
    description: "A curated list of powerful libraries every developer should keep an eye on this year.",
    image: "https://guptadeepak.com/content/images/size/w2000/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp",
  },
  {
    title: "The Future is Modular",
    description: "Why modular systems are becoming a staple in sustainable and scalable product design.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s",
  },
];

const Blogs = () => {
  return (
    <div>
       <section className="minimal-hero">
        <div className="minimal-container">
          <div className="minimal-content">
            <h1>Insights & Innovation</h1>
            <p>
              Explore timeless ideas, mindful technology, and thoughtful design — curated for the curious.
            </p>
          </div>
        </div>
      </section>

      <section className="blogs-section">
        <div className="blogs-container">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <button className="btn secondary-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;

import PropTypes from "prop-types";
import BlogCard from "./BlogCard";
import "./Blogs.css";
function BlogList({ blogs }) {
  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          description={blog.description}
          imageUrl={blog.imageUrl}
        />
      ))}
    </div>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogList;

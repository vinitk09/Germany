import PropTypes from "prop-types";
import "./Blogs.css";
function BlogCard({ title, description, imageUrl }) {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="know-more">Know More</button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default BlogCard;

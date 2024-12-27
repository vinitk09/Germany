import React from "react";
import "./image-dimensions.css";

export function ResponsiveImage({ src, alt, className = "" }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className={`responsive-image ${className}`} />
    </div>
  );
}

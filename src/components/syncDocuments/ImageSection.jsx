import "./SyncDocuments.css";
import sd from "../../assets/SyncDocuments/SyncDocuments.png";
export function ImageSection() {
  return (
    <div className="image-container">
      <img
        src={sd}
        alt="Strategic Planning Illustration"
        className="side-image"
      />
    </div>
  );
}

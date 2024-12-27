import { Button } from "react-bootstrap";
import "./SyncDocuments.css";
export function Heading() {
  return (
    <div className="heading-container">
      <h1 className="heading">Sync All Documents in the Cloud</h1>
      <ul className="bullet-points">
        <li>Discover Universities and courses</li>
        <li>Ask doubts and interact with the community</li>
        <li>Latest study abroad news and updates</li>
        <li>Track applications and offers</li>
        <li>And a lot more</li>
      </ul>
      <Button
        className="cta-button"
        onClick={() => console.log("Button clicked")}
      >
        Get Started
      </Button>
    </div>
  );
}

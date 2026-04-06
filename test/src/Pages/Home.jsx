import { useState } from "react";
import SubwayMap from "../Components/SubwayMap";
import "./Home.css";

export default function Home() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = () => {
    console.log(start, end);
  };

  return (
    <div className="map-container">

      {/* 📍 Floating input box */}
      <div className="route-box">
        <input
          placeholder="Start location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <input
          placeholder="Destination"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Find Route
        </button>
      </div>

      {/* 🗺️ Full map behind everything */}
      <SubwayMap activeLines={[]} />
    </div>
  );
}
import { useState } from "react";
import stationData from "./Stations/BarclaysCenter";
import { matchCar } from "./Components/TrainCar";

export default function App() {
  const [fromLine, setFromLine] = useState("");
  const [toLine, setToLine] = useState("");
  const [direction, setDirection] = useState("");

  const result =
    fromLine && toLine && direction
      ? matchCar(stationData, fromLine, toLine, direction)
      : null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Subway Car Finder</h1>

      {/* From Line */}
      <select onChange={(e) => setFromLine(e.target.value)}>
        <option value="">From Line</option>
        <option value="D">D</option>
        <option value="N">N</option>
        <option value="R">R</option>
        <option value="B">B</option>
        <option value="Q">Q</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      {/* To Line */}
      <select onChange={(e) => setToLine(e.target.value)}>
        <option value="">To Line</option>
        <option value="D">D</option>
        <option value="N">N</option>
        <option value="R">R</option>
        <option value="B">B</option>
        <option value="Q">Q</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      {/* Direction */}
      <select onChange={(e) => setDirection(e.target.value)}>
        <option value="">Direction</option>
        <option value="uptown">Uptown</option>
        <option value="downtown">Downtown</option>
      </select>

      {/* Result */}
      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Best Car: {result.bestCar}</h2>
          <p>{result.reason}</p>
        </div>
      )}
    </div>
  );
}
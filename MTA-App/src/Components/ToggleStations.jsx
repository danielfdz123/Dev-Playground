import "./ToggleStations.css";

export default function ToggleStations({ activeLine, setActiveLine }) {

    function eighthAveLines() 
    {
        const lines = ["ALL", "A", "C", "E"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function sixthAveLines() 
    {
        const lines = ["ALL", "B", "D", "F", "M"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    return (
        <div className = "toggleDiv">

            {/* A/C/E lines */}
            <div className = "row">
                <button className = "lineColor blue" onClick = {eighthAveLines} />

                <span className = "subwayLine">
                    <span className={activeLine === "A" || activeLine === "ALL" ? "activeText" : ""}>A</span>/{""}
                    <span className={activeLine === "C" || activeLine === "ALL" ? "activeText" : ""}>C</span>/{""}
                    <span className={activeLine === "E" || activeLine === "ALL" ? "activeText" : ""}>E</span>
                </span>
            </div>

            {/* B/D/F/M */}
            <div className="row">
                <button className="lineColor orange" onClick={sixthAveLines} />
                <span className="subwayLine">
                    <span className={activeLine === "B" || activeLine === "ALL" ? "activeText" : ""}>B</span>/{""}
                    <span className={activeLine === "D" || activeLine === "ALL" ? "activeText" : ""}>D</span>/{""}
                    {/* <span className={activeLine === "F" || activeLine === "ALL" ? "activeText" : ""}>F</span>/{""}
                    <span className={activeLine === "M" || activeLine === "ALL" ? "activeText" : ""}>M</span> */}
                </span>
            </div>
        </div>
    );
}
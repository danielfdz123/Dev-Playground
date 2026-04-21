import "./ToggleStations.css";

export default function ToggleStations({ activeLine, setActiveLine }) {

    function eighthAveLines() 
    {
        const lines = ["A", "C", "E", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function sixthAveLines() 
    {
        const lines = ["B", "D", "F", "M", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function broadwayLines() 
    {
        const lines = ["N", "Q", "R", "W", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function shuttleLines() 
    {
        const lines = ["S", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function nassauLines() 
    {
        const lines = ["J", "Z", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function crosstown() 
    {
        const lines = ["G", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function canarsie() 
    {
        const lines = ["L", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    function seventhAveLines() 
    {
        const lines = ["1", "2", "3", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

     function lexingtonLines() 
    {
        const lines = ["4", "5", "6", "ALL"];
        const currentIndex = lines.indexOf(activeLine);
        const nextIndex = (currentIndex + 1) % lines.length;
        setActiveLine(lines[nextIndex]);
    }

    return (
        <div className = "toggleDiv">

            {/* 1/2/3 lines */}
            <div className="row">
                <button className="lineColor red" onClick={seventhAveLines} />
                <span className="subwayLine">
                    <span className={activeLine === "1" || activeLine === "ALL" ? "activeText" : ""}>1</span>/{""}
                    <span className={activeLine === "2" || activeLine === "ALL" ? "activeText" : ""}>2</span>/{""}
                    <span className={activeLine === "3" || activeLine === "ALL" ? "activeText" : ""}>3</span>{""}
                </span>
            </div>

            {/* 4/5/6 lines */}
            <div className="row">
                <button className="lineColor green" onClick={lexingtonLines} />
                <span className="subwayLine">
                    <span className={activeLine === "4" || activeLine === "ALL" ? "activeText" : ""}>4</span>/{""}
                    <span className={activeLine === "5" || activeLine === "ALL" ? "activeText" : ""}>5</span>/{""}
                    <span className={activeLine === "6" || activeLine === "ALL" ? "activeText" : ""}>6</span>{""}
                </span>
            </div>

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
                    <span className={activeLine === "F" || activeLine === "ALL" ? "activeText" : ""}>F</span>/{""}
                    <span className={activeLine === "M" || activeLine === "ALL" ? "activeText" : ""}>M</span>
                </span>
            </div>

            {/* N/Q/R/W */}
            <div className="row">
                <button className="lineColor yellow" onClick={broadwayLines} />
                <span className="subwayLine">
                    <span className={activeLine === "N" || activeLine === "ALL" ? "activeText" : ""}>N</span>/{""}
                    <span className={activeLine === "Q" || activeLine === "ALL" ? "activeText" : ""}>Q</span>/{""}
                    <span className={activeLine === "R" || activeLine === "ALL" ? "activeText" : ""}>R</span>/{""}
                    <span className={activeLine === "W" || activeLine === "ALL" ? "activeText" : ""}>W</span>
                </span>
            </div>

            {/* J/Z */}
            <div className="row">
                <button className="lineColor brown" onClick={nassauLines} />
                <span className="subwayLine">
                    <span className={activeLine === "J" || activeLine === "ALL" ? "activeText" : ""}>J</span>/{""}
                    <span className={activeLine === "Z" || activeLine === "ALL" ? "activeText" : ""}>Z</span>{""}
                </span>
            </div>

            {/* G */}
            <div className="row">
                <button className="lineColor light-green" onClick={crosstown} />
                <span className="subwayLine">
                    <span className={activeLine === "G" || activeLine === "ALL" ? "activeText" : ""}>G</span>{""}
                </span>
            </div>

            {/* L */}
            <div className="row">
                <button className="lineColor grey" onClick={canarsie} />
                <span className="subwayLine">
                    <span className={activeLine === "L" || activeLine === "ALL" ? "activeText" : ""}>L</span>{""}
                </span>
            </div>

            {/* S */}
            <div className="row">
                <button className="lineColor grey" onClick={shuttleLines} />
                <span className="subwayLine">
                    <span className={activeLine === "S" || activeLine === "ALL" ? "activeText" : ""}>S</span>{""}
                </span>
            </div>
        </div>
    );
}
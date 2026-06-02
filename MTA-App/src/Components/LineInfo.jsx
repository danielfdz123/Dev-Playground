import { useState } from "react";
import { SubwayLines, A, rockaway_A, lefferts_A, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";

import "./LineInfo.css";

// Specifies amount of train cars per line
const carLengthPerLine = {
    2: ["S_FranklinAv"],
    4: ["S_FarRock"],
    5: ["G"],
    6: ["S"],
    8: ["B", "C", "J", "L", "M", "Z"],
    10: ["1", "2", "3", "4", "5", "6", "A", "D", "E", "F", "N", "Q", "R", "W"],
    11: ["7"],
};

// Gets train length
function getCarLength(activeLine) {

    for (const carLength in carLengthPerLine) {

        if (carLengthPerLine[carLength].includes(activeLine)) 
        {
            return carLength;
        }
    }
    return 0;
}

// Gets list of stops per line
function getStops(activeLine) {

    // ALL A-Train stops
    if (activeLine === "A") 
    {
        return [...A, ...rockaway_A, ...lefferts_A];
    }

    // Stops of the 42nd Street Shuttle
    if (activeLine === "S") 
    {
        return S_42ndStreet;
    }

    // Stops of the Franklin Ave Shuttle
    else if (activeLine === "S_FranklinAv") 
    {
        return FranklinAv_S;
    }

    // Stops of the Far Rockaway Shuttle
    else if (activeLine === "S_FarRock") 
    {
        return Rockaway_S;
    }

    // Stops of all other train lines
    return SubwayLines[activeLine] || [];
}

// Gets transfers for all lines
function getTransferLines(stationId, activeLine) {
    const allLines = {
        A: [...A, ...rockaway_A, ...lefferts_A],
        S: S_42ndStreet,
        S_FranklinAv: FranklinAv_S,
        S_FarRock: Rockaway_S,
        ...SubwayLines,
    };

    // Will hold all transfers in the system
    const transfers = [];

    for (const line in allLines) 
    {
        // Get ALL stations for a set line
        const stations = allLines[line];
        
        // Checks for stations with the same ID
        const hasSameID = stations.some((station) => station.id === stationId);

        // CASE: Any duplicate A branch names will not be shown
        const blockedLines = ["A ~ Far Rockaway", "A ~ Lefferts Blvd"];

        // If consitions are met, a line will be added as a transfer to said line
        if(hasSameID && line !== activeLine && !blockedLines.includes(line)) 
        {
            transfers.push(line.includes("A ~") ? "A" : line);
        }
    }

    return [...new Set(transfers)];
}

export default function LineInfo({ activeLine }) {

    // Hide component in ALL mode
    if (activeLine === "ALL") 
    {
        return null;
    }

    {/* GETS ALL STATION NAMES depending on the toggled line */}
    const stationName = getStops(activeLine);
    

    {/* # OF STOPS/CARS INFORMATION depending on the toggled line*/}
    const carLength = getCarLength(activeLine);

    {/* GETS FIRST/LAST STOP INFORMATION */}
    const firstStop = stationName[0]?.name || "";
    let lastStop = stationName[stationName.length - 1]?.name || "";

        {/* CASE: A-Train has 2 terminal points in the downtown direction; name is adjusted here */}
        if (activeLine === "A") 
        {
            lastStop = "Ozone Park/Far Rockaway";
        }

    {/* Toggles direction */}
    const [direction, setDirection] = useState("downtown");
    let displayedStops = direction === "downtown" ? [...stationName] : [...stationName].reverse();
    
    // Aqueduct Racetrack on the (A) is the an "uptown only" station.
    if (activeLine === "A" && direction === "downtown") 
    {
        displayedStops = displayedStops.filter((station) => station.name !== "Aqueduct Racetrack");
    }

    const stopCount = displayedStops.length;
    const destination = direction === "uptown" ? firstStop : lastStop;
    
    {/* Gives bullet a color when displaying stops */}
    function getBulletColor(activeLine) {
        if (["A", "C", "E"].includes(activeLine)) return "#0039A6";
        if (["B", "D", "F", "M"].includes(activeLine)) return "#FF6319";
        if (["N", "Q", "R", "W"].includes(activeLine)) return "#FFCC00";
        if (["J", "Z"].includes(activeLine)) return "#8E5C33";
        if (["1", "2", "3"].includes(activeLine)) return "#D82233";
        if (["4", "5", "6"].includes(activeLine)) return "#009952";
        if (activeLine === "7") return "#9A38A1";
        if (activeLine === "G") return "#6CBE45";
        if (["L", "S", "S_FranklinAv", "S_FarRock"].includes(activeLine)) return "#808183";
    }

    return (
        <>
            <div className = "lineInfoDiv">
                <img className = "trainLineImg" src={`/images/${activeLine}.png`} alt={`${activeLine} bullet`} />
                <div>
                    <p className = "lineInfoText"> 📍 {destination} <br/> 🚉 {stopCount} Stops | {carLength} cars</p>
                    <div className = "directionDiv">
                        <p className = "directionText"> ↕️ </p>

                        {/* Uptown Button */}
                            <button 
                                className = {direction === "uptown" ? "directionButton activeDirection" : "directionButton"} 
                                onClick={() => setDirection("uptown")}> Uptown 
                            </button>

                        {/* Downtown Button */}
                            <button 
                                className = {direction === "downtown" ? "directionButton activeDirection" : "directionButton"} 
                                onClick={() => setDirection("downtown")}> Downtown 
                            </button>
                    </div>
                </div>
            </div>

            {/* Shows all stops for a specified subway line */}
            <div className = "lineStopsDiv">
                {displayedStops.map((station, index) => (
                    <div className = "horizontalDiv" key={`${station.name}-${index}`}>
                        <div>
                            <p className = "bulletPoints" style = {{color: getBulletColor(activeLine)}}> ⦿ </p>
                        </div>

                        <div>
                            <p className = "stationName"> {station.name} </p>
                        </div>

                        <div className = "stationTransfers">

                            {/* CASE: Big stations show MTA logo instead of x amount of subway logos... which go off the div container */}
                            {["42ndStreet", "Barclays", "MedgarEvers"].includes(station.id) ? (
                                <img src = "/images/MTA.png"/> 
                                
                            ) : (
                                getTransferLines(station.id, activeLine).map((line) => (
                                    <img src = {`/images/${line}.png`} />
                                ))
                            )}  
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
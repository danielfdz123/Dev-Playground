import { useState } from "react";
import { SubwayLines, A, rockaway_A, lefferts_A, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";

import "./RouteResults.css";

export default function RouteResults({ routeResult })
{
    const [showStops, setShowStops] = useState(false);
    // Nothing happens
    if(!routeResult)
    {
        return null;
    }

    // Base Info (durect routes)
    const startLine = routeResult.startLine;                // Line (F)
    const startStation = routeResult.startStation;          // Station: Jamaica 179 St
    const destination = routeResult.destinationStation;     // Station: Coney Island
    const direction = routeResult.direction                 // Coney Island Bound F train
    const stops = routeResult.stops;                        // [Jamaica 179 -> 169 St -> ..... -> Coney Island]
    const tripDuration = routeResult.tripDuration           // Duration: 97 Min


    const stopCount = stops.length + 1;
    // Converts trip time to hours if necessary
    function calculateTripTime(tripTime)
    {
        let hours = Math.floor(tripTime / 60);
        let minutes = tripTime % 60;
        if(hours === 0)
        {
            return `${minutes} min`;
        }
        else
        {
            return `${hours} hr ${minutes} min`;
        }
        
    }

    function calculateStopCount(stopCount)
    {
        if(stopCount === 1)
        {
            return "Non-Stop";
        }
        return `${stopCount} Stops`;    
    }

    {/* Gives bullet a color when displaying stops */}
    function getBulletColor(startLine) {
        if (["A", "C", "E"].includes(startLine)) return "#0039A6";
        if (["B", "D", "F", "M"].includes(startLine)) return "#FF6319";
        if (["N", "Q", "R", "W"].includes(startLine)) return "#FFCC00";
        if (["J", "Z"].includes(startLine)) return "#8E5C33";
        if (["1", "2", "3"].includes(startLine)) return "#D82233";
        if (["4", "5", "6"].includes(startLine)) return "#009952";
        if (startLine === "7") return "#9A38A1";
        if (startLine === "G") return "#6CBE45";
        if (["L", "S", "S_FranklinAv", "S_FarRock"].includes(startLine)) return "#808183";
    }

    function getTransferLines(stationId, startLine) {
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
            if(hasSameID && line !== startLine && !blockedLines.includes(line)) 
            {
                transfers.push(line.includes("A ~") ? "A" : line);
            }
        }
    
        return [...new Set(transfers)];
    }

    {/* Gives bullet a color when displaying stops */}
    function getBulletColor(startLine) {
        if (["A", "C", "E"].includes(startLine)) return "#0039A6";
        if (["B", "D", "F", "M"].includes(startLine)) return "#FF6319";
        if (["N", "Q", "R", "W"].includes(startLine)) return "#FFCC00";
        if (["J", "Z"].includes(startLine)) return "#8E5C33";
        if (["1", "2", "3"].includes(startLine)) return "#D82233";
        if (["4", "5", "6"].includes(startLine)) return "#009952";
        if (startLine === "7") return "#9A38A1";
        if (startLine === "G") return "#6CBE45";
        if (["L", "S", "S_FranklinAv", "S_FarRock"].includes(startLine)) return "#808183";
    }
    return (
        <>
            <div>
                <div className = "routeInfoDiv">
                    <p className = "routeInfoText">
                        🕑 {calculateTripTime(tripDuration)}
                    </p>
                </div>

                <div className = "startInfoDiv">
                    <img className = "trainLineImg" src={`/images/${startLine}.png`} alt={`${startLine} bullet`} />
                    ➡️ <b> {direction} </b>
                </div>

                {/* Connects start, middle stops, and destination with one vertical line */}
                <div className = "routeLineDiv" style = {{"--routeColor": getBulletColor(startLine)}}>
                    <div className = "routeLineContent">

                        {/* Start station */}
                        <div className = "startStuff">
                            <div>
                                <p className = "startBullet" style = {{color: getBulletColor(startLine)}}> ⦿ </p>
                            </div>

                            <div>
                                <p className = "userInputStations"> {startStation} </p>
                            </div>
                        </div>

                        {/* Hides button if the destination is the next stop over */}
                        {stopCount === 1 ? (
                            <p className = "stopsDropdownButton"> • {calculateTripTime(tripDuration)} {`(${calculateStopCount(stopCount)})`} </p>
                        ) : (
                            <button className = "stopsDropdownButton" onClick = {() => setShowStops(!showStops)}>
                                <span className = {showStops ? "dropdownArrow open" : "dropdownArrow"}> ❯ </span> {calculateTripTime(tripDuration)} {`(${calculateStopCount(stopCount)})`}
                            </button>
                        )}

                        {/* Shows all the stops in between the start and destination */}
                        {showStops && (
                            <div className = "stopList">
                                <div className = "routeStopsDiv">
                                    {stops.map((station, index) => (
                                        <div className = "horizontalDiv" key={`${station.name}-${index}`}>
                                            <div>
                                                <p className = "bulletPoints" style = {{color: getBulletColor(startLine)}}> ⦿ </p>
                                            </div>

                                            <div>
                                                <p className = "stopName">
                                                    {station.name} <span> (+{station.minutesFromStart} min)</span>
                                                </p>
                                            </div>

                                            <div className = "stationTransfers">
                                                {/* CASE: Big stations show MTA logo instead of x amount of subway logos */}
                                                {["42ndStreet", "Barclays", "MedgarEvers"].includes(station.id) ? (
                                                    <img src = "/images/MTA.png" /> 
                                                ) : (
                                                getTransferLines(station.id, startLine).map((line) => (
                                                   <img key={line} src = {`/images/${line}.png`} />
                                                )))}  
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Destination station */}
                        <div className = "destinationStuff">
                            <div>
                                <p className = "startBullet" style = {{color: getBulletColor(startLine)}}> ⦿ </p>
                            </div>

                            <div>
                                <p className = "userInputStations"> {destination} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
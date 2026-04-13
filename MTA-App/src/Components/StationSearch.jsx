import { useState } from "react";
import { SubwayLines, A } from "../Data/SubwayLines";
import "./StationSearch.css"


// This function gets all the stops for each subway line and puhses them into an array
function getAllStations()
{
    // Sets up empty of all stations with their transfers
    const stationGroups = {};

    for(const line in SubwayLines)
    {
        const stations = SubwayLines[line];
        for(const station of stations)
        {
            const stationName = station.name;
            const stationId = station.id;

            // Removing duplicated A train stops from displaying in thge search engine
            let displayedLine = line;
            if((line === "A ~ Lefferts Blvd" || line === "A ~ Far Rockaway") && A.some(aStop => aStop.id === stationId))
            {
                displayedLine = "A";
            }

            // Grouping subway stations together so we dont see Penn Station various times, but now just once
            const groupId = stationId;
            if(!stationGroups[groupId])
            {
                stationGroups[groupId] = {
                    stops: [],
                    lines: [],
                };
            }

            // Creates a group and adds subway line & station name to each, avoiding duplicates for all
            if (!stationGroups[groupId].stops.includes(stationName))
            {
                stationGroups[groupId].stops.push(stationName);
            }

            if (!stationGroups[groupId].lines.includes(displayedLine))
            {
                stationGroups[groupId].lines.push(displayedLine);
            }
        }
    }

    // Sets up display and output for stations with one or more transfer points
    const subwayStations = Object.values(stationGroups).map((group) => ({
        stop: group.stops[0],
        stops: group.stops,
        lines: group.lines,
        display: `(${group.lines.join(", ")}) ${group.stops.join(" / ")}`
    }));
    return subwayStations;
}

//Removes text like spaces, dashes, slashes to help the user find their desired train station better
function prepareText(text)
{
    return text
        .toLowerCase()
        .replaceAll(" ", "")
        .replaceAll("-", "")
        .replaceAll("/", "")
}

//Using the changed text via the prepareText function, we now go through the list of all stations to display those with matching letters
function getMatchingStations(userInput, stations)
{
    const searchText = prepareText(userInput);

    // Nothing shows in the searchBox if there is nothing in there
    if(searchText === "")
    {
        return [];
    }

    // Shows all relevant matches to the user input
    const matchText = [];
    for(const station of stations)
    {
        let matchFound = false;
        for(const stopName of station.stops)
        {
            const displayStation = prepareText(stopName);
            if(displayStation.includes(searchText))
            {
                matchFound = true;
                break;
            }
        }
        if(matchFound)
        {
            matchText.push(station);
        }
    }
    return matchText;
}
const subwayStations = getAllStations();


export default function StationSearch()
{
    const [startStation, setStartStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const startStationMatches = getMatchingStations(startStation, subwayStations);
    const destinationStationMatches = getMatchingStations(destinationStation, subwayStations);

    // Start Station user input box
    function showStart(station)
    {
        setStartStation(station.display);
    }

    // Destination Station user input box
    function showDestination(station)
    {
        setDestinationStation(station.display);
    }

    // Debugging
    function handleSearch() 
    {
        console.log("Start:", startStation);
        console.log("Destination:", destinationStation);
    }

    return (
        <div className = "searchDiv">
            {/* Manages the Starting Station & shows results relevant to the search */}
            <div className = "stationInput">
                <input
                    type = "text"
                    value = {startStation}
                    onChange = {(event) => setStartStation(event.target.value)}
                    placeholder = "Enter Starting Station"
                />

                {startStation !== "" && startStationMatches.length > 0 && (
                    <div className = "suggestionDiv">
                        {startStationMatches.map((station, index) => (
                        <div className = "suggestedStation" key={index} onClick={() => showStart(station)}>
                            {station.display}
                        </div>
                        ))}
                    </div>
                    )}
            </div>
            {/* Manages the Destination Station & shows results relevant to the search */}
            <div className = "stationInput">
                <input
                    type = "text"
                    value = {destinationStation}
                    onChange = {(event) => setDestinationStation(event.target.value)}
                    placeholder = "Enter Destination Station"
                />

                {destinationStation !== "" && destinationStationMatches.length > 0 && (
                    <div className = "suggestionDiv">
                        {destinationStationMatches.map((station, index) => (
                        <div
                            key={index}
                            className = "suggestedStation"
                            onClick={() => showDestination(station)}
                        >
                        {station.display}
                        </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Search button that allows us to process the search and get the results we need */}
            <button className = "searchButton" onClick = {handleSearch}>
                Find Route
            </button>
        </div>
    );
}
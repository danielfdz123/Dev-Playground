import { useState } from "react";
import { SubwayLines } from "../Data/SubwayLines";
import "./StationSearch.css"


// This function gets all the stops for each subway line and puhses them into an array
function getAllStations()
{
    // Sets up empty array
    const subwayStations = [];
    for(const line in SubwayLines)
    {
        const stations = SubwayLines[line]
        for(const station of stations)
        {
            // Sets display to show something like so for all lines/stops -- '(F) Rockefeller Center'
            subwayStations.push({line, stop: station, display: `(${line}) ${station}`,});
        }
    }
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
        const stationName = prepareText(station.stop);
        if(stationName.includes(searchText))
        {
            matchText.push(station)
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
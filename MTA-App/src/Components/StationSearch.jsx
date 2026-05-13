import { useState } from "react";
import { SubwayLines, A, rockaway_A, lefferts_A, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";
import "./StationSearch.css"

// Gets all subway lines/stations
function getAllStations()
{
    return {
        ...SubwayLines,
        A: [...A, ...rockaway_A, ...lefferts_A],
        S: [...S_42ndStreet, ...FranklinAv_S, ...Rockaway_S]
    };
}

// Customly groups any station with specific ID's due to the complexity of the station
function customGrouping(station, line)
{
    // Checks if station is on 42nd Street via ID
    if(station.id === "42ndStreet")
    {
        if(line === "A" || line === "C" || line === "E")
        {
            return "PortAuthority";
        }
        else if(line === "B" || line === "D" || line === "F" || line === "M"|| (line === "7" && station.name === "5 Av"))
        {
            return "BryantPark";
        }
        else if(line === "1" || line === "2" || line === "3" || line === "N" || line === "Q" || line === "R" || line === "W" || (line === "7" && station.name === "Times Sq-42 St") || line === "S")
        {
            return "TimesSquare";
        }
    }    

    // Checks if station is apart of the WTC transfer complex via ID
    if(station.id === "WTC")
    {
        if(line === "A" || line === "C")
        {
            return "ChambersST_ACE";
        }
        else if(line === "R" || line === "W" )
        {
            return "CortlandtSt_RW";
        }
        else if(line === "2" || line === "3")
        {
            return "ParkPlace_23";
        }
        else
        {
            return "WorldTradeCenter";
        }
    }    
    return station.id;
}

// Automatically group stations together by ID
function groupStationsById(SubwayLines)
{
    const stationGroups = {};

    for(const line in SubwayLines)
    {
        const stations = SubwayLines[line];
        for(const station of stations)
        {
            const stationName = station.name;
            // Starts the grouping process, first with WTC and 42 Street stations
            const groupId = customGrouping(station, line);

            // Grouping subway stations together so we dont see Penn Station various times, but now just once
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

            if(!stationGroups[groupId].lines.includes(line))
            {
                stationGroups[groupId].lines.push(line);
            }
        }
    }

    // Sets up display and output for stations with one or more transfer points
    const subwayStations = Object.values(stationGroups).map((group) => ({
        stop: group.stops[0],
        stops: group.stops,
        lines: group.lines,
        display: `(${group.lines.join("/")}) ${group.stops.join(" • ")}`
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
const allStations = getAllStations();
const subwayStations = groupStationsById(allStations);


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
import { useState } from "react";
import { SubwayLines, A, rockaway_A, lefferts_A, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";
import { getDirectRoute } from "../Logic/routeDetails";
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

// SEARCH FEATURE: Removes text like spaces, dashes, slashes to help the user find their desired train station better
function prepareText(text)
{
    return text
        .toLowerCase()
        .replaceAll(" ", "")
        .replaceAll("-", "")
        .replaceAll("/", "")
}

// SEARCH FEATURE: Using the changed text via the prepareText function, we now go through the list of all stations to display those with matching letters
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

// GROUPING: Group stations to show all stops and their transfers
function gruopStations(SubwayLines)
{
    const stationGroups = {};

    for(const line in SubwayLines)
    {
        // const stations = SubwayLines[line];
        for(const station of SubwayLines[line])
        {
            const stationName = station.name;
            // Starts the grouping process, first with WTC and 42 Street stations
            const groupID = customGrouping(station, line);

            // Grouping subway stations together so we dont see Penn Station various times, but now just once
            if(!stationGroups[groupID])
            {
                stationGroups[groupID] = 
                {
                    id: station.id,
                    displayID: groupID,
                    stops: [],
                    lines: [],
                    stopLines: {}
                };
            }

            // Creates a group and adds subway line & station name to each, avoiding duplicates for all
            if(!stationGroups[groupID].stops.includes(stationName))
            {
                stationGroups[groupID].stops.push(stationName);         // Adds station name once | stops: [] -> stops: ["Roosevelt Ave"]
            }

            if(!stationGroups[groupID].lines.includes(line))
            {
                stationGroups[groupID].lines.push(line);                // Adds train line (and all transfers if present) | lines: [] -> lines: ["E", "F", "M", "R", "7"]
            }

            if(!stationGroups[groupID].stopLines[stationName])
            {
                stationGroups[groupID].stopLines[stationName] = [];     // Adds a list for ALL individual subway stops | stopLines: {} -> stopLines: {"Roosevelt Ave": []}
            }

            if(!stationGroups[groupID].stopLines[stationName].includes(line))
            {
                stationGroups[groupID].stopLines[stationName].push(line);       // Each stop gets their corresponding | stopLines: {} -> stopLines: {"Roosevelt Ave": ["E", "F", "M", "R"], "74 St-Broadway": ["7"]}
            }
        }
    }

    return stationGroups;
}

// GROUPING: Shows search results for stations that go by 2 or more names (Ex: E/F/6 can be accessed at Lexington Av/53 St & 51 St stations)
function getSeparatedStations(stationGroups)
{
    const subwayStations = [];

    for(const group of Object.values(stationGroups))
    {
        for(const stopName of group.stops)
        {
            const mainLines = group.stopLines[stopName];
            const otherLines = group.lines.filter((line) => !mainLines.includes(line));
            const displayLines = [...mainLines, ...otherLines];

            subwayStations.push({
                id: group.id,
                displayID: group.displayID,
                stop: stopName,
                stops: [stopName],
                lines: displayLines,
                display: `(${displayLines.join("/")}) ${stopName}`
            });
        }
    }

    return subwayStations;
}

// SEQUENCE: All stations -> group via id -> seperates if station has two names (Ex: Lexington Av/53 + 51 St are the same station, serving E/F/6)
const allStations = getAllStations();
const groupedStations = gruopStations(allStations);
const subwayStations = getSeparatedStations(groupedStations);

export default function StationSearch({setRouteResult, setActiveLine})
{
    const [startStation, setStartStation] = useState("");
    const [destinationStation, setDestinationStation] = useState("");
    const startStationMatches = getMatchingStations(startStation, subwayStations);
    const destinationStationMatches = getMatchingStations(destinationStation, subwayStations);

    // Used to show the search results with the subway bullet logos since <input> doesnt naturally support images
    const [startStationSelected, setStartStationSelected] = useState(null);
    const [destinationStationSelected, setDestinationStationSelected] = useState(null);

    // Start Station user input box
    function showStart(station)
    {
        setStartStation("");
        setStartStationSelected(station);
    }

    // Destination Station user input box
    function showDestination(station)
    {
        setDestinationStation("");
        setDestinationStationSelected(station);
    }

    // Debugging
    function handleSearch() 
    {
        // Nothing happens when empty
         if(!startStationSelected || !destinationStationSelected)
        {
            setRouteResult(null);
            return;
        }

        // Using info about the start/destination, we will get all other info about the route via function call
        const route = getDirectRoute(
            startStationSelected.stop,
            startStationSelected.id,
            destinationStationSelected.stop,
            destinationStationSelected.id
        );
        setRouteResult(route);
        
        if(route)
        {
            setActiveLine("ALL");
        }
    }

    return (
        <div className = "searchDiv">
            {/* Manages the Starting Station & shows results relevant to the search */}
            <div className = "stationInput">
                <input
                    className = {startStationSelected && startStation === startStationSelected.display ? "hideInputText" : ""}
                    type = "text"
                    value = {startStation}
                    onChange = {(event) => setStartStation(event.target.value)}
                    onFocus = {() => setStartStation("")}
                    onBlur = {() => {
                        if(startStationSelected)
                        {
                            setStartStation(startStationSelected.display);
                        }
                        else
                        {
                            setStartStation("");
                        }
                    }}
                    placeholder = {startStationSelected ? "" : "Enter Starting Station"}
                />

                {startStation !== "" && startStationMatches.length > 0 && (
                    <div className = "suggestionDiv">
                        {startStationMatches.map((station, index) => (
                        <div className = "suggestedStation" key={index} onMouseDown={() => showStart(station)}>

                            {/* Shows MTA Logo if a subway station has too many line connections */}
                            {station.displayID === "TimesSquare" || station.displayID === "Barclays" || station.displayID === "MedgarEvers" || station.displayID === "HeraldSquare" ? (
                                <img className = "suggestedLineImg" src="/images/MTA.png" />
                            ) : (
                            station.lines.map((line) => (
                                <img className = "suggestedLineImg" src={`/images/${line}.png`} alt={line} />
                            )))}

                            <span className = "displayStationName"> {station.stop} </span>
                        </div>
                        ))}
                    </div>
                )}

                {startStationSelected && (
                    <div className = "selectedStation">
                        {startStationSelected.displayID === "TimesSquare" || startStationSelected.displayID === "Barclays" || startStationSelected.displayID === "MedgarEvers" || startStationSelected.displayID === "HeraldSquare" ? (
                            <img className = "suggestedLineImg" src="/images/MTA.png" />
                        ) : (
                        startStationSelected.lines.map((line) => (
                            <img className = "suggestedLineImg" src={`/images/${line}.png`} alt={line} />
                        )))}
                        <span className = "displayStationName"> {startStationSelected.stop} </span>
                    </div>
                )}
            </div>

            {/* Manages the Destination Station & shows results relevant to the search */}
            <div className = "stationInput">
                <input
                    className = {destinationStationSelected && destinationStation === destinationStationSelected.display ? "hideInputText" : ""}
                    type = "text"
                    value = {destinationStation}
                    onChange = {(event) => setDestinationStation(event.target.value)}
                    onFocus = {() => setDestinationStation("")}
                    onBlur = {() => {
                        if(destinationStationSelected)
                        {
                            setDestinationStation(destinationStationSelected.display);
                        }
                        else
                        {
                            setDestinationStation("");
                    }
                    }}
                    placeholder = {destinationStationSelected ? "" : "Enter Destination Station"}
                />

                {destinationStation !== "" && destinationStationMatches.length > 0 && (
                    <div className = "suggestionDiv">
                        {destinationStationMatches.map((station, index) => (
                        <div className = "suggestedStation" key={index} onMouseDown={() => showDestination(station)}>

                            {/* Shows MTA Logo if a subway station has too many line connections */}
                            {station.displayID === "TimesSquare" || station.displayID === "Barclays" || station.displayID === "MedgarEvers" || station.displayID === "HeraldSquare" ? (
                                <img className = "suggestedLineImg" src="/images/MTA.png" />
                            ) : (
                            station.lines.map((line) => (
                                <img className = "suggestedLineImg" src={`/images/${line}.png`} alt={line} />
                            )))}
                            <span className = "displayStationName"> {station.stop} </span>
                        </div>
                        ))}
                    </div>
                )}

                {destinationStationSelected && (
                    <div className = "selectedStation">
                        {destinationStationSelected.displayID === "TimesSquare" || destinationStationSelected.displayID === "Barclays" || destinationStationSelected.displayID === "MedgarEvers" || destinationStationSelected.displayID === "HeraldSquare" ? (
                            <img className = "suggestedLineImg" src="/images/MTA.png" />
                        ) : (
                        destinationStationSelected.lines.map((line) => (
                            <img className="suggestedLineImg" src={`/images/${line}.png`} alt={line} />
                        )))}
                        <span className = "displayStationName"> {destinationStationSelected.stop} </span>
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
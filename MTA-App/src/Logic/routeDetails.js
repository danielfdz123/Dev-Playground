import { SubwayLines, A, rockaway_A, lefferts_A, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";

// Gets all stops per lines
function getStops(activeLine)
{
    // ALL A-Train stops
    if(activeLine === "A")
    {
        return [...A, ...rockaway_A, ...lefferts_A];
    }

    // 42nd Street Shuttle
    if(activeLine === "S")
    {
        return S_42ndStreet;
    }

    // Franklin Shuttle
    if(activeLine === "S_FranklinAv")
    {
        return FranklinAv_S;
    }

    // Rockaway Shuttle
    if(activeLine === "S_FarRock")
    {
        return Rockaway_S;
    }

    // Other train lines
    return SubwayLines[activeLine] || [];
}

function formatSubwayLines(line)
{
    if(line === "S" || line === "S_FranklinAv" || line === "S_FarRock")
    {
        return "S";
    }

    return line;
}

// Gets travel time from station to station; returns minutes
function calculateTravelTime(line, startId, destinationId)
{
    const lineStops = getStops(line);
    const firstStop = lineStops.find((station) => station.id === startId);
    const lastStop = lineStops.find((station) => station.id === destinationId);

    return Math.abs(lastStop.min - firstStop.min);
}

// Gets direction of the train [Ex: (F) -> Coney Island; (E) -> World Trade Center]
function getDirection(line, startId, destinationId)
{
    const lineStops = getStops(line);
    const firstStop = lineStops.find((station) => station.id === startId);
    const lastStop = lineStops.find((station) => station.id === destinationId);

    // Southbound terminal
    if(lastStop.min > firstStop.min)
    {
        return lineStops[lineStops.length - 1].name;
    }
    // Northbound terminal
    else
    {
        return lineStops[0].name;
    }
}

// Returns list of all stops in between the start/destination
function getStopsBetween(line, startId, destinationId)
{
    const lineStops = getStops(line);

    // Gets index of start & destination station
    const firstIndex = lineStops.findIndex((station) => station.id === startId);
    const lastIndex = lineStops.findIndex((station) => station.id === destinationId);

    // Saves the first stop
    const firstStop = lineStops[firstIndex];

    let stopsBetween;

    // Southbound trains
    if(lastIndex > firstIndex)
    {
        stopsBetween = lineStops.slice(firstIndex +1, lastIndex);
    }
    // Northbound trains
    else
    {
        stopsBetween = lineStops.slice(lastIndex + 1, firstIndex).reverse();
    }

    // Lists all the stations in their corresponding direction
    return stopsBetween.map((stop) => ({
        ...stop,
        minutesFromStart: Math.abs(stop.min - firstStop.min)
    }));
}

// Returns all information gathered
export function getDirectRoute(startStationName, startStationID, destinationStationName, destinationID)
{
    const allLines = [
        ...Object.keys(SubwayLines), "A", "S", "S_FranklinAv", "S_FarRock"
    ];

    for(const line of allLines)
    {
        const lineStops = getStops(line);

        const hasStartStation = lineStops.some((station) => station.id === startStationID);
        const hasDestinationStation = lineStops.some((station) => station.id === destinationID);

        // Return results if a valid route is entered. Otherwise, return nothing
        if(hasStartStation && hasDestinationStation)
        {
            const startStop = lineStops.find((station) => station.id === startStationID);
            const destinationStop = lineStops.find((station) => station.id === destinationID);
            const trainBound = getDirection(line, startStationID, destinationID);
            const tripDuration = calculateTravelTime(line, startStationID, destinationID);
            const stopsInBetween = getStopsBetween(line, startStationID, destinationID);

            return {
                startLine: formatSubwayLines(line),
                startStation: startStationName,
                destinationStation: destinationStationName,
                startStop: startStop,
                destinationStop: destinationStop,
                direction: trainBound,
                tripDuration: tripDuration,
                stops: stopsInBetween
            };
        }
    }

    return null;
}
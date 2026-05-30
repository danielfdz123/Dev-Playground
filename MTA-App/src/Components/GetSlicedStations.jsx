import { MapMarker, MarkerContent, MarkerTooltip } from "@/components/UI/map";

export default function GetSlicedStations({ routeResult })
{
    // Retrieving props
    const routeStops = [
        routeResult.startStop,
        ...routeResult.stops,
        routeResult.destinationStop
    ];

    function getMarkerClass(line)
    {   
        if (["A", "C", "E"].includes(line)) return "stationMarker ACE";
        if (["B", "D", "F", "M"].includes(line)) return "stationMarker BDFM";
        if (["N", "Q", "R", "W"].includes(line)) return "stationMarker NQRW";
        if (["J", "Z"].includes(line)) return "stationMarker JZ";
        if (["1", "2", "3"].includes(line)) return "stationMarker seventhAve";
        if (["4", "5", "6"].includes(line)) return "stationMarker lexingtonAve";
        if (line === "7") return "stationMarker flushing";
        if (line === "G") return "stationMarker G";
        if (line === "L") return "stationMarker L";
        if (["S", "S_FranklinAv", "S_FarRock"].includes(line)) return "stationMarker S";
    }

    // Displays marker infromation
    return (
        <>
            {routeStops.map((station) => (
                <MapMarker key = {`${routeResult.startLine}-${station.id}-${station.name}`} longitude = {station.lon} latitude = {station.lat}>
                    <MarkerContent>
                        <div className = {getMarkerClass(routeResult.startLine)} />
                    </MarkerContent>
                    <MarkerTooltip> ({routeResult.startLine}) {station.name} </MarkerTooltip>
                </MapMarker>
            ))}
        </>
    );
}
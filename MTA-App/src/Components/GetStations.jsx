import { MapMarker, MarkerContent, MarkerTooltip } from "@/components/UI/map";
import "./GetStations.css"
import { getConnections } from "../Logic/getConnections";

// Retrieving props
export default function GetStations({
    activeLine,
    showAllStationsAtZoom,
}) 

{
    const stations = getConnections();

	function getMarkerClass(stationLines)
	{
		// ALL STATIONS
    	if (activeLine === "ALL") return "stationMarker ALL";
    	
		// Returns color of marker depending on the line toggled (to match css)
		const line = stationLines.includes(activeLine) ? activeLine : stationLines[0];
		
		if (["A", "C", "E"].includes(line)) return "stationMarker ACE";
    	if (["B", "D", "F", "M"].includes(line)) return "stationMarker BDFM";
    	if (["N", "Q", "R", "W"].includes(line)) return "stationMarker NQRW";
    	if (["J", "Z"].includes(line)) return "stationMarker JZ";
    	if (["1", "2", "3"].includes(line)) return "stationMarker seventhAve";
    	if (["4", "5", "6"].includes(line)) return "stationMarker lexingtonAve";
    	if (line === "7") return "stationMarker flushing";
    	if (line === "G") return "stationMarker G";
    	if (line === "L") return "stationMarker L";
    	if (line === "S") return "stationMarker S";

		return "stationMarker";
	}

    return (
        <>
            {stations.map((station) => {

				// Controls marker rendering depending on the toggle settings
                const shouldShow =
                    activeLine === "ALL"
                        ? showAllStationsAtZoom
                        : station.lines.includes(activeLine);

                if (!shouldShow) return null;

				// Displays marker infromation
                return (
                    <MapMarker key = {station.id} longitude={station.lon} latitude={station.lat}>
                        <MarkerContent>
                            <div className = {getMarkerClass(station.lines)} />
                        </MarkerContent>
                        <MarkerTooltip> {station.displayName} </MarkerTooltip>
                    </MapMarker>
                );
			})}    
    	</>
  	);
}
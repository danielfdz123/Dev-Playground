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
		
		if (["A", "A_Rockaway", "A_Lefferts", "C", "E"].includes(line)) return "stationMarker ACE";
    	if (["B", "D", "F", "M"].includes(line)) return "stationMarker BDFM";
    	if (["N", "Q", "R", "W"].includes(line)) return "stationMarker NQRW";
    	if (["J", "Z"].includes(line)) return "stationMarker JZ";
    	if (["1", "2", "3"].includes(line)) return "stationMarker seventhAve";
    	if (["4", "5", "6"].includes(line)) return "stationMarker lexingtonAve";
    	if (line === "7") return "stationMarker flushing";
    	if (line === "G") return "stationMarker G";
    	if (line === "L") return "stationMarker L";
    	if (["S", "S_FranklinAv", "S_FarRock"].includes(line)) return "stationMarker S";
		return "stationMarker";
	}

	function getDisplayLine(line) 
	{
        if (line === "S_FranklinAv" || line === "S_FarRock") 
		{
            return "S";
        }
		if(line === "A_Rockaway" || line === "A_Lefferts")
    	{
    	    return "A";
    	}
        return line;
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

				const stationName = station.namesByLine?.[activeLine] || station.name;
                const displayLines = [...new Set(station.transferLines.map(getDisplayLine))];

				// Displays marker infromation
                return (
				<MapMarker key = {`${station.name}-${station.lat}-${station.lon}`} longitude={station.lon} latitude={station.lat} >                        
						<MarkerContent>
                            <div className = {getMarkerClass(station.lines)} />
                        </MarkerContent>
                        <MarkerTooltip> ({displayLines.join("/")}) {stationName} {stationName === "Aqueduct Racetrack" && "*Uptown Only*"} </MarkerTooltip>
                    </MapMarker>
                );
			})}    
    	</>
  	);
}
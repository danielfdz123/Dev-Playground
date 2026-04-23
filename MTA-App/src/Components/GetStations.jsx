import { MapMarker, MarkerContent, MarkerTooltip } from "@/components/UI/map";
import "./GetStations.css"

// Retrieving props
export default function GetStations({
    activeLine,
    showAllStationsAtZoom,
    A, rockaway_A, lefferts_A,
    SubwayLines,
    S_42ndStreet, FranklinAv_S, Rockaway_S,
}) 

{
    // Gets station information
    const B_stations = SubwayLines.B || [];
    const C_stations = SubwayLines.C || [];
    const D_stations = SubwayLines.D || [];
    const E_stations = SubwayLines.E || [];
    const F_stations = SubwayLines.F || [];
    const G_stations = SubwayLines.G || [];
    const L_stations = SubwayLines.L || [];
    const M_stations = SubwayLines.M || [];
    const N_stations = SubwayLines.N || [];
    const Q_stations = SubwayLines.Q || [];
    const R_stations = SubwayLines.R || [];
    const W_stations = SubwayLines.W || [];
    const J_stations = SubwayLines.J || [];
    const Z_stations = SubwayLines.Z || [];
    const Stations_1 = SubwayLines["1"] || [];
    const Stations_2 = SubwayLines["2"] || [];
    const Stations_3 = SubwayLines["3"] || [];
    const Stations_4 = SubwayLines["4"] || [];
    const Stations_5 = SubwayLines["5"] || [];
    const Stations_6 = SubwayLines["6"] || [];
    const Stations_7 = SubwayLines["7"] || [];

    const toggled = (line) => activeLine === line || showAllStationsAtZoom;

	function getMarkerClass(routeColor) 
	{
    if (activeLine === "ALL") 
	{
        return "stationMarker ALL";
    }

    return `stationMarker ${routeColor}`;
}

    return (
        <>
            {/* A stations */}
            {toggled("A") &&
                A.map((station) => (
                    <MapMarker key = {`A-${station.id}`} longitude={station.lon} latitude={station.lat}>
                        <MarkerContent>
                            <div className = {getMarkerClass("ACE")} />
                        </MarkerContent>
                        <MarkerTooltip> (A) {station.name}</MarkerTooltip>
                    </MapMarker>
                ))
            }

            {/* A stations (Far Rockaway Branch) */}
            {toggled("A") &&
                rockaway_A.map((station) => (
                    <MapMarker key = {`A-rockaway-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("ACE")} />
            			</MarkerContent>
            			<MarkerTooltip> (A) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* A stations (Lefferts Blvd Branch) */}
            {toggled("A") &&
                lefferts_A.map((station) => (
          			<MapMarker key = {`A-lefferts-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("ACE")} />
            			</MarkerContent>
            			<MarkerTooltip> (A) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

            {/* B stations */}
			{toggled("B") &&
        		B_stations.map((station) => (
          			<MapMarker key = {`B-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("BDFM")} />
            			</MarkerContent>
            			<MarkerTooltip> (B) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

        	{/* C stations */}
			{toggled("C") &&
        		C_stations.map((station) => (
          			<MapMarker key = {`C-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("ACE")} />
            			</MarkerContent>
            			<MarkerTooltip> (C) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* D stations */}
			{toggled("D") &&
        		D_stations.map((station) => (
          			<MapMarker key = {`D-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("BDFM")} />
            			</MarkerContent>
            			<MarkerTooltip> (D) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

        	{/* E stations */}
			{toggled("E") &&
        		E_stations.map((station) => (
          			<MapMarker key = {`E-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("ACE")} />
            			</MarkerContent>
            			<MarkerTooltip> (E) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* F stations */}
			{toggled("F") &&
        		F_stations.map((station) => (
          			<MapMarker key = {`F-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("BDFM")} />
            			</MarkerContent>
            			<MarkerTooltip> (F) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* G stations */}
			{toggled("G") &&
        		G_stations.map((station) => (
          			<MapMarker key = {`G-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("G")} />
            			</MarkerContent>
            			<MarkerTooltip> (G) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* L stations */}
			{toggled("L") &&
        		L_stations.map((station) => (
          			<MapMarker key = {`L-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("L")} />
            			</MarkerContent>
            			<MarkerTooltip> (L) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* M stations */}
			{toggled("M") &&
        		M_stations.map((station) => (
          			<MapMarker key = {`M-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("BDFM")} />
            			</MarkerContent>
            			<MarkerTooltip> (M) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* N station */}
			{toggled("N") &&
        		N_stations.map((station) => (
          			<MapMarker key = {`N-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("NQRW")} />
            			</MarkerContent>
            			<MarkerTooltip> (N) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Q station */}
			{toggled("Q") &&
        		Q_stations.map((station) => (
          			<MapMarker key = {`Q-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("NQRW")} />
            			</MarkerContent>
            			<MarkerTooltip> (Q) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* R station */}
			{toggled("R") &&
        		R_stations.map((station) => (
          			<MapMarker key = {`R-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("NQRW")} />
            			</MarkerContent>
            			<MarkerTooltip> (R) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* W station */}
			{toggled("W") &&
        		W_stations.map((station) => (
          			<MapMarker key = {`W-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("NQRW")} />
            			</MarkerContent>
            			<MarkerTooltip> (W) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* J station */}
			{toggled("J") &&
        		J_stations.map((station) => (
          			<MapMarker key = {`J-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("JZ")} />
            			</MarkerContent>
            			<MarkerTooltip> (J) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Z station */}
			{toggled("Z") &&
        		Z_stations.map((station) => (
          			<MapMarker key = {`Z-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("JZ")} />
            			</MarkerContent>
            			<MarkerTooltip> (Z) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 1 station */}
			{toggled("1") &&
        		Stations_1.map((station) => (
          			<MapMarker key = {`1-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("seventhAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (1) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 2 stations */}
			{toggled("2") &&
        		Stations_2.map((station) => (
          			<MapMarker key = {`2-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("seventhAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (2) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 3 stations */}
			{toggled("3") &&
        		Stations_3.map((station) => (
          			<MapMarker key = {`3-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("seventhAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (3) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 4 stations */}
			{toggled("4") &&
        		Stations_4.map((station) => (
          			<MapMarker key = {`4-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("lexingtonAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (4) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 5 stations */}
			{toggled("5") &&
        		Stations_5.map((station) => (
          			<MapMarker key = {`5-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("lexingtonAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (5) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 6 stations */}
			{toggled("6") &&
        		Stations_6.map((station) => (
          			<MapMarker key = {`6-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("lexingtonAve")} />
            			</MarkerContent>
            			<MarkerTooltip> (6) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 7 stations */}
			{toggled("7") &&
        		Stations_7.map((station) => (
          			<MapMarker key = {`6-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = {getMarkerClass("flushing")} />
            			</MarkerContent>
            			<MarkerTooltip> (7) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 42nd Street Shuttle */}
			{toggled("S") &&
        		S_42ndStreet.map((station) => (
          			<MapMarker key = {`S-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
           	 	  			<div className = {getMarkerClass("S")} />
            			</MarkerContent>
            			<MarkerTooltip> (S) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}
			
			{/* Franklin Av Shuttle */}
        	{toggled("S") &&
				FranklinAv_S.map((station) => (
					<MapMarker key = {`S-franklinAv-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("S")} />
            			</MarkerContent>
            			<MarkerTooltip> (S) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Rockaway Shuttle */}
			{toggled("S") &&
        		Rockaway_S.map((station) => (
          			<MapMarker key = {`S-rockaway-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = {getMarkerClass("S")} />
            			</MarkerContent>
            			<MarkerTooltip> (S) {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}    
    </>
  );
}
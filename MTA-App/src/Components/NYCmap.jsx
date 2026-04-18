import { Map, MapControls, MapMarker, MapRoute, MarkerContent, MarkerTooltip } from "@/components/UI/map";
import { useState } from "react";

import { A, rockaway_A, lefferts_A, SubwayLines } from "../Data/SubwayLines";
import { S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";
import { A_Path } from "../Data/A_Path";
import { B_Path } from "../Data/B_Path";
import { C_Path } from "../Data/C_Path";
import { D_Path } from "../Data/D_Path";
import { E_Path } from "../Data/E_Path";
import { F_Path } from "../Data/F_Path";
import { G_Path } from "../Data/G_Path";
import { L_Path } from "../Data/L_Path";
import { M_Path } from "../Data/M_Path";
import { N_Path } from "../Data/N_Path";
import { Q_Path } from "../Data/Q_Path";
import { R_Path } from "../Data/R_Path";
import { W_Path } from "../Data/W_Path";
import { S_Path } from "../Data/S_Path";
import { J_Path } from "../Data/J_Path";
import { Z_Path } from "../Data/Z_Path";



import "./NYCmap.css";
import ToggleStations from "../Components/ToggleStations";

export default function NYCmap() {
	// By default, ALL lines will be shown unless toggled
	const [activeLine, setActiveLine] = useState("ALL");

	// Gets info of the pathing of each line
	const A_Line = (A_Path.A || []).map(([lat, lon]) => [lon, lat]);
	const A_RockawayLine = (A_Path.A_rockaway || []).map(([lat, lon]) => [lon, lat]);
	const A_LeffertsLine = (A_Path.A_lefferts || []).map(([lat, lon]) => [lon, lat]);
	const B_Line = (B_Path.B || []).map(([lat, lon]) => [lon, lat]);
	const C_Line = (C_Path.C || []).map(([lat, lon]) => [lon, lat]);
	const D_Line = (D_Path.D || []).map(([lat, lon]) => [lon, lat]);
	const E_Line = (E_Path.E || []).map(([lat, lon]) => [lon, lat]);
	const F_Line = (F_Path.F || []).map(([lat, lon]) => [lon, lat]);
	const G_Line = (G_Path.G || []).map(([lat, lon]) => [lon, lat]);
	const L_Line = (L_Path.L || []).map(([lat, lon]) => [lon, lat]);
	const M_Line = (M_Path.M || []).map(([lat, lon]) => [lon, lat]);
	const N_Line = (N_Path.N || []).map(([lat, lon]) => [lon, lat]);
	const Q_Line = (Q_Path.Q || []).map(([lat, lon]) => [lon, lat]);
	const R_Line = (R_Path.R || []).map(([lat, lon]) => [lon, lat]);
	const W_Line = (W_Path.W || []).map(([lat, lon]) => [lon, lat]);
	const J_Line = (J_Path.J || []).map(([lat, lon]) => [lon, lat]);
	const Z_Line = (Z_Path.Z || []).map(([lat, lon]) => [lon, lat]);

	const S_42ndStreetLine = (S_Path.S_42ndStreet || []).map(([lat, lon]) => [lon, lat]);
	const S_FranklinAvLine = (S_Path.S_FranklinAv || []).map(([lat, lon]) => [lon, lat]);
	const S_RockawayLine = (S_Path.S_Rockaway || []).map(([lat, lon]) => [lon, lat]);

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

  	return (
    	<div className = "nyc-map-wrapper">
			<ToggleStations activeLine = {activeLine} setActiveLine={setActiveLine} />
      		<Map className= "nyc-map"
        		viewport = {{center: [-73.912740, 40.734452], zoom: 11 }}
        		maxBounds = {[[-74.5, 40.4], [-73.3, 41.0]]}
        		minZoom = {10}
				>
        	<MapControls />

		{/* RENDERING ROUTES */}

			{/* A routes */}
			{(activeLine === "ALL" || activeLine === "A") && (
				<>
					<MapRoute id = "a-main" coordinates = {A_Line} color = {"#0039A6"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
        			<MapRoute id = "a-rockaway" coordinates = {A_RockawayLine} color = {"#0039A6"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
        			<MapRoute id = "a-lefferts" coordinates = {A_LeffertsLine} color = {"#0039A6"} width = {activeLine === "ALL" ? 4: 6} opacity= {1} />
				</>
			)}

			{/* B route */}
			{(activeLine === "ALL" || activeLine === "B") && (
        		<MapRoute id = "b-line" coordinates = {B_Line} color={"#FF6319"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}


        	{/* C route */}
			{(activeLine === "ALL" || activeLine === "C") && (
        		<MapRoute id = "c-line" coordinates = {C_Line} color={"#0039A6"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* D route */}
			{(activeLine === "ALL" || activeLine === "D") && (
        		<MapRoute id = "d-line" coordinates = {D_Line} color={"#FF6319"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}
				
        	{/* E route */}
			{(activeLine === "ALL" || activeLine === "E") && (
        		<MapRoute id = "e-line" coordinates = {E_Line} color = {"#0039A6"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* F route */}
			{(activeLine === "ALL" || activeLine === "F") && (
        		<MapRoute id = "f-line" coordinates = {F_Line} color = {"#FF6319"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* G route */}
			{(activeLine === "ALL" || activeLine === "ALL" || activeLine === "G") && (
        		<MapRoute id = "g-line" coordinates = {G_Line} color = {"#6CBE45"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* L route */}
			{(activeLine === "ALL" || activeLine === "L") && (
        		<MapRoute id = "l-line" coordinates = {L_Line} color = {"#818181"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* M route */}
			{(activeLine === "ALL" || activeLine === "M") && (
        		<MapRoute id = "m-line" coordinates = {M_Line} color = {"#FF6319"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* N route */}
			{(activeLine === "ALL" || activeLine === "N") && (
        		<MapRoute id = "n-line" coordinates = {N_Line} color = {"#FCCC0A"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* Q route */}
			{(activeLine === "ALL" || activeLine === "Q") && (
        		<MapRoute id = "q-line" coordinates = {Q_Line} color = {"#FCCC0A"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* R route */}
			{(activeLine === "ALL" || activeLine === "R") && (
        		<MapRoute id = "r-line" coordinates = {R_Line} color = {"#FCCC0A"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* W route */}
			{(activeLine === "ALL" || activeLine === "W") && (
        		<MapRoute id = "w-line" coordinates = {W_Line} color = {"#FCCC0A"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}
			
			{/* J route */}
			{(activeLine === "ALL" || activeLine === "J") && (
        		<MapRoute id = "j-line" coordinates = {J_Line} color = {"#8E5C33"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}

			{/* Z route */}
			{(activeLine === "ALL" || activeLine === "Z") && (
        		<MapRoute id = "z-line" coordinates = {Z_Line} color = {"#8E5C33"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
			)}
			

			{/* S routes */}
			{(activeLine === "ALL" || activeLine === "S") && (
				<>
					<MapRoute id = "s-42nd" coordinates = {S_42ndStreetLine} color = {"#818181"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
        			<MapRoute id = "s-franklinAv" coordinates = {S_FranklinAvLine} color = {"#818181"} width = {activeLine === "ALL" ? 4: 6} opacity = {1} />
        			<MapRoute id = "s-rockaway" coordinates = {S_RockawayLine} color = {"#818181"} width = {activeLine === "ALL" ? 4: 6} opacity= {1} />
				</>
			)}

		{/* RENDERING STATIONS */}
			
        	{/* A stations */}
			{(activeLine === "A") &&
        		A.map((station) => (
          			<MapMarker key = {`A-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
           	 	  			<div className="stationMarker ACE" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}
			
			{/* A stations (Far Rockaway Branch) */}
        	{(activeLine === "A") &&
				rockaway_A.map((station) => (
					<MapMarker key = {`A-rockaway-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker ACE" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* A stations (Lefferts Blvd Branch) */}
			{(activeLine === "A") &&
        		lefferts_A.map((station) => (
          			<MapMarker key = {`A-lefferts-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker ACE" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* B stations */}
			{(activeLine === "B") &&
        		B_stations.map((station) => (
          			<MapMarker key = {`B-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker BDFM" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

        	{/* C stations */}
			{(activeLine === "C") &&
        		C_stations.map((station) => (
          			<MapMarker key = {`C-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker ACE" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* D stations */}
			{(activeLine === "D") &&
        		D_stations.map((station) => (
          			<MapMarker key = {`D-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker BDFM" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

        	{/* E stations */}
			{(activeLine === "E") &&
        		E_stations.map((station) => (
          			<MapMarker key = {`E-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker ACE" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* F stations */}
			{(activeLine === "F") &&
        		F_stations.map((station) => (
          			<MapMarker key = {`F-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker BDFM" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* G stations */}
			{(activeLine === "G") &&
        		G_stations.map((station) => (
          			<MapMarker key = {`G-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker G" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* L stations */}
			{(activeLine === "L") &&
        		L_stations.map((station) => (
          			<MapMarker key = {`L-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker L" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* M stations */}
			{(activeLine === "M") &&
        		M_stations.map((station) => (
          			<MapMarker key = {`M-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker BDFM" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* N station */}
			{(activeLine === "N") &&
        		N_stations.map((station) => (
          			<MapMarker key = {`N-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker NQRW" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Q station */}
			{(activeLine === "Q") &&
        		Q_stations.map((station) => (
          			<MapMarker key = {`Q-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker NQRW" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* R station */}
			{(activeLine === "R") &&
        		R_stations.map((station) => (
          			<MapMarker key = {`R-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker NQRW" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* W station */}
			{(activeLine === "W") &&
        		W_stations.map((station) => (
          			<MapMarker key = {`W-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker NQRW" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* J station */}
			{(activeLine === "J") &&
        		J_stations.map((station) => (
          			<MapMarker key = {`J-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker JZ" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Z station */}
			{(activeLine === "Z") &&
        		Z_stations.map((station) => (
          			<MapMarker key = {`Z-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            		  		<div className = "stationMarker JZ" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* 42nd Street Shuttle */}
			{(activeLine === "S") &&
        		S_42ndStreet.map((station) => (
          			<MapMarker key = {`S-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
           	 	  			<div className="stationMarker S" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}
			
			{/* Franklin Av Shuttle */}
        	{(activeLine === "S") &&
				FranklinAv_S.map((station) => (
					<MapMarker key = {`S-franklinAv-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker S" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}

			{/* Rockaway Shuttle */}
			{(activeLine === "S") &&
        		Rockaway_S.map((station) => (
          			<MapMarker key = {`S-rockaway-${station.id}`} longitude={station.lon} latitude={station.lat}>
            			<MarkerContent>
            	  			<div className = "stationMarker S" />
            			</MarkerContent>
            			<MarkerTooltip> {station.name} </MarkerTooltip>
          			</MapMarker>
        		))
			}
      		</Map>
    	</div>
  	);
}
import { Map, MapControls, MapMarker, MapRoute, MarkerContent, MarkerTooltip } from "@/components/UI/map";
import { useState } from "react";

import { A, rockaway_A, lefferts_A, SubwayLines } from "../Data/SubwayLines";
import { A_Path } from "../Data/A_Path";
import { B_Path } from "../Data/B_Path";
import { C_Path } from "../Data/C_Path";
import { D_Path } from "../Data/D_Path";
import { E_Path } from "../Data/E_Path";

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

	// Gets station information
	const B_stations = SubwayLines.B || [];
	const C_stations = SubwayLines.C || [];
	const D_stations = SubwayLines.D || [];
	const E_stations = SubwayLines.E || [];


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
					<MapRoute id = "a-main" coordinates = {A_Line} color = {"#0039A6"} width = {6} opacity = {1} />
        			<MapRoute id = "a-rockaway" coordinates = {A_RockawayLine} color = {"#0039A6"} width = {6} opacity = {1} />
        			<MapRoute id = "a-lefferts" coordinates = {A_LeffertsLine} color = {"#0039A6"} width = {6} opacity= {1} />
				</>
			)}

			{/* B route */}
			{(activeLine === "ALL" || activeLine === "B") && (
        		<MapRoute id = "b-line" coordinates = {B_Line} color={"#FF6319"} width = {6} opacity = {1} />
			)}


        	{/* C route */}
			{(activeLine === "ALL" || activeLine === "C") && (
        		<MapRoute id = "c-line" coordinates = {C_Line} color={"#0039A6"} width = {6} opacity = {1} />
			)}

			{/* D route */}
			{(activeLine === "ALL" || activeLine === "D") && (
        		<MapRoute id = "d-line" coordinates = {D_Line} color={"#FF6319"} width = {6} opacity = {1} />
			)}
				
        	{/* E route */}
			{(activeLine === "ALL" || activeLine === "E") && (
        		<MapRoute id = "e-line" coordinates = {E_Line} color = {"#0039A6"} width = {6} opacity = {1} />
			)}

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
      		</Map>
    	</div>
  	);
}
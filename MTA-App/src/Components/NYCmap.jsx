import { Map, MapControls, MapMarker, MapRoute, MarkerContent, MarkerTooltip } from "@/components/UI/map";
import { useState } from "react";

import { A, rockaway_A, lefferts_A, SubwayLines } from "../Data/SubwayLines";
import { S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";

import "./NYCmap.css";
import FilterRoute from "../Components/FilterRoute";
import GetRoutes from "../Components/GetRoutes";
import GetStations from "../Components/GetStations";

export default function NYCmap() {
	// By default, ALL lines will be shown unless toggled
	const [activeLine, setActiveLine] = useState("ALL");

	// Stations will show as well when we pass a certain zoom level
  	const [viewport, setViewport] = useState({ center: [-73.912740, 40.734452], zoom: 11 });
  	const stationZoomLimit = 12.3;
 	const showAllStationsAtZoom = activeLine === "ALL" && viewport.zoom >= stationZoomLimit;

  	return (
    	<div className = "nyc-map-wrapper">
      		<FilterRoute activeLine = {activeLine} setActiveLine={setActiveLine}/>
      		<Map className= "nyc-map"
        		viewport = {viewport}
        		maxBounds = {[[-74.5, 40.4], [-73.3, 41.0]]}
        		minZoom = {10}
        		maxZoom = {15}
        		onViewportChange={(next) => setViewport((prev) => ({...prev, ...next }))}
				>
        	<MapControls />

		{/* RENDERING ROUTES */}
        	<GetRoutes activeLine={activeLine} />

		{/* RENDERING STATIONS ~ passing values via props */}
        	<GetStations
          		activeLine = {activeLine}
          		showAllStationsAtZoom = {showAllStationsAtZoom}
          		A = {A}
          		rockaway_A = {rockaway_A}
          		lefferts_A = {lefferts_A}
          		SubwayLines = {SubwayLines}
          		S_42ndStreet = {S_42ndStreet}
          		FranklinAv_S = {FranklinAv_S}
          		Rockaway_S = {Rockaway_S}
        	/>
      		</Map>
    	</div>
  	);
}
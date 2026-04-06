import { Map, MapControls } from "@/components/UI/map";
import "./NYCmap.css";

export default function NYCmap() {
  	return (
    	<div className = "nyc-map-wrapper">
      		<Map className= "nyc-map"
        		center = {[-73.922740, 40.714452]}
        		zoom = {11}
        		maxBounds = {[[-74.5, 40.4], [-73.3, 41.0]]}
				>
        	<MapControls />
      		</Map>
    	</div>
  	);
}
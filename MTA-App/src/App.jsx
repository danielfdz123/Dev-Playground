import { React, useState } from 'react';

import NYCmap from "./Components/NYCmap";
import Sidebar from "./Components/Sidebar";
import './App.css'
// import { Sidebar } from 'lucide-react';

function App() {
	const [activeLine, setActiveLine] = useState("ALL");
	const [routeResult, setRouteResult] = useState(null);

    return (
    	<div className = "appDiv">
      		<NYCmap activeLine = {activeLine} setActiveLine = {setActiveLine} routeResult = {routeResult} setRouteResult = {setRouteResult}/>
			<Sidebar activeLine = {activeLine} setActiveLine = {setActiveLine} routeResult = {routeResult} setRouteResult = {setRouteResult}/>
   		</div>
  	);
}

export default App;
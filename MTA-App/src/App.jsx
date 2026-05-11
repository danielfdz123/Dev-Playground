import { React, useState } from 'react';

import NYCmap from "./Components/NYCmap";
import Sidebar from "./Components/Sidebar";
import './App.css'
// import { Sidebar } from 'lucide-react';

function App() {
	const [activeLine, setActiveLine] = useState("ALL");

    return (
    	<div className = "appDiv">
      		<NYCmap activeLine = {activeLine} setActiveLine = {setActiveLine} />
			<Sidebar activeLine = {activeLine} />
   		</div>
  	);
}

export default App;
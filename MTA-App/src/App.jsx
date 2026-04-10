import React from 'react';

import NYCmap from "./Components/NYCmap";
import Sidebar from "./Components/Sidebar";
import './App.css'
// import { Sidebar } from 'lucide-react';

function App() {
    return (
    	<div className = "appDiv">
      		<NYCmap />	
			<Sidebar />
   		</div>
  	);
}

export default App;
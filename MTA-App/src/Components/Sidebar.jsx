import React from "react";

import "./Sidebar.css";
import StationSearch from "./StationSearch";

export default function Sidebar() {
    return (
        <div className = "sidebarDiv">
            <div className = "topHalf">
                <div className = "introDiv">
                    <div className = "headerTextDiv">
                        {/* Subway picture go here eventually */}
                        <h1 className = "introText"> MTA Subway Route Finder </h1>
                    </div>
                
                    <div className = "instDiv">
                        <p className = "instructions">
                            Enter your starting MTA New York City Subway Station and end with your destination to get the quickest route with best transfers if needed!
                        </p>
                    </div>
                </div>
                <div className = "searchStationDiv">
                    <StationSearch/>
                </div>

                {/* Add component for subway cars that show fastest transfer here */}
            </div>           
        </div>
    );
}
import React from "react";

import "./Sidebar.css";
import StationSearch from "./StationSearch";
import LineInfo from "./LineInfo";

export default function Sidebar({activeLine}) {
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
                            Enter your starting and destination NYC Subway Station to get the quickest route with best transfers if needed!
                        </p>
                    </div>
                </div>
                <div className = "searchStationDiv">
                    <StationSearch/>
                </div>
            </div>

            {/* Add component for subway cars that show fastest transfer here */}
            {activeLine !== "ALL" && (
                <div className = "bottomHalf">
                    <LineInfo activeLine={activeLine} />
                </div>
            )}
        </div>
    );
}
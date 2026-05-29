import { React, useState }from "react";

import "./Sidebar.css";
import StationSearch from "./StationSearch";
import LineInfo from "./LineInfo";
import RouteResults from "./RouteResults";

export default function Sidebar({activeLine, setActiveLine, routeResult, setRouteResult}){

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
                    <StationSearch setRouteResult = {setRouteResult}  setActiveLine = {setActiveLine}/>
                </div>
            </div>

            {/* Add component for subway cars that show fastest transfer here */}
            {routeResult ? (
                <div className = "bottomHalf">
                    <RouteResults routeResult = {routeResult} />
                </div>
            ) : activeLine !== "ALL" ? (
                <div className = "bottomHalf">
                    <LineInfo activeLine = {activeLine} />
                </div>
            ) : (
                // Shows nothing
                <div className = "bottomHalf">
                    {/* <RouteResults routeResult = {routeResult} /> */}
                </div>
            )}
        </div>
    );
}
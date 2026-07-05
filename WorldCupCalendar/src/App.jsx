import { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { addEvent } from "./calendar";
import { matches } from "./games.js";

import "./App.css";

const countries = [
  	"Mexico", "South Africa", "South Korea", "Czech Republic", // Group A
  	"Canada", "Bosnia and Herzegovina", "United States", "Paraguay",  // Group B
  	"Qatar", "Switzerland", "Brazil", "Morocco", // Group C
  	"Haiti", "Scotland", "Australia", "Turkey",  // Group D
  	"Germany", "Curaçao", "Netherlands", "Japan", // Group E
	"Ivory Coast", "Ecuador", "Sweden", "Tunisia", // Group F
	"Spain", "Cape Verde", "Belgium", "Egypt", // Group G
  	"Saudi Arabia", "Uruguay", "Iran", "New Zealand", // Group H
  	"France", "Senegal", "Iraq", "Norway", // Group I
  	"Argentina", "Algeria", "Austria", "Jordan", // Group J
  	"Portugal", "DR Congo", "England", "Croatia", // Group K
  	"Ghana", "Panama", "Uzbekistan", "Colombia" // Group L
];

function App() {
  	const [signedIn, isSignedIn] = useState(null);
  	const [matchColor, setMatchColor] = useState("Peacock");
  	const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  	const [favoriteCountries, setFavoriteCountries] = useState([]);
  	const [favoriteCountryColor, setFavoriteCountryColor] = useState("Tomato");

	const [eventsAdded, setEventsAdded] = useState(false);

  	const login = useGoogleLogin({
    	scope: "https://www.googleapis.com/auth/calendar.events",
    	onSuccess: (response) => 
		{
      		isSignedIn(response.access_token);
    	},
  	});

  	const addFavoriteCountry = (country) => 
	{
    	if (country && !favoriteCountries.includes(country))
		{
    	  	setFavoriteCountries([...favoriteCountries, country]);
    	}
  	};

  	const removeFavoriteCountry = (country) => 
	{
    	setFavoriteCountries(favoriteCountries.filter((team) => team !== country));
  	};

	// Adds all games to the google calendar
  	const addGamesToCalendar = async () => 
	{
    	for (const game of matches) 
		{
      		await addEvent(signedIn, game, matchColor, favoriteCountries, favoriteCountryColor);
    	}
		setEventsAdded(true)
  	};

	// When moved to Advanced Settings Tab
  	if (showAdvancedSettings) 
	{
    	return (
      		<div className = "app">
        		<div className = "content">
          			<h1 className = "title"> World Cup Calendar </h1>
          			<p className = "intro"> Customize your colors here! </p>

					{/* Colors for ALL world cup matches */}
          			<div className = "textRow">
            			<p> • Pick a color for all World Cup matches! </p>

            			<select className = "dropdown" value = {matchColor} onChange = {(event) => setMatchColor(event.target.value)}>
              				<option value = "Tomato" className = "Tomato"> Tomato</option>
              				<option value = "Tangerine" className = "Tangerine"> Tangerine </option>
              				<option value = "Banana" className = "Banana"> Banana </option>
              				<option value = "Basil" className = "Basil"> Basil </option>
              				<option value = "Sage" className = "Sage"> Sage </option>
              				<option value = "Peacock" className = "Peacock"> Peacock </option>
              				<option value = "Blueberry" className = "Blueberry"> Blueberry </option>
              				<option value = "Lavender" className = "Lavender"> Lavender </option>
              				<option value = "Grape" className = "Grape"> Grape </option>
              				<option value = "Flamingo" className = "Flamingo"> Flamingo </option>
              				<option value = "Graphite" className = "Graphite"> Graphite </option>
            			</select>
          			</div>

					{/* OVERRIDES:  Specific teams get certain colors depending on the users liking */}
          			<h3> Extras: </h3>
          			<p> • Have specific teams you're cheering for? Distinguish their games with their own color! </p>

					<div className = "textRow">
						<label className = "favoritePicker"> Favorite Team(s): </label>
          				<select className = "dropdown" onChange = {(event) => addFavoriteCountry(event.target.value)}>
            				<option value = ""> Select your favorites! </option>

            				{countries.map((country) => (
              					<option key = {country} value = {country}>
                					{country}
              					</option>
            				))}

          				</select>
					</div>
					
					{/* Allows users to delete teams from their favories if added by mistake */}
					<div className = "favoriteTeams">
            			{favoriteCountries.map((country)  => (
                			<button className = "removeFavorite" title = "Remove from Favorites" onClick = {() => removeFavoriteCountry(country)}>
                  				❌ {country}
                			</button>
            			))}
          			</div>

					{/* Color menu for their favorite teams */}
          			<label className = "favoritePicker"> Unique Color: </label>
          			<select className = "dropdown" value = {favoriteCountryColor} onChange = {(event) => setFavoriteCountryColor(event.target.value)}>
            			<option value = "Tomato" className = "Tomato"> Tomato</option>
              			<option value = "Tangerine" className = "Tangerine"> Tangerine </option>
              			<option value = "Banana" className = "Banana"> Banana </option>
              			<option value = "Basil" className = "Basil"> Basil </option>
              			<option value = "Sage" className = "Sage"> Sage </option>
              			<option value = "Peacock" className = "Peacock"> Peacock </option>
              			<option value = "Blueberry" className = "Blueberry"> Blueberry </option>
              			<option value = "Lavender" className = "Lavender"> Lavender </option>
              			<option value = "Grape" className = "Grape"> Grape </option>
              			<option value = "Flamingo" className = "Flamingo"> Flamingo </option>
              			<option value = "Graphite" className = "Graphite"> Graphite </option>
          			</select>

          			<p> • Click "Add Games" when finished! </p>

          			<button className = "button" onClick = {addGamesToCalendar}> Add Games to Calendar </button>

					{eventsAdded && (
    					<p> ✅ Events added successfully! </p>
					)}

        		</div>
      		</div>
    	);
  	}

	// Main page after signing in. Color choice for ALL games, no advanced settings
  	return (
    	<div className = "app">
      		<div className = "content">
        		<h1 className = "title"> World Cup Calendar </h1>

        		{!signedIn ? (
          		<>
            		<p> Sign in to your Google account to automatically add every World Cup group stage match to your calendar! </p>
            		<button className = "button" onClick = {() => login()}> Sign In With Google </button>
          		</>
        		) : (
          		<>
            		<p className = "intro"> ✅ Logged in Successful! </p>
            		<p> Pick a color for your World Cup matches! </p>
					
					{/* Color menu for ALL world cup matches */}
            		<select className = "dropdown" value = {matchColor} onChange = {(event) => setMatchColor(event.target.value)}>
              			<option value = "Tomato" className = "Tomato"> Tomato</option>
              			<option value = "Tangerine" className = "Tangerine"> Tangerine </option>
              			<option value = "Banana" className = "Banana"> Banana </option>
              			<option value = "Basil" className = "Basil"> Basil </option>
              			<option value = "Sage" className = "Sage"> Sage </option>
              			<option value = "Peacock" className = "Peacock"> Peacock </option>
              			<option value = "Blueberry" className = "Blueberry"> Blueberry </option>
              			<option value = "Lavender" className = "Lavender"> Lavender </option>
              			<option value = "Grape" className = "Grape"> Grape </option>
              			<option value = "Flamingo" className = "Flamingo"> Flamingo </option>
              			<option value = "Graphite" className = "Graphite"> Graphite </option>
            		</select>
					
					{/* Allows users to adjust color settings */}
            		<p className = "settingsLink" onClick = {() => setShowAdvancedSettings(true)}> Advanced Color Settings </p>

            		<button className = "button" onClick = {addGamesToCalendar}> Add Games to Calendar </button>
        		
					{eventsAdded && (
    					<p> ✅ Events added successfully! </p>
					)}
				</>
        		)}
      		</div>
    	</div>
  	);
}

export default App;
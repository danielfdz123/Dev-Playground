import GetFullRoute from "./GetFullRoute";
import GetSlicedRoute from "./GetSlicedRoute";

// Will now show the full route or a sliced route depending on what we are viewing on the app
export default function GetRoutes({ activeLine, routeResult })
{
	// Shows sliced route to correspond with our route finder
    if(routeResult)
    {
        return <GetSlicedRoute routeResult = {routeResult}/>
    }

	// Show all when using the view ALL mode
    return <GetFullRoute activeLine = {activeLine}/>
}
import GetAllStations from "./GetAllStations";
import GetSlicedStations from "./GetSlicedStations";

export default function GetStations(props)
{
    if(props.routeResult)
    {
        return <GetSlicedStations {...props} />;
    }

    return <GetAllStations {...props} />;
}
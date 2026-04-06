import { SubwayLines } from "../Stations/SubwayLines.js";

export function getDirection(line, firstStop, lastStop)
{
    const stations = SubwayLines[line];                     // Puts all the stations of the chosen line into an array (Southbound direction)
    const firstStation = stations.indexOf(firstStop);       // Gets index of northbound terminal (1st stop)
    const lastStation = stations.indexOf(lastStop);         // Gets index of southbound terminal (Last stop)

    if (firstStation > lastStation)
    {
        return "Southbound";
    }
    else
    {
        return "Northbound";
    }
}

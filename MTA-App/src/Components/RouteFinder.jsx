import { SubwayLines, A, rockaway_A, lefferts_A } from "../Data/SubwayLines"
import "RouteFinder.css";

// Finds proper route for the A Train due to there being a Lefferts Blvd branch and a Far Rockaway branch
function A_TrainBranch(startStop, endStop) {
    if(lefferts_A.includes(endStop))
    {
        return "A ~ Lefferts Blvd";
    }
    else if(rockaway_A.includes(endStop))
    {
        return "A ~ Far Rockaway";
    }
    else
    {
        return "A";
    }
}
import { MapRoute } from "@/components/UI/map";
import { rockaway_A, lefferts_A } from "../Data/SubwayLines";

import { A_Path } from "../Data/A_Path";
import { B_Path } from "../Data/B_Path";
import { C_Path } from "../Data/C_Path";
import { D_Path } from "../Data/D_Path";
import { E_Path } from "../Data/E_Path";
import { F_Path } from "../Data/F_Path";
import { G_Path } from "../Data/G_Path";
import { L_Path } from "../Data/L_Path";
import { M_Path } from "../Data/M_Path";
import { N_Path } from "../Data/N_Path";
import { Q_Path } from "../Data/Q_Path";
import { R_Path } from "../Data/R_Path";
import { W_Path } from "../Data/W_Path";
import { S_Path } from "../Data/S_Path";
import { J_Path } from "../Data/J_Path";
import { Z_Path } from "../Data/Z_Path";
import { Path_1 } from "../Data/1_Path";
import { Path_2 } from "../Data/2_Path";
import { Path_3 } from "../Data/3_Path";
import { Path_4 } from "../Data/4_Path";
import { Path_5 } from "../Data/5_Path";
import { Path_6 } from "../Data/6_Path";
import { Path_7 } from "../Data/7_Path";

export default function GetSlicedRoute({ routeResult })
{
    // Gets info of the pathing of each line
    const A_Line = (A_Path.A || []).map(([lat, lon]) => [lon, lat]);
    const A_RockawayLine = (A_Path.A_rockaway || []).map(([lat, lon]) => [lon, lat]);
    const A_LeffertsLine = (A_Path.A_lefferts || []).map(([lat, lon]) => [lon, lat]);
    const B_Line = (B_Path.B || []).map(([lat, lon]) => [lon, lat]);
    const C_Line = (C_Path.C || []).map(([lat, lon]) => [lon, lat]);
    const D_Line = (D_Path.D || []).map(([lat, lon]) => [lon, lat]);
    const E_Line = (E_Path.E || []).map(([lat, lon]) => [lon, lat]);
    const F_Line = (F_Path.F || []).map(([lat, lon]) => [lon, lat]);
    const G_Line = (G_Path.G || []).map(([lat, lon]) => [lon, lat]);
    const L_Line = (L_Path.L || []).map(([lat, lon]) => [lon, lat]);
    const M_Line = (M_Path.M || []).map(([lat, lon]) => [lon, lat]);
    const N_Line = (N_Path.N || []).map(([lat, lon]) => [lon, lat]);
    const Q_Line = (Q_Path.Q || []).map(([lat, lon]) => [lon, lat]);
    const R_Line = (R_Path.R || []).map(([lat, lon]) => [lon, lat]);
    const W_Line = (W_Path.W || []).map(([lat, lon]) => [lon, lat]);
    const J_Line = (J_Path.J || []).map(([lat, lon]) => [lon, lat]);
    const Z_Line = (Z_Path.Z || []).map(([lat, lon]) => [lon, lat]);
    const Line_1 = (Path_1["1"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_2 = (Path_2["2"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_3 = (Path_3["3"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_4 = (Path_4["4"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_5 = (Path_5["5"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_6 = (Path_6["6"] || []).map(([lat, lon]) => [lon, lat]);
    const Line_7 = (Path_7["7"] || []).map(([lat, lon]) => [lon, lat]);
    const S_42ndStreetLine = (S_Path.S_42ndStreet || []).map(([lat, lon]) => [lon, lat]);
    const S_FranklinAvLine = (S_Path.S_FranklinAv || []).map(([lat, lon]) => [lon, lat]);
    const S_RockawayLine = (S_Path.S_Rockaway || []).map(([lat, lon]) => [lon, lat]);

    function slicePath(fullPath)
    {
        // Gets coordinates of start/destination station
        const startStationCords = [routeResult.startStop.lon, routeResult.startStop.lat];
        const destinationStationCords = [routeResult.destinationStop.lon, routeResult.destinationStop.lat];

        const startIndex = fullPath.findIndex((point) => point[0] === startStationCords[0] && point[1] === startStationCords[1]);
        const destinationIndex = fullPath.findIndex((point) => point[0] === destinationStationCords[0] && point[1] === destinationStationCords[1]);

        // Debugging
        if(startIndex === -1 || destinationIndex === -1)
        {
            console.log("Start or destination point was not found in path");
            return [];
        }

        if(startIndex < destinationIndex)
        {
            return fullPath.slice(startIndex, destinationIndex + 1);
        }

        return fullPath.slice(destinationIndex, startIndex + 1).reverse();
    }

    function determine_A_Route()
    {
        const destinationId = routeResult.destinationStop.id;
        const toFarRock = rockaway_A.some((station) => station.id === destinationId);
        const toLefferts = lefferts_A.some((station) => station.id === destinationId);

        const startId = routeResult.startStop.id;
        const fromLefferts = lefferts_A.some((station) => station.id === startId);
        const fromFarRock = rockaway_A.some((station) => station.id === startId);

        if(toFarRock || fromFarRock)
        {
            return [...A_Line, ...A_RockawayLine];
        }
        
        if(toLefferts || fromLefferts)
        {
            return [...A_Line, ...A_LeffertsLine];
        }
        return A_Line;
    }

    const A_sliced = routeResult.startLine === "A" ? slicePath(determine_A_Route()) : [];

    return (
        <>
            {/* A routes */}
            {routeResult.startLine === "A" && (
                <>
                    <MapRoute id = "a-main" coordinates = {A_Line} color = {"#0039A6"} width = {3} opacity = {0.2} />
                    <MapRoute id = "a-rockaway" coordinates = {A_RockawayLine} color = {"#0039A6"} width = {3} opacity = {0.2} />
                    <MapRoute id = "a-lefferts" coordinates = {A_LeffertsLine} color = {"#0039A6"} width = {3} opacity = {0.2} />

                    {A_sliced && (<MapRoute id = "a-main-sliced" coordinates = {A_sliced} color = {"#0039A6"} width = {3} opacity = {1} />)}
        
                </>
            )}

            {/* B route */}
            {routeResult.startLine === "B" && (
                <>
                    <MapRoute id = "b-line" coordinates = {B_Line} color = {"#FF6319"} width = {3} opacity = {0.2} />
                    <MapRoute id = "b-line-sliced" coordinates = {slicePath(B_Line)} color = {"#FF6319"} width = {3} opacity = {1} />
                </>
            )}

            {/* C route */}
            {routeResult.startLine === "C" && (
                <>
                    <MapRoute id = "c-line" coordinates = {C_Line} color = {"#0039A6"} width = {3} opacity = {0.2} />
                    <MapRoute id = "c-line-sliced" coordinates = {slicePath(C_Line)} color = {"#0039A6"} width = {3} opacity = {1} />
                </>
            )}

            {/* D route */}
            {routeResult.startLine === "D" && (
                <>
                    <MapRoute id = "d-line" coordinates = {D_Line} color = {"#FF6319"} width = {3} opacity = {0.2} />
                    <MapRoute id = "d-line-sliced" coordinates = {slicePath(D_Line)} color = {"#FF6319"} width = {3} opacity = {1} />
                </>
            )}

            {/* E route */}
            {routeResult.startLine === "E" && (
                <>
                    <MapRoute id = "e-line" coordinates = {E_Line} color = {"#0039A6"} width = {3} opacity = {0.2} />
                    <MapRoute id = "e-line-sliced" coordinates = {slicePath(E_Line)} color = {"#0039A6"} width = {3} opacity = {1} />
                </>
            )}

            {/* F route */}
            {routeResult.startLine === "F" && (
                <>
                    <MapRoute id = "f-line" coordinates = {F_Line} color = {"#FF6319"} width = {3} opacity = {0.2} />
                    <MapRoute id = "f-line-sliced" coordinates = {slicePath(F_Line)} color = {"#FF6319"} width = {3} opacity = {1} />
                </>
            )}

            {/* G route */}
            {routeResult.startLine === "G" && (
                <>
                    <MapRoute id = "g-line" coordinates = {G_Line} color = {"#6CBE45"} width = {3} opacity = {0.2} />
                    <MapRoute id = "g-line-sliced" coordinates = {slicePath(G_Line)} color = {"#6CBE45"} width = {3} opacity = {1} />
                </>
            )}

            {/* L route */}
            {routeResult.startLine === "L" && (
                <>
                    <MapRoute id = "l-line" coordinates = {L_Line} color = {"#818181"} width = {3} opacity = {0.2} />
                    <MapRoute id = "l-line-sliced" coordinates = {slicePath(L_Line)} color = {"#818181"} width = {3} opacity = {1} />
                </>
            )}

            {/* M route */}
            {routeResult.startLine === "M" && (
                <>
                    <MapRoute id = "m-line" coordinates = {M_Line} color = {"#FF6319"} width = {3} opacity = {0.2} />
                    <MapRoute id = "m-line-sliced" coordinates = {slicePath(M_Line)} color = {"#FF6319"} width = {3} opacity = {1} />
                </>
            )}

            {/* N route */}
            {routeResult.startLine === "N" && (
                <>
                    <MapRoute id = "n-line" coordinates = {N_Line} color = {"#FCCC0A"} width = {3} opacity = {0.2} />
                    <MapRoute id = "n-line-sliced" coordinates = {slicePath(N_Line)} color = {"#FCCC0A"} width = {3} opacity = {1} />
                </>
            )}

            {/* Q route */}
            {routeResult.startLine === "Q" && (
                <>
                    <MapRoute id = "q-line" coordinates = {Q_Line} color = {"#FCCC0A"} width = {3} opacity = {0.2} />
                    <MapRoute id = "q-line-sliced" coordinates = {slicePath(Q_Line)} color = {"#FCCC0A"} width = {3} opacity = {1} />
                </>
            )}

            {/* R route */}
            {routeResult.startLine === "R" && (
                <>
                    <MapRoute id = "r-line" coordinates = {R_Line} color = {"#FCCC0A"} width = {3} opacity = {0.2} />
                    <MapRoute id = "r-line-sliced" coordinates = {slicePath(R_Line)} color = {"#FCCC0A"} width = {3} opacity = {1} />
                </>
            )}

            {/* W route */}
            {routeResult.startLine === "W" && (
                <>
                    <MapRoute id = "w-line" coordinates = {W_Line} color = {"#FCCC0A"} width = {3} opacity = {0.2} />
                    <MapRoute id = "w-line-sliced" coordinates = {slicePath(W_Line)} color = {"#FCCC0A"} width = {3} opacity = {1} />
                </>
            )}

            {/* J route */}
            {routeResult.startLine === "J" && (
                <>
                    <MapRoute id = "j-line" coordinates = {J_Line} color = {"#8E5C33"} width = {3} opacity = {0.2} />
                    <MapRoute id = "j-line-sliced" coordinates = {slicePath(J_Line)} color = {"#8E5C33"} width = {3} opacity = {1} />
                </>
            )}

            {/* Z route */}
            {routeResult.startLine === "Z" && (
                <>
                    <MapRoute id = "z-line" coordinates = {Z_Line} color = {"#8E5C33"} width = {3} opacity = {0.2} />
                    <MapRoute id = "z-line-sliced" coordinates = {slicePath(Z_Line)} color = {"#8E5C33"} width = {3} opacity = {1} />
                </>
            )}

            {/* 1 route */}
            {routeResult.startLine === "1" && (
                <>
                    <MapRoute id = "1-line" coordinates = {Line_1} color = {"#D82233"} width = {3} opacity = {0.2} />
                    <MapRoute id = "1-line-sliced" coordinates = {slicePath(Line_1)} color = {"#D82233"} width = {3} opacity = {1} />
                </>
            )}

            {/* 2 route */}
            {routeResult.startLine === "2" && (
                <>
                    <MapRoute id = "2-line" coordinates = {Line_2} color = {"#D82233"} width = {3} opacity = {0.2} />
                    <MapRoute id = "2-line-sliced" coordinates = {slicePath(Line_2)} color = {"#D82233"} width = {3} opacity = {1} />
                </>
            )}

            {/* 3 route */}
            {routeResult.startLine === "3" && (
                <>
                    <MapRoute id = "3-line" coordinates = {Line_3} color = {"#D82233"} width = {3} opacity = {0.2} />
                    <MapRoute id = "3-line-sliced" coordinates = {slicePath(Line_3)} color = {"#D82233"} width = {3} opacity = {1} />
                </>
            )}

            {/* 4 route */}
            {routeResult.startLine === "4" && (
                <>
                    <MapRoute id = "4-line" coordinates = {Line_4} color = {"#009952"} width = {3} opacity = {0.2} />
                    <MapRoute id = "4-line-sliced" coordinates = {slicePath(Line_4)} color = {"#009952"} width = {3} opacity = {1} />
                </>
            )}

            {/* 5 route */}
            {routeResult.startLine === "5" && (
                <>
                    <MapRoute id = "5-line" coordinates = {Line_5} color = {"#009952"} width = {3} opacity = {0.2} />
                    <MapRoute id = "5-line-sliced" coordinates = {slicePath(Line_5)} color = {"#009952"} width = {3} opacity = {1} />
                </>
            )}

            {/* 6 route */}
            {routeResult.startLine === "6" && (
                <>
                    <MapRoute id = "6-line" coordinates = {Line_6} color = {"#009952"} width = {3} opacity = {0.2} />
                    <MapRoute id = "6-line-sliced" coordinates = {slicePath(Line_6)} color = {"#009952"} width = {3} opacity = {1} />
                </>
            )}

            {/* 7 route */}
            {routeResult.startLine === "7" && (
                <>
                    <MapRoute id = "7-line" coordinates = {Line_7} color = {"#9A38A1"} width = {3} opacity = {0.2} />
                    <MapRoute id = "7-line-sliced" coordinates = {slicePath(Line_7)} color = {"#9A38A1"} width = {3} opacity = {1} />
                </>
            )}

            {/* S routes */}
            {routeResult.startLine === "S" && (
                <>
                    <MapRoute id = "s-line-42nd" coordinates = {S_42ndStreetLine} color = {"#818181"} width = {3} opacity = {0.2} />
                    <MapRoute id = "s-line-franklin" coordinates = {S_FranklinAvLine} color = {"#818181"} width = {3} opacity = {0.2} />
                    <MapRoute id = "s-line-rockaway" coordinates = {S_RockawayLine} color = {"#818181"} width = {3} opacity = {0.2} />

                    <MapRoute id = "s-line-sliced-42nd" coordinates = {slicePath(S_42ndStreetLine)} color = {"#818181"} width = {3} opacity = {1} />
                    <MapRoute id = "s-line-sliced-franklin" coordinates = {slicePath(S_FranklinAvLine)} color = {"#818181"} width = {3} opacity = {1} />
                    <MapRoute id = "s-line-sliced-rockaway" coordinates = {slicePath(S_RockawayLine)} color = {"#818181"} width = {3} opacity = {1} />
                </>
            )}
        </>
    );
}

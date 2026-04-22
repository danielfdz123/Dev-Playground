import { MapRoute } from "@/components/UI/map";

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
import { Path_1 } from "..//Data/1_Path";
import { Path_2 } from "..//Data/2_Path";
import { Path_3 } from "..//Data/3_Path";
import { Path_4 } from "..//Data/4_Path";
import { Path_5 } from "..//Data/5_Path";
import { Path_6 } from "..//Data/6_Path";
import { Path_7 } from "..//Data/7_Path";

export default function GetRoutes({ activeLine }) {
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

    return (
        <>
            {/* A routes */}
				<MapRoute id = "a-main" coordinates = {A_Line} color = {"#0039A6"} width = {3} opacity = {activeLine === "A" || activeLine === "ALL" ? 1 : 0.2} />
        		<MapRoute id = "a-rockaway" coordinates = {A_RockawayLine} color = {"#0039A6"} width = {3} opacity = {activeLine === "A" || activeLine === "ALL" ? 1 : 0.2} />
        		<MapRoute id = "a-lefferts" coordinates = {A_LeffertsLine} color = {"#0039A6"} width = {3} opacity = {activeLine === "A" || activeLine === "ALL" ? 1 : 0.2} />

			{/* B route */}
				<MapRoute id = "b-line" coordinates = {B_Line} color={"#FF6319"} width = {3} opacity = {activeLine === "B" || activeLine === "ALL" ? 1 : 0.2} />

        	{/* C route */}
        		<MapRoute id = "c-line" coordinates = {C_Line} color={"#0039A6"} width = {3} opacity = {activeLine === "C" || activeLine === "ALL" ? 1 : 0.2} />
	
			{/* D route */}
        		<MapRoute id = "d-line" coordinates = {D_Line} color={"#FF6319"} width = {3} opacity = {activeLine === "D" || activeLine === "ALL" ? 1 : 0.2} />
				
        	{/* E route */}
        		<MapRoute id = "e-line" coordinates = {E_Line} color = {"#0039A6"} width = {3} opacity = {activeLine === "E" || activeLine === "ALL" ? 1 : 0.2} />


			{/* F route */}
        		<MapRoute id = "f-line" coordinates = {F_Line} color = {"#FF6319"} width = {3} opacity = {activeLine === "F" || activeLine === "ALL" ? 1 : 0.2} />

			{/* G route */}
        		<MapRoute id = "g-line" coordinates = {G_Line} color = {"#6CBE45"} width = {3} opacity = {activeLine === "G" || activeLine === "ALL" ? 1 : 0.2} />

			{/* L route */}
        		<MapRoute id = "l-line" coordinates = {L_Line} color = {"#818181"} width = {3} opacity = {activeLine === "L" || activeLine === "ALL" ? 1 : 0.2} />

			{/* M route */}
        		<MapRoute id = "m-line" coordinates = {M_Line} color = {"#FF6319"} width = {3} opacity = {activeLine === "M" || activeLine === "ALL" ? 1 : 0.2} />

			{/* N route */}
        		<MapRoute id = "n-line" coordinates = {N_Line} color = {"#FCCC0A"} width = {3} opacity = {activeLine === "N" || activeLine === "ALL" ? 1 : 0.2} />

			{/* Q route */}
        		<MapRoute id = "q-line" coordinates = {Q_Line} color = {"#FCCC0A"} width = {3} opacity = {activeLine === "Q" || activeLine === "ALL" ? 1 : 0.2} />

			{/* R route */}
        		<MapRoute id = "r-line" coordinates = {R_Line} color = {"#FCCC0A"} width = {3} opacity = {activeLine === "R" || activeLine === "ALL" ? 1 : 0.2} />

			{/* W route */}
        		<MapRoute id = "w-line" coordinates = {W_Line} color = {"#FCCC0A"} width = {3} opacity = {activeLine === "W" || activeLine === "ALL" ? 1 : 0.2} />
			
			{/* J route */}
        		<MapRoute id = "j-line" coordinates = {J_Line} color = {"#8E5C33"} width = {3} opacity = {activeLine === "J" || activeLine === "ALL" ? 1 : 0.2} />

			{/* Z route */}
        		<MapRoute id = "z-line" coordinates = {Z_Line} color = {"#8E5C33"} width = {3} opacity = {activeLine === "Z" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 1 route */}
        		<MapRoute id = "1-line" coordinates = {Line_1} color = {"#D82233"} width = {3} opacity = {activeLine === "1" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 2 route */}
        		<MapRoute id = "2-line" coordinates = {Line_2} color = {"#D82233"} width = {3} opacity = {activeLine === "2" || activeLine === "ALL" ? 1 : 0.2} />
			
			{/* 3 route */}
        		<MapRoute id = "3-line" coordinates = {Line_3} color = {"#D82233"} width = {3} opacity = {activeLine === "3" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 4 route */}
        		<MapRoute id = "4-line" coordinates = {Line_4} color = {"#009952"} width = {3} opacity = {activeLine === "4" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 5 route */}
        		<MapRoute id = "5-line" coordinates = {Line_5} color = {"#009952"} width = {3} opacity = {activeLine === "5" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 6 route */}
        		<MapRoute id = "6-line" coordinates = {Line_6} color = {"#009952"} width = {3} opacity = {activeLine === "6" || activeLine === "ALL" ? 1 : 0.2} />

			{/* 7 route */}
        		<MapRoute id = "7-line" coordinates = {Line_7} color = {"#9A38A1"} width = {3} opacity = {activeLine === "7" || activeLine === "ALL" ? 1 : 0.2} />

			{/* S routes */}
				<MapRoute id = "s-42nd" coordinates = {S_42ndStreetLine} color = {"#818181"} width = {3} opacity = {activeLine === "S" || activeLine === "ALL" ? 1 : 0.2} />
        		<MapRoute id = "s-franklinAv" coordinates = {S_FranklinAvLine} color = {"#818181"} width = {3} opacity = {activeLine === "S" || activeLine === "ALL" ? 1 : 0.2} />
        		<MapRoute id = "s-rockaway" coordinates = {S_RockawayLine} color = {"#818181"} width = {3} opacity = {activeLine === "S" || activeLine === "ALL" ? 1 : 0.2} />
        </>
    );
}
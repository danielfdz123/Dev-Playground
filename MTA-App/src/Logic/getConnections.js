import { A, rockaway_A, lefferts_A, SubwayLines, S_42ndStreet, FranklinAv_S, Rockaway_S } from "../Data/SubwayLines";

export function getConnections() {
    // Import subway station data and push it into an array for easier handling
    const allLines = {
        A: [...A, ...rockaway_A, ...lefferts_A],
        S: [...S_42ndStreet, ...FranklinAv_S, ...Rockaway_S],
        B: SubwayLines.B || [],
        C: SubwayLines.C || [],
        D: SubwayLines.D || [],
        E: SubwayLines.E || [],
        F: SubwayLines.F || [],
        G: SubwayLines.G || [],
        L: SubwayLines.L || [],
        M: SubwayLines.M || [],
        N: SubwayLines.N || [],
        Q: SubwayLines.Q || [],
        R: SubwayLines.R || [],
        W: SubwayLines.W || [],
        J: SubwayLines.J || [],
        Z: SubwayLines.Z || [],
        "1": SubwayLines["1"] || [],
        "2": SubwayLines["2"] || [],
        "3": SubwayLines["3"] || [],
        "4": SubwayLines["4"] || [],
        "5": SubwayLines["5"] || [],
        "6": SubwayLines["6"] || [],
        "7": SubwayLines["7"] || [],
    };

    const groupByCords = {};
    const groupByID = {};
    
    // Will go through all lines in the system to look for any station that needs to be merged
    for (const line in allLines) 
    {
        const stations = allLines[line];

        // GROUP NAMES via ID
        for (const station of stations) 
        {
            // Prevents duplicates regarding ID
            if (!groupByID[station.id]) 
            {
                groupByID[station.id] = [];
            }
            if (!groupByID[station.id].includes(line)) 
            {
                groupByID[station.id].push(line);
            }
        
        // GROUP MARKERS via COORDINATES
            const key = `${station.lat}_${station.lon}`;

            if (!groupByCords[key]) {
                groupByCords[key] = {
                    lat: station.lat,
                    lon: station.lon,
                    names: [],
                    lines: [],
                    ids: []
                };
            }
            const group = groupByCords[key];

            // Prevents duplicate markers from being rendered (more markers = lag)
            if (!group.names.includes(station.name)) 
            {
                group.names.push(station.name);
            }

            if (!group.lines.includes(line)) 
            {
                group.lines.push(line);
            }
            if (station.id && !group.ids.includes(station.id)) 
            {
                group.ids.push(station.id);
            }
        }
    }

    // Specifices grouped/solo markers with proper naming
    return Object.values(groupByCords).map((station) => {        
        
        const mergedLines = [...station.lines];

        // Merges grouped lines via coordinates & IDs to show all available transfers
        for (const id of station.ids) 
        {
            const idLines = groupByID[id] || [];
            for (const line of idLines) 
            {
                if (!mergedLines.includes(line)) 
                {
                    mergedLines.push(line);
                }
            }
        }

        // Marker details (marker positioning/name, filtering, transfers)
        return {
            lat: station.lat,
            lon: station.lon,
            lines: station.lines,
            name: station.names[0],
            transferLines: mergedLines,
            displayName: `(${mergedLines.join("/")}) ${station.names[0]}`,
        };
    });
}
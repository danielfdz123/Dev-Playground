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
    
    // Will go through all lines in the system to look for any station that needs to be merged
    for (const line in allLines) 
    {
        const stations = allLines[line];

        for (const station of stations) 
        {

            // This key will group stations based matching on coordinates
            const key = `${station.lat}_${station.lon}`;

            if (!groupByCords[key]) {
                groupByCords[key] = {
                    lat: station.lat,
                    lon: station.lon,
                    names: [],
                    lines: [],
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
        }
    }

    // Specifices grouped/solo markers with proper naming
    return Object.values(groupByCords).map((station) => ({
        ...station,
        name: station.names[0],

        // Adds a slash if multiple lines are present at a single station
        displayName: `(${station.lines.join("/")}) ${station.names[0]}`,
    }));
}
export default function calculateTransferTime(stationName, stationID, startLine, transferLine)
{
    if(stationID === "168St")
    {
        // 2 min || A/C <-> 1
        if((["A", "C"].includes(startLine) && transferLine === "1") || (startLine === "1" && ["A", "C"].includes(transferLine)))
        {
            return 2;
        }
        return 0;
    }
    else if(stationID === "ColumbusCircle")
    {
        // 3 min | A/B/C/D <-> 1
        if((["A", "C", "B", "D"].includes(startLine) && transferLine === "1") || (startLine === "1" && ["A", "C", "B", "D"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "Lex59")
    {
        // 3 min || N/R/W <-> 4/5/6
        if((["N", "R", "W"].includes(startLine) && ["4", "5", "6"].includes(transferLine)) || (["4", "5", "6"].includes(startLine) && ["N", "R", "W"].includes(transferLine)))
        {
            return 3;
        }
        // 2 min || 4/5 <-> 6
        else if((["4", "5"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["4", "5"].includes(transferLine)))
        {
            return 2;
        }
        return 0;
    }
    else if(stationID === "Lex53St")
    {
        if((["E", "F"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["E", "F"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if((stationID === "PortAuthority") || (stationID == "BryantPark") || (stationID == "TimesSquare"))
    {
        // 2 min | 7 (5 Av) <-> B/D/F/M
        if(stationName === "5 Av" && ((startLine === "7" && ["B", "D", "F", "M"].includes(transferLine)) || (["B", "D", "F", "M"].includes(startLine) && transferLine === "7")))
        {
            return 2;
        }

        // 3 min | B/D/F/M <-> S 
        else if((["B", "D", "F", "M"].includes(startLine) && transferLine === "S") || startLine === "S" && ["B", "D", "F", "M"].includes(transferLine))
        {
            return 3; 
        }
        // 2 min | N/Q/R/W <-> S
        else if((["N", "Q", "R", "W"].includes(startLine) && transferLine === "S") || startLine === "S" && ["N", "Q", "R", "W"].includes(transferLine))
        {
            return 2;
        }
        // 2 min | 1/2/3 <-> S
        else if((["1", "2", "3"].includes(startLine) && transferLine === "S") || startLine === "S" && ["1", "2", "3"].includes(transferLine))
        {
            return 2;
        }
        // 3 min | 7 (Times Sq) <-> S
        else if(stationName === "Times Sq-42 St" && ((startLine === "7" && transferLine === "S") || startLine === "S" && transferLine === "7"))
        {
            return 3;
        }
        // 9 min | A/C/E <-> S
        else if((["A", "C", "E"].includes(startLine) && transferLine === "S") || startLine === "S" && ["A", "C", "E"].includes(transferLine))
        {
            return 9;
        }

        // 2 min | 1/2/3 <-> N/Q/R/W
        else if((["1", "2", "3"].includes(startLine) && ["N", "Q", "R", "W"].includes(transferLine)) || ["N", "Q", "R", "W"].includes(startLine) && ["1", "2", "3"].includes(transferLine))
        {
            return 2; 
        }
        // 3 min | 7 (Times Sq) <-> N/Q/R/W
        else if(stationName === "Times Sq-42 St" && ((startLine === "7" && ["N", "Q", "R", "W"].includes(transferLine)) || ["N", "Q", "R", "W"].includes(startLine) && transferLine === "7"))
        {
            return 3;
        }
        // 8 min | A/C/E <-> N/Q/R/W
        else if((["A", "C", "E"].includes(startLine) && ["N", "Q", "R", "W"].includes(transferLine)) || ["N", "Q", "R", "W"].includes(startLine) && ["A", "C", "E"].includes(transferLine))
        {
            return 8; 
        }
        // 4 min | B/D/F/M <-> N/Q/R/W
        else if((["B", "D", "F", "M"].includes(startLine) && ["N", "Q", "R", "W"].includes(transferLine)) || ["N", "Q", "R", "W"].includes(startLine) && ["B", "D", "F", "M"].includes(transferLine))
        {
            return 4; 
        }
        // 2 min | 1/2/3 <-> 7 (Times Sq)
        else if(stationName === "Times Sq-42 St" && ((startLine === "7" && ["1", "2", "3"].includes(transferLine)) || ["1", "2", "3"].includes(startLine) && transferLine === "7"))
        {
            return 2;
        }
        // 4 min | A/C/E <-> 7
        else if(stationName === "Times Sq-42 St" && ((startLine === "7" && ["A", "C", "E"].includes(transferLine)) || ["A", "C", "E"].includes(startLine) && transferLine === "7"))
        {
            return 4;
        }
        // 6 min | A/C/E <-> 1/2/3
        else if((["A", "C", "E"].includes(startLine) && ["1", "2", "3"].includes(transferLine)) || ["1", "2", "3"].includes(startLine) && ["A", "C", "E"].includes(transferLine))
        {
            return 6; 
        }
        // 5 min | B/D/F/M <-> 1/2/3 
        else if((["B", "D", "F", "M"].includes(startLine) && ["1", "2", "3"].includes(transferLine)) || ["1", "2", "3"].includes(startLine) && ["B", "D", "F", "M"].includes(transferLine))
        {
            return 5; 
        }
        // 11 min B/D/F/M <-> A/C/E 
        else if((["B", "D", "F", "M"].includes(startLine) && ["A", "C", "E"].includes(transferLine)) || ["A", "C", "E"].includes(startLine) && ["B", "D", "F", "M"].includes(transferLine))
        {
            return 11; 
        }
        return 0;
    }
    else if(stationID === "GrandCentral")
    {
        // 2 min | 4/5/6 <-> 7
        if((["4", "5", "6"].includes(startLine) && transferLine === "7") || (startLine === "7" && ["4", "5", "6"].includes(transferLine)))
        {
            return 2;
        }
        // 4 min | 4/5/6 <-> S
        else if((["4", "5", "6"].includes(startLine) && transferLine === "S") || (startLine === "S" && ["4", "5", "6"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "HeraldSquare")
    {
        if((["B", "D", "F", "M"].includes(startLine) && ["N", "Q", "R", "W"].includes(transferLine)) || ["N", "Q", "R", "W"].includes(startLine) && ["B", "D", "F", "M"].includes(transferLine))
        {
            return 3; 
        }
        return 0;
    }
    else if(stationID === "8Av14St")
    {
        if((["A", "C", "E"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["A", "C", "E"].includes(transferLine)))
        {
            return 3; 
        }
        return 0;
    }
    else if(stationID === "6-7Av14St")
    {
        // 3 min | B/D/F/M <-> L
        if((["B", "D", "F", "M"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["B", "D", "F", "M"].includes(transferLine)))
        {
            return 3;
        }
        // 5 min | B/D/F/M <-> 1/2/3
        else if((["B", "D", "F", "M"].includes(startLine) && ["1", "2", "3"].includes(transferLine)) || (["1", "2", "3"].includes(startLine) && ["B", "D", "F", "M"].includes(transferLine)))
        {
            return 5; 
        }
        // 3 min | 1/2/3 <-> L
        else if((["1", "2", "3"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["1", "2", "3"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "UnionSq")
    {
        // 3 min | N/Q/R/W <-> L
        if((["N", "Q", "R", "W"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["N", "Q", "R", "W"].includes(transferLine)))
        {
            return 3;
        }
        // 3 min | N/Q/R/W <-> 4/5/6
        else if((["N", "Q", "R", "W"].includes(startLine) && ["4", "5", "6"].includes(transferLine)) || (["4", "5", "6"].includes(startLine) && ["N", "Q", "R", "W"].includes(transferLine)))
        {
            return 3; 
        }
        // 3 min | 4/5/6 <-> L
        else if((["4", "5", "6"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["4", "5", "6"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "Bleecker")
    {
        if((["B", "D", "F", "M"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["B", "D", "F", "M"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "Delancey")
    {
        if((["M", "J", "Z"].includes(startLine) && transferLine === "F") || (startLine === "F" && ["M", "J", "Z"].includes(transferLine)))
        {
            return 2;
        }
        return 0;
    }
    else if(stationID === "Canal")
    {
        // 2 min | J/Z <-> N/Q
        if((["J", "Z"].includes(startLine) && ["N", "Q"].includes(transferLine)) || (["N", "Q"].includes(startLine) && ["J", "Z"].includes(transferLine)))
        {
            return 2;
        }
        // 4 min | J/Z/ <-> 6
        else if((["J", "Z"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["J", "Z"].includes(transferLine)))
        {
            return 4;
        }
        // 6 min | J/Z <-> R/W
        else if((["J", "Z"].includes(startLine) && ["R", "W"].includes(transferLine)) || (["R", "W"].includes(startLine) && ["J", "Z"].includes(transferLine)))
        {
            return 6;
        }
        // 3 min | N/Q <-> 6
        else if((["N", "Q"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["N", "Q"].includes(transferLine)))
        {
            return 3;
        }
        // 4 min | N/Q <-> R/W
        else if((["N", "Q"].includes(startLine) && ["R", "W"].includes(transferLine)) || (["R", "W"].includes(startLine) && ["N", "Q"].includes(transferLine)))
        {
            return 4;
        }
        // 5 min | R/W <-> 6
        else if((["R", "W"].includes(startLine) && transferLine === "6") || (startLine === "6" && ["R", "W"].includes(transferLine)))
        {
            return 5;
        }
        return 0;
    }
    else if(stationID === "BrooklynBridge")
    {
        if((["4", "5", "6"].includes(startLine) && ["J", "Z"].includes(transferLine)) || (["J", "Z"].includes(startLine) && ["4", "5", "6"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "WTC")
    {
        // 2 min | 2/3 <-> A/C
        if((["2", "3"].includes(startLine) && ["A", "C"].includes(transferLine)) || (["A", "C"].includes(startLine) && ["2", "3"].includes(transferLine)))
        {
            return 2;
        }
        // 3 min | 2/3 <-> E
        else if((["2", "3"].includes(startLine) && transferLine === "E") || (startLine === "E" && ["2", "3"].includes(transferLine)))
        {
            return 3;
        }
        // 6 min | 2/3 <-> R/W
        else if((["2", "3"].includes(startLine) && ["R", "W"].includes(transferLine)) || (["R", "W"].includes(startLine) && ["2", "3"].includes(transferLine)))
        {
            return 6;
        }
        // 2 min | A/C <-> E
        else if((["A", "C"].includes(startLine) && transferLine === "E") || (startLine === "E" && ["A", "C"].includes(transferLine)))
        {
            return 2;
        }
        // 5 min| A/C <-> R/W
        else if((["A", "C"].includes(startLine) && ["R", "W"].includes(transferLine)) || (["R", "W"].includes(startLine) && ["A", "C"].includes(transferLine)))
        {
            return 5;
        }
        // 4 min| R/W <-> E
        else if((["R", "W"].includes(startLine) && transferLine === "E") || (startLine === "E" && ["R", "W"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "Fulton")
    {
        // 2 min | 4/5 <-> A/C
        if((["4", "5"].includes(startLine) && ["A", "C"].includes(transferLine)) || (["A", "C"].includes(startLine) && ["4", "5"].includes(transferLine)))
        {
            return 2;
        } 
        // 4 min | 4/5 <-> J/Z
        else if((["4", "5"].includes(startLine) && ["J", "Z"].includes(transferLine)) || (["J", "Z"].includes(startLine) && ["4", "5"].includes(transferLine)))
        {
            return 4;
        }
        // 5 min | 4/5 <-> 2/3
        else if((["4", "5"].includes(startLine) && ["2", "3"].includes(transferLine)) || (["2", "3"].includes(startLine) && ["4", "5"].includes(transferLine)))
        {
            return 5;
        }
        // 2 min | A/C <-> J/Z
        else if((["A", "C"].includes(startLine) && ["J", "Z"].includes(transferLine)) || (["J", "Z"].includes(startLine) && ["A", "C"].includes(transferLine)))
        {
            return 2;
        }
        // 2 min | A/C <-> 2/3
        else if((["A", "C"].includes(startLine) && ["2", "3"].includes(transferLine)) || (["2", "3"].includes(startLine) && ["A", "C"].includes(transferLine)))
        {
            return 2;
        }
        // 3 min | J/Z <-> 2/3
        else if((["J", "Z"].includes(startLine) && ["2", "3"].includes(transferLine)) || (["2", "3"].includes(startLine) && ["J", "Z"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "SouthFerry")
    {
        if((["R", "W"].includes(startLine) && transferLine === "1") || (startLine === "1" && ["R", "W"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "YankeeStadium")
    {
        if((["B", "D"].includes(startLine) && transferLine === "4") || (startLine === "4" && ["B", "D"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "149StGrandConcourse")
    {
        if((["2", "5"].includes(startLine) && transferLine === "4") || (startLine === "4" && ["2", "5"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "CourtSq")
    {
        // 4 min | E/F <-> G
        if((["E", "F"].includes(startLine) && transferLine === "G") || (startLine === "G" && ["E", "F"].includes(transferLine)))
        {
            return 4;
        }
        // 6 min | E/F <-> 7
        else if((["E", "F"].includes(startLine) && transferLine === "7") || (startLine === "7" && ["E", "F"].includes(transferLine)))
        {
            return 6;
        }
        // 3 min | G <-> 7
        else if((startLine === "G" && transferLine === "7") || (startLine === "7" && transferLine === "G"))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "RooseveltAv")
    {
        if((["E", "F", "M", "R"].includes(startLine) && transferLine === "7") || (startLine === "7" && ["E", "F", "M", "R"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "MetropolitanAv")
    {
        return 3;
    }
    else if(stationID === "MyrtleWyckoffAvs")
    {
        return 3;
    }
    else if(stationID === "CourtSt")
    {
        // 3 min | R <-> 2/3
        if((startLine === "R" && ["2", "3"].includes(transferLine)) || (["2", "3"].includes(startLine) && transferLine === "R"))
        {
            return 3;
        }
        // 2 min | 2/3 <-> 4/5
        else if((["2", "3"].includes(startLine) && ["4", "5"].includes(transferLine)) || (["4", "5"].includes(startLine) && ["2", "3"].includes(transferLine)))
        {
            return 2;
        }
        // 5 min | R <-> 4/5
        else if((startLine === "R" && ["4", "5"].includes(transferLine)) || (["4", "5"].includes(startLine) && transferLine === "R"))
        {
            return 5;
        }
        return 0;
    }
    else if(stationID === "JaySt")
    {
        // 3 min | R <-> A/C/F
        if((startLine === "R" && ["A", "C", "F"].includes(transferLine)) || (["A", "C", "F"].includes(startLine) && transferLine === "R"))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "Barclays")
    {
        // 3 min | 2/3/4/5 <-> B/Q
        if((["2", "3", "4", "5"].includes(startLine) && ["B", "Q"].includes(transferLine)) || (["B", "Q"].includes(startLine) && ["2", "3", "4", "5"].includes(transferLine)))
        {
            return 3;
        }
        // 5 min | D/N/R <-> B/Q
        else if((["D", "N", "R"].includes(startLine) && ["B", "Q"].includes(transferLine)) || (["B", "Q"].includes(startLine) && ["D", "N", "R"].includes(transferLine)))
        {
            return 5;
        }
        // 3 min | 2/3/4/5 <-> D/N/R
        else if((["2", "3", "4", "5"].includes(startLine) && ["D", "N", "R"].includes(transferLine)) || (["D", "N", "R"].includes(startLine) && ["2", "3", "4", "5"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "FranklinAv")
    {
        return 3;
    }
    else if(stationID === "BroadwayJunction")
    {
        // 3 min| J/Z <-> L
        if((["J", "Z"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["J", "Z"].includes(transferLine)))
        {
            return 3;
        }
        // 5 min | J/Z <-> A/C
        else if((["J", "Z"].includes(startLine) && ["A", "C"].includes(transferLine)) || (["A", "C"].includes(startLine) && ["J", "Z"].includes(transferLine)))
        {
            return 5;
        }
        // 5 min | A/C <-> L
        else if((["A", "C"].includes(startLine) && transferLine === "L") || (startLine === "L" && ["A", "C"].includes(transferLine)))
        {
            return 5;
        }
        return 0;
    }
    else if(stationID === "4Av9St")
    {
        // 3 min | F/G <-> R
        if((["F", "G"].includes(startLine) && transferLine === "R") || (startLine === "R" && ["F", "G"].includes(transferLine)))
        {
            return 3;
        }
        return 0;
    }
    else if(stationID === "MedgarEvers")
    {
        // 4 min | 2/3/4/5 <-> S
        if((["2", "3", "4", "5"].includes(startLine) && transferLine === "S") || (startLine === "S" && ["2", "3", "4", "5"].includes(transferLine)))
        {
            return 4;
        }
        return 0;
    }
    else if(stationID === "NewUtrecht")
    {
        return 3;
    }
    else
    {
        return 0;
    }
   
}
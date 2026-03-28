export default 
{
    station: "BarclaysCenter",

    carRules: [
        // [D/N/R] -> [B/Q] and [2/3/4/5]
        {
            fromLines: ["D", "N", "R"],
            direction: "uptown",
            toLines: ["B", "Q", "2", "3", "4", "5"],
            bestCar: "Front",
            reason: "Stairs are closer to the front of the train. Avoid Rear cars for extra walking."
        },
        {
            fromLines: ["D", "N", "R"],
            direction: "downtown",
            toLines: ["B", "Q", "2", "3", "4", "5"],
            bestCar: "Rear",
            reason: "Stairs are closer to the Rear of the train. Avoid front cars for extra walking."
        },
    
        // [2/3/4/5] to [D/N/R]
        {
            fromLines: ["2", "3", "4", "5"],
            direction: ["uptown", "downtown"],
            toLines: ["D", "N", "R"],
            bestCar: "Middle",
            reason: "Middle cars provide easier access to the stairs to the [D/N/R] platform."
        },

        // [2/3/4/5] to [B/Q]
        {
            fromLines: ["2", "3", "4", "5"],
            direction: "uptown",
            toLines: ["B", "Q"],
            bestCar: "Rear",
            reason: "Quicker access to the stairs leading to the [B/Q] platform."
        },
        {
            fromLines: ["2", "3", "4", "5"],
            direction: "downtown",
            toLines: ["B", "Q"],
            bestCar: "Front",
            reason: "Quicker access to the stairs leading to the [B/Q] platform."
        },
        
        // [B/Q] -> [D/N/R]
        {
            fromLines: ["B", "Q"],
            direction: ["uptown", "downtown"],
            toLines: ["D", "N", "R"],
            bestCar: "Middle",
            reason: "Stairs leading to the [D/N/R] are located at the center of the platform."
        },

        // [B/Q] -> [2/3/4/5] 
        {
            fromLines: ["B", "Q"],
            direction: "uptown",
            toLines: ["2", "3", "4", "5"],
            bestCar: "Rear",
            reason: "Quicker access to the stairs leading to the [2/3/4/5] platform."
        },
        {
            fromLines: ["B", "Q"],
            direction: "downtown",
            toLines: ["2", "3", "4", "5"],
            bestCar: "Front",
            reason: "Quicker access to the stairs leading to the [2/3/4/5] platform."
        }
  ]
};
export function matchCar(stationData, fromLine, toLine, direction) 
{
    return stationData.carRules.find((rule) => {
        // Gets the 1st train then the 2nd train youre transfering to (Example: From N train to 5 train)
        const getFirstTrain = rule.fromLines.includes(fromLine);
        const getTransferTrain = rule.toLines.includes(toLine);

        // Gets direction-based train (Ex: Uptown N train / Downtown N)
        const getDirection = Array.isArray(rule.direction) ? rule.direction.includes(direction) : rule.direction === direction;

        return getFirstTrain && getTransferTrain && getDirection;
    });
}
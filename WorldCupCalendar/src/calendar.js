const CALENDAR_URL = "https://www.googleapis.com/calendar/v3/calendars/primary/events";

const colorIds = {
    Tomato: "11",
    Tangerine: "6",
    Banana: "5",
    Basil: "10",
    Sage: "2",
    Peacock: "7",
    Blueberry: "9",
    Lavender: "1",
    Grape: "3",
    Flamingo: "4",
    Graphite: "8",
    Default: null
};

export async function checkIfEventExists(accessToken, game) 
{
    const response = await fetch(
        `${CALENDAR_URL}?q=${encodeURIComponent(game.title)}&timeMin=${game.start}&timeMax=${game.end}`,
        { headers: { Authorization: `Bearer ${accessToken}` }}
    );
    const data = await response.json();
    return data.items && data.items.length > 0;
}

export async function addEvent(accessToken, game, matchColor, favoriteCountries, favoriteCountryColor) 
{
    const eventExists = await checkIfEventExists(accessToken, game);

    if (eventExists) 
    {
        console.log(`${game.title} already exists`);
        return;
    }

    const event = {
        summary: game.title,
        description: game.description,
        location: game.location,
        start: { dateTime: game.start },
        end: { dateTime: game.end },
        reminders: {
            useDefault: false, 
            overrides: [
                { method: "popup", minutes: 360}
            ]
        }
    };

    const isFavoriteGame = favoriteCountries.some((country) => game.description.includes(country));

    if (isFavoriteGame && colorIds[favoriteCountryColor]) 
    {
        event.colorId = colorIds[favoriteCountryColor];
    }
    else if (colorIds[matchColor]) 
    {
        event.colorId = colorIds[matchColor];
    }


    return fetch(CALENDAR_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });
}
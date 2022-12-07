const url =
    "https://lernia-sjj-assignments.vercel.app/api/booking/available-times";

export const queryJson = async(date, challengeId) => {
    const dateInput = date;
    // const idInput = challengeId;
    const requestUrl = `${url}?date=${dateInput}&challenge=3`;
    console.log(requestUrl);

    const res = await fetch(requestUrl);

    const jsonResponse = await res.json();
    const data = jsonResponse;
    // console.log(data);

    return data.slots;
};
const url =
    "https://lernia-sjj-assignments.vercel.app/api/booking/available-times";

export const queryJson = async(date, challengeId) => {
    const dateInput = date;
    const idInput = challengeId;
    const requestUrl = `${url}?date=${dateInput}&challenge=3`;
    console.log(requestUrl);

    // 2022-12-12
    const res = await fetch(requestUrl);

    const jsonResponse = await res.json();
    const data = jsonResponse;
    console.log(data);

    /*     { date: "2022-12-12T00:00:00.000Z", slots: Array }*/
    console.log(data.slots);

    /*     ["11:00", "12:30", "14:00", "15:30", "18:30", "20:00", "20:00"]
     */
    return data.slots;

    test();
};

function test() {
    console.log("export test");
}
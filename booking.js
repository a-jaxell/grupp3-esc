import { queryJson } from "./bookingAPI.js";

queryJson();

const takeData = async() => {
    console.log(await queryJson("2022-12-12", 6));
    const dataArray = await queryJson(
        document.getElementById("date-input").value
    );

    /*             document.querySelector(".cardID") */
    console.log(dataArray);

    ["värde1", "värde2", "osv"];
    for (let i = 0; i < dataArray.length; i++) {
        const option = document.createElement("option");
        option.innerText = array[i];
        document.getElementById("time-input").appendChild(option);
    }
};

const popOutButton = document.getElementById("bookingButton");

const bg_container = document.querySelector(".booking-container");
// Add event listeners
let titleFirstPage = document.createElement("h1");
titleFirstPage.className = "title-firstPage";
titleFirstPage.innerText = "Step one of booking";

let paragraphOne = document.createElement("p");
paragraphOne.className = "paragraph-one";
paragraphOne.innerText = "Date:";

let dateInput = document.createElement("input");
dateInput.className = "date-input";
dateInput.setAttribute("id", "date-input");
dateInput.placeholder = "YYYY-MM-DD";
/* dateInput.required = true;
        dateInput.setAttribute("pattern", "d{4}-(?:d{2}-){2}"); */
let dateButton = document.createElement("button");
dateButton.className = "dating-button";
dateButton.innerText = "Search avaliable times";

function returnText() {
    let input = document.getElementById("userInput").value;
    alert(input);
}

popOutButton.addEventListener("click", popOutNow());

function popOutNow() {
    document.getElementById("bookingButton").onclick = function() {
        document.querySelector(".booking-container").style.display = "flex";
        bg_container.appendChild(titleFirstPage);
        bg_container.appendChild(paragraphOne);
        bg_container.appendChild(dateInput);
        //
        bg_container.appendChild(dateButton);

        /*  if (dateInput.match( ? pattern ? ) && dateButton.onclick()) {}return; */
        dateButton.addEventListener("click", evalInput);
    };

    async function evalInput() {
        const regex = /^\d{4}-\d{2}-\d{2}$/; //right format
        const date = new Date();
        const validDate = addOneYear(date);
        console.log("ValidDate: ", validDate);

        const userInput = dateInput.value.trim();
        const inputDate = new Date(userInput);

        if (userInput.match(regex) === null) {
            console.log("You entered wrong format");
        } else if (inputDate > validDate) {
            console.log("choose a date within the next year");
        } else {
            const availTimes = await queryJson(userInput); // !availTimes.length === 0)
            okFormatAndTime(availTimes);
        }
    }

    function okFormatAndTime(availTimes) {
        if (availTimes.length === 0) {
            //TypeError: undefined is not a function (near '...availTimes...')
            //TypeError: undefined is not an object (evaluating 'availTimes.length')
            console.log("No times found on that date");
        } else {
            console.log("These are the available dates: ", availTimes);
            secondPage();

            // thirdPage();
        }
    }

    function addOneYear(date) {
        date.setFullYear(date.getFullYear() + 1); // 2022-12-12"

        return date;
    }
}

/* Failed to load resource: the server responded with a status of 400()

        {error: "Invalid date. Must be within next year. Use ?date=2021-05-01 format"}

         */
/* if (dateStr.match(regex) === null) {
            return false;
        } */
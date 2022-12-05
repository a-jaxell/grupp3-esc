import { queryJson } from "./bookingAPI.js";
import { secondPage } from "./secondPage.js";

queryJson();

/* async function timesAvaliable = async(availTimes) => {
    for (let i = 0; i < availTimes.length; i++) {
        const option = document.createElement("option");
        option.innerText = array[i];
        document.getElementById("time-input").appendChild(option);
    }
};


async function timesAvaliable() {
    const times = await queryJson();
    for (let i = 0; i < times.length; i++) {
        const option = document.createElement("option");
        option.innerText = array[i];
        document.getElementById("time-input").appendChild(option);
    }
}; */

const popOutButton = document.getElementById("bookingButton");
let challengeData;

const body = document.querySelector("body");
// Add event listeners

let bookingContainer = document.createElement("div");
bookingContainer.className = "booking-container";

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

let timeInput = document.createElement("select");
timeInput.className = "time-input";
timeInput.setAttribute("id", "time-input");

// let timeOptions = document.createElement("option");
// timeOptions.setAttribute("id", "time-options");

function returnText() {
    let input = document.getElementById("userInput").value;
    alert(input);
}

export let globalDate;
export let globalTime = document.getElementById("time-input");
popOutButton.addEventListener("click", bookingModal());

export function bookingModal(data) {
    //recieves challenge obj.
    challengeData = data; //assigns the param val to global file scope.
    document.getElementById("bookingButton").onclick = function() {
        document.querySelector(".booking-container").style.display = "flex";

        bookingContainer.appendChild(titleFirstPage);
        bookingContainer.appendChild(paragraphOne);
        bookingContainer.appendChild(dateInput);
        //bg_container.appendChild(timeInput);
        bookingContainer.appendChild(dateButton);
        body.append(bookingContainer);

        /*  if (dateInput.match( ? pattern ? ) && dateButton.onclick()) {}return; */
        dateButton.addEventListener("click", evalInput);
    };

    async function evalInput() {
        const regex = /^\d{4}-\d{2}-\d{2}$/; //right format (yyyy-mm-dd)
        const date = new Date();
        const validDate = addOneYear(date);
        //console.log("ValidDate: ", validDate);

        const userInput = dateInput.value.trim();
        const inputDate = new Date(userInput);

        if (userInput.match(regex) === null) {
            alert("You have entered the wrong format!");
            console.log("You entered wrong format");
        } else if (inputDate > validDate) {
            alert("You must choose a date within the next year!");
            console.log("Choose a date within the next year");
        } else {
            const availTimes = await queryJson(userInput); // !availTimes.length === 0)
            okFormatAndTime(availTimes);

            globalDate = userInput;
            secondPage(availTimes, challengeData);
        }

        //secondPage();
    }

    function okFormatAndTime(availTimes) {
        if (availTimes.length === 0) {
            //TypeError: undefined is not a function (near '...availTimes...')
            //TypeError: undefined is not an object (evaluating 'availTimes.length')
            console.log("No times found on that date");
        } else {
            console.log("These are the available dates: ", availTimes);
            //secondPage();

            // thirdPage();
        }
    }

    function addOneYear(date) {
        date.setFullYear(date.getFullYear() + 1); // 2022-12-12"

        return date;
    }
}
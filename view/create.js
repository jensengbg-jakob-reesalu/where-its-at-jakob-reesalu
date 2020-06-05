import { getEvents } from "./modules/getEvents.js"
import { createEvent } from "./modules/createEvent.js"
import { getValues } from "./modules/getValues.js"
import { verifyToken } from "./modules/verifyToken.js"

// Token check
(async function() {
    const token = sessionStorage.getItem("token");
    let check = await verifyToken(token);
    if (check.success !== true || check.user.role !== "admin") {
        location.href = "login.html";
    } else {
        document.querySelector("body").classList.toggle("display-none");
    };
})();

let btnElem = document.querySelector(".add-event-button");
let gridElem = document.querySelector(".events-grid");
let eventsArray = [];

// Getting events to gridElem
(async function() {
    eventsArray = await getEvents();
    await listEvents(eventsArray);
})();

btnElem.addEventListener("mousedown", () => {
    btnElem.classList.toggle("click");
});

btnElem.addEventListener("mouseup", async () => {
    let inputs = document.querySelectorAll("input");
    btnElem.classList.toggle("click");
    let values = getValues(inputs);
    clearInputs(inputs);
    let created = await createEvent(values);
    console.log(created);
    eventsArray = await getEvents();
    await clearGrid();
    await listEvents(eventsArray);
});



// Functions
function listEvents(array) {    
    array.forEach(object => {
        let nameP = document.createElement("p");
        let whereP = document.createElement("p");
        let ticketsP = document.createElement("p");
        let soldP = document.createElement("p");
        nameP.classList.toggle("grid-p");
        nameP.classList.toggle("grid-p-name");
        whereP.classList.toggle("grid-p");
        ticketsP.classList.toggle("grid-p");
        soldP.classList.toggle("grid-p");

        nameP.innerHTML += object.name;
        whereP.innerHTML += object.where;
        ticketsP.innerHTML += object.ticketsAvailable;
        soldP.innerHTML += object.ticketsSold;
        
        gridElem.appendChild(nameP);
        gridElem.appendChild(whereP);
        gridElem.appendChild(ticketsP);
        gridElem.appendChild(soldP);
    });
};

function clearGrid() {
    let gridPs = document.querySelectorAll(".grid-p");
    gridPs.forEach(p => {
        gridElem.removeChild(p);
    });
};

function clearInputs(array) {
    array.forEach(input => {
        input.value = "";
    });
};
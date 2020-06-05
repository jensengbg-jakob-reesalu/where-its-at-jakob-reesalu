import { getEvents } from "./modules/getEvents.js"
import { createEvent } from "./modules/createEvent.js"
import { getValues } from "./modules/getValues.js"
import { verifyToken } from "./modules/verifyToken.js"

let btnElem = document.querySelector(".add-event-button");
let gridElem = document.querySelector(".events-grid");

// Verify token
(async function() {
    const token = sessionStorage.getItem("token");
    let check = await verifyToken(token);
    if (check.success !== true || check.user.role !== "admin") {
        location.href = "login.html";
    } else {
        document.querySelector("body").classList.toggle("display-none");
    };
})();

// Getting events to gridElem
(async function() {
    let events = await getEvents();
    await listEvents(events);
})();

// Eventlisteners to button
btnElem.addEventListener("mousedown", () => {
    btnElem.classList.toggle("click");
});

btnElem.addEventListener("mouseup", async () => {
    btnElem.classList.toggle("click");
    let inputs = document.querySelectorAll("input");
    let values = getValues(inputs);
    let created = await createEvent(values);
    if (created.success) {
        clearInputs(inputs);
    } else {
        console.log(created);
    };
    let updatedEvents = await getEvents();
    await clearGrid();
    await listEvents(updatedEvents);
});




// Functions
function listEvents(events) {    
    events.forEach(event => {
        let elems = createElems();
        setClasses(elems);
        let elemsFilled = fillElems(elems, event);
        appendElems(elemsFilled, gridElem);
    });
};

function createElems() {
    let obj = {};
    obj.nameP = document.createElement("p");
    obj.whereP = document.createElement("p");
    obj.ticketsP = document.createElement("p");
    obj.soldP = document.createElement("p");
    return obj;
};

function setClasses(obj) {
    obj.nameP.classList.toggle("grid-p");
    obj.nameP.classList.toggle("grid-p-name");
    obj.whereP.classList.toggle("grid-p");
    obj.ticketsP.classList.toggle("grid-p");
    obj.soldP.classList.toggle("grid-p");
};

function fillElems(elemsObj, currentEvent) {
    elemsObj.nameP.innerHTML += currentEvent.name;
    elemsObj.whereP.innerHTML += currentEvent.where;
    elemsObj.ticketsP.innerHTML += currentEvent.ticketsAvailable;
    elemsObj.soldP.innerHTML += currentEvent.ticketsSold;
    return elemsObj;
};

function appendElems(elemsObj, parentElem) {
    parentElem.appendChild(elemsObj.nameP);
    parentElem.appendChild(elemsObj.whereP);
    parentElem.appendChild(elemsObj.ticketsP);
    parentElem.appendChild(elemsObj.soldP);
};

function clearGrid() {
    let pElems = document.querySelectorAll(".grid-p");
    pElems.forEach(p => {
        gridElem.removeChild(p);
    });
};

function clearInputs(array) {
    array.forEach(input => {
        input.value = "";
    });
};
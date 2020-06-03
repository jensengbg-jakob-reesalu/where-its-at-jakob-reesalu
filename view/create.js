import { getEvents } from "./modules/getEvents.js"

let btnElem = document.querySelector(".add-event-button");
let gridElem = document.querySelector(".events-grid");
let eventsArray = [];

(async function() {
    eventsArray = await getEvents();
    await listEvents(eventsArray);
})();

btnElem.addEventListener("mousedown", () => {
    btnElem.classList.toggle("click");
});

btnElem.addEventListener("mouseup", async () => {
    btnElem.classList.toggle("click");
    let values = getValues();
    await createEvent(values);
    eventsArray = await getEvents();
    await clearEvents();
    await listEvents(eventsArray);
});

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

function getValues() {
    let obj = {}
    obj.name = document.getElementById("name-input").value;
    obj.where = document.getElementById("where-input").value;
    obj.date = document.getElementById("date-input").value;
    obj.from = document.getElementById("from-input").value;
    obj.to = document.getElementById("to-input").value;
    obj.tickets = document.getElementById("tickets-input").value;
    obj.price = document.getElementById("price-input").value;
};

function clearEvents() {
    let gridPs = document.querySelectorAll(".grid-p");
    console.log(gridPs);
    gridPs.forEach(p => {
        gridElem.removeChild(p);
    });
}

function createEvent(object) {

}
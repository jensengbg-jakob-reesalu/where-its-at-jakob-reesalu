import { getEvents } from "./modules/getEvents.js";

let containerElem = document.querySelector(".events-container");
let btnElem = document.querySelector("#reset-btn");

(async function() {
    let eventsArray = await getEvents();
    await listEvents(eventsArray);
})();

// Functions
function listEvents(events) {    
    events.forEach(event => {
        let elems = createElems();
        setClasses(elems);
        let elemsFilled = fillElems(elems, event);
        appendElems(containerElem, elemsFilled);

        elems.section.addEventListener("click", () => {
            sessionStorage.setItem("event-object", JSON.stringify(event));
            location.href = "buy.html";
        });
    });
};

function createElems() {
    let obj = {};
    obj.section = document.createElement("section");
    obj.date = document.createElement("section");
    obj.rest = document.createElement("section");
    obj.timePrice = document.createElement("div");
    return obj;
};

function setClasses(obj) {
    obj.section.classList.toggle("event-section");
    obj.date.classList.toggle("section-date")
    obj.rest.classList.toggle("section-rest")
    obj.timePrice.classList.toggle("div-time-price")
};

function fillElems(elemsObj, currentEvent) {
    let dateString = currentEvent.date;
    let dateArray = dateString.split(" ");
    elemsObj.date.innerHTML += `<span>${dateArray[0]}</span>`;
    elemsObj.date.innerHTML += `<span>${dateArray[1]}</span>`;
    elemsObj.rest.innerHTML += `<span class="rest-name">${currentEvent.name}</span>`;
    elemsObj.rest.innerHTML += `<span class="rest-where">${currentEvent.where}</span>`;
    elemsObj.timePrice.innerHTML += `<span class="rest-time">${currentEvent.fromTime} - ${currentEvent.toTime}</span>`;
    elemsObj.timePrice.innerHTML += `<span class="rest-price">${currentEvent.price}</span>`;
    return elemsObj;
};

function appendElems(parentElem, elemsObj) {
    parentElem.appendChild(elemsObj.section);
    elemsObj.section.appendChild(elemsObj.date);
    elemsObj.section.appendChild(elemsObj.rest);
    elemsObj.rest.appendChild(elemsObj.timePrice);
};
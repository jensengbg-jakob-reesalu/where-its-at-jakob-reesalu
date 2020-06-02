import { orderTicket } from "./modules/orderTicket.js";

let event = localStorage.getItem("event-object");
event = JSON.parse(event);
let time = ` kl ${event.fromTime} - ${event.toTime}`;

document.querySelector(".buy-name").innerHTML += event.name; 
document.querySelector(".buy-date-time").innerHTML += event.date; 
document.querySelector(".buy-date-time").innerHTML += time; 
document.querySelector(".buy-location").innerHTML += `@ ${event.where}`; 
document.querySelector(".buy-price").innerHTML += `${event.price} sek`; 

let button = document.querySelector("button");
button.addEventListener("click", async () => {
    await orderTicket(event.name);
    location.href = "ticket.html";
});

import { orderTicket } from "./modules/orderTicket.js";

let event = sessionStorage.getItem("event-object");
event = JSON.parse(event);
let time = ` kl ${event.fromTime} - ${event.toTime}`;

document.querySelector(".buy-name").innerHTML += event.name; 
document.querySelector(".buy-date-time").innerHTML += event.date; 
document.querySelector(".buy-date-time").innerHTML += time; 
document.querySelector(".buy-location").innerHTML += `@ ${event.where}`; 
document.querySelector(".buy-price").innerHTML += `${event.price} sek`; 

let button = document.querySelector("button");
button.addEventListener("click", async () => {
    let response = await orderTicket(event.name);
    if (response.success) {
        sessionStorage.setItem("ticket-ID", response.ticket);
        location.href = "ticket.html";
    } else {
        let section = document.querySelector(".sold-out-section");
        section.classList.toggle("hidden");
        let button = document.querySelector(".sold-out-button");
        button.innerHTML = response.message;
        button.addEventListener("click", ()=> {
            location.href = "index.html";
        })
    };
});

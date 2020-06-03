let eventObject = sessionStorage.getItem("event-object");
let event = JSON.parse(eventObject);

const ticketID = sessionStorage.getItem("ticket-ID");

document.querySelector("#what-p").innerHTML = event.name;
document.querySelector("#where-p").innerHTML = event.where;
document.querySelector("#when-p").innerHTML = event.date;
document.querySelector("#from-p").innerHTML = event.fromTime;
document.querySelector("#to-p").innerHTML = event.toTime;
document.querySelector("#ticket-p").innerHTML = `Biljettnummer: ${ticketID}`;
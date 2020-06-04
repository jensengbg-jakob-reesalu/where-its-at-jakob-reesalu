import { verifyTicket } from "./modules/verifyTicket.js"

let token = sessionStorage.getItem("token");
if (!token) {
    location.href = "login.html";
} else {
    let body = document.querySelector("body");
    body.classList.toggle("display-none");
};

let btnElem = document.querySelector("button");
btnElem.addEventListener("click", async () => {
    let input = document.querySelector("input");
    let ticketID = input.value;
    let verification = await verifyTicket(ticketID);
    input.value = "";
    console.log(verification);
});
import { verifyTicket } from "./modules/verifyTicket.js"
import { verifyToken } from "./modules/verifyToken.js"


// Token check
(async function() {
    console.log("running check...")
    const token = sessionStorage.getItem("token");
    let check = await verifyToken(token);
    if (check.success !== true || check.user.role !== "staff") {
        location.href = "login.html";
    } else {
        document.querySelector("body").classList.toggle("display-none");
    };
})();

let btnElem = document.querySelector("button");
btnElem.addEventListener("click", async () => {
    let input = document.querySelector("input");
    let ticketID = input.value;
    let verification = await verifyTicket(ticketID);
    input.value = "";
    console.log(verification);
});
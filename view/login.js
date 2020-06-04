import { getValues } from "./modules/getValues.js"
import { login } from "./modules/login.js"

let btnElem = document.querySelector("button");
let inputs = document.querySelectorAll("input");

btnElem.addEventListener("click", async () => {
    const values = getValues(inputs);
    const loginObj = {
        username: values.användarnamn,
        password: values.lösenord
    };
    const loggedIn = await login(loginObj);
    console.log(loggedIn);
    const token = loggedIn.token;
    if (loggedIn.success) {
        sessionStorage.setItem("token", token);
        if (loginObj.username == "admin") {
            location.href = "create.html";
        } else {
            location.href = "verify.html";
        };
    };
});


// Server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// ROUTERS
const loginRouter = require("./controller/login-router");
const createRouter = require("./controller/create-router");
const verifyRouter = require("./controller/verify-router");

// APP.USE
app.use(express.static("view"));
app.use(bodyParser.json());

app.use("/api", loginRouter);
app.use("/api", createRouter);
app.use("/api", verifyRouter);

app.listen(8000, () => {
    console.log("Started server!");
});






// USED TO GET HASHED PASSWORDS
// const { hashPass } = require("./modules/bcrypt-functions");
// async function createHash() {
//     let newHash = await hashPass("pwd");
//     console.log("staff: ", newHash);
//     newHash = await hashPass("pwd");
//     console.log("admin: ", newHash);
// };
// createHash();
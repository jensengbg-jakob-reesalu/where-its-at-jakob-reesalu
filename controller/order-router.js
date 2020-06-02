const { Router } = require("express");
const router = new Router();

const { addTicket } = require("../model/ticket-functions");
const { generateTicket } = require("../controller/modules/generateTicket");

router.post("/order", async (req, res) => {
    let resObj = {
        success: false,
    };
    const body = req.body;
    console.log("This is body: ", body);
    const ticketID = generateTicket(6);
    console.log("ticketID: ", ticketID);
    const ticketAdded = await addTicket(body.name, ticketID);
    if (ticketAdded) {
        resObj.success = true;
    } else {
        resObj.message = "Event is sold out!";
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;
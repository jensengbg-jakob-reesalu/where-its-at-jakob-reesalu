const { Router } = require("express");
const router = new Router();

const { addTicket, increaseSold } = require("../model/ticket-functions");
const { generateTicket } = require("../controller/modules/generateTicket");

router.post("/order", async (req, res) => {
    let resObj = {
        success: false,
    };
    const body = req.body;
    const ticketID = generateTicket(6);
    const ticketAdded = addTicket(body.name, ticketID);
    if (ticketAdded) {
        resObj.success = true;
        resObj.ticket = ticketID;
        increaseSold(body.name);
        console.log(`(user) - Ordered ticket for '${body.name}', ticketID: "${ticketID}"`);
        console.log(`(database) - Added "${ticketID}" to '${body.name}'`);
    } else {
        resObj.message = "Event is sold out!";
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;
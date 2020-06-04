const { Router } = require("express");
const router = new Router();

const { findTicket, removeTicket } = require("../model/ticket-functions");

router.post("/verify", async (req, res) => {
    let resObj = {
        success: false
    };
    let body = req.body;
    const ticket = await findTicket(body.ticketID);
    if (ticket.exists) {
        await removeTicket(ticket.eventName, body.ticketID);
        console.log((`(staff) - Verified ticket "${body.ticketID}"`));
        console.log((`(database) - Removed ticket "${body.ticketID}"`));
        resObj.success = true;
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;
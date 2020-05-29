const { Router } = require("express");
const router = new Router();

const { findTicket, removeTicket } = require("../model/ticket-functions");

router.post("/verify", async (req, res) => {
    let resObj = {
        success: false
    };
    let body = req.body;
    const ticketExists = await findTicket(body.name, body.ticketID);
    if (ticketExists) {
        await removeTicket(body.name, body.ticketID);
        resObj.success = true;
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;
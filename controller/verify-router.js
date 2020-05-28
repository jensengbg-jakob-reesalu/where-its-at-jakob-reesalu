const { Router } = require("express");
const router = new Router();

const { findTicket, removeTicket } = require("../model/ticket-functions");



router.post("/verify", async (req, res) => {
    let resObj = {
        success: false
    };
    let body = req.body;
    const ticketExists = await findTicket(body.ticketID);
    if (ticketExists) {
        resObj.success = true;
        await removeTicket(body.ticketID);
    }
    res.send(JSON.stringify(resObj));
});

module.exports = router;
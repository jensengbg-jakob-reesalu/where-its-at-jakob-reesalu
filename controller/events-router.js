const { Router } = require("express");
const router = new Router();

const { getEvents } = require("../model/event-functions");

router.get("/events", async (req, res) => {
    const events = await getEvents();
    console.log(events);
    res.send(JSON.stringify(events));
});

module.exports = router;
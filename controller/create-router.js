const { Router } = require("express");
const router = new Router();

const { addEvent, findEvent } = require("../model/event-functions");

router.post("/create", async (req, res) => {
    let resObj = {
        success: false
    };
    const body = req.body;
    const eventConflict = await findEvent(body);
    if (eventConflict) {
        resObj.message = "Event already exists.";
    } else {
        const newEvent = await addEvent(body);
        if (newEvent) {
            console.log("(admin) Added event: ", body.name);
            resObj.success = true;
        }
    }
    res.send(JSON.stringify(resObj));
});

module.exports = router;
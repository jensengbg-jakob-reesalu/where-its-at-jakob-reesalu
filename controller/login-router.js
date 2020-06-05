const { Router } = require("express");
const router = new Router();
const jwt = require("jsonwebtoken");

const { getUser } = require("../model/getUser");
const { comparePasswords } = require("./modules/bcrypt-functions");

router.post("/login", async (req, res) => {
    let resObj = {
        success: false
    };
    const body = req.body;
    const user = await getUser(body.username);
    if (user == undefined) {
        resObj.message = "Wrong username or password!";
        return res.send(JSON.stringify(resObj));
    };
    const isAMatch = await comparePasswords(body.password, user.password);
    if (user && isAMatch) {
        const secretKey = "49aab262-64de-49ed-aa19-6e081ab78d5e";
        const token = jwt.sign({ 
            id: user.id,
            name: user.username,
            role: user.role 
        }, secretKey, { expiresIn: 600 });
        resObj.success = true;
        resObj.role = user.role;
        resObj.token = token;
    } else {
        resObj.message = "Wrong username or password!";
    };
    res.send(JSON.stringify(resObj));
});

module.exports = router;



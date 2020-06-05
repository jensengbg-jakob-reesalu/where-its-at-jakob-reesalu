const { Router } = require("express");
const router = new Router();
const jwt = require("jsonwebtoken");

router.get("/auth", async (req, res) => {
    const token = req.header("authorization").replace("Bearer ", "");
    let resObj = {
        success: false
    };
    if (token !== "null") {
        const secretKey = "49aab262-64de-49ed-aa19-6e081ab78d5e";
        try {
            const user = jwt.verify(token, secretKey);
            if (user) {
              resObj.success = true;
              resObj.user = user;
              console.log((`(server) - Verified user "${user.name}"`));
              res.send(JSON.stringify(resObj));
            }
        } catch (error) {
            console.log(`(server) - User failed to login: "${error.name}"`);
            res.status(403).send(JSON.stringify(resObj));
        } 
      }; 
    });

module.exports = router;

    
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
    async hashPass(passToHash) {
        return await bcrypt.hash(passToHash, saltRounds);
    },
    
    async comparePasswords(textPass, hashPass) {
        return await bcrypt.compare(textPass, hashPass);
    }
};


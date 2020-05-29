module.exports = {
    generateTicket(length) {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678901234567890123456789";
        let ticketID = "";
            for (let i = 0; i < length; i++) {
                ticketID += characters.charAt(Math.floor(Math.random() * characters.length));
            };
            return ticketID;
    }
};
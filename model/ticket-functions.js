const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = low(adapter);

module.exports = {
    async addTicket(name, id) {
        let ticketsAvailable = db.get("events").find({ name: name }).get("ticketsAvailable").value();
        if (ticketsAvailable > 0 ) {
            ticketsAvailable--;
            db.get("events").find({ name: name }).assign({ ticketsAvailable: ticketsAvailable }).write();
            db.get("events").find({ name: name }).get("bookedTickets").push({ ticketID: id }).write();
            return true;
        } else {
            return false;
        };
    },

    findTicket(name, id) {
        return db.get("events").find({ name: name }).get("bookedTickets").find({ ticketID: id }).value();
    },

    removeTicket(name, id) {    
        return db.get("events").find({ name: name }).get("bookedTickets").remove({ ticketID: id }).write();
    }
};

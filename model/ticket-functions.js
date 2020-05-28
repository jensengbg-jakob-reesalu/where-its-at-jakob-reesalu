const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = low(adapter);

module.exports = {
    findTicket(ticket) {
        let ticketFound = db.get("events").find({ bookedTickets: [{ ticketID: ticket }] }).value();
        if (ticketFound !== undefined) {
            return true;
        } else {
            return false;
        } 
    },

    removeTicket(ticket) {
        let ticketEvent = db.get("events").find({ bookedTickets: [{ ticketID: ticket }] }).value();
        ticketEvent.bookedTickets.


    }
};
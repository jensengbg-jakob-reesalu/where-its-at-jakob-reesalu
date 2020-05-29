const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = low(adapter);

module.exports = {
    findTicket(name, id) {
        return db.get("events").find({ name: name }).get("bookedTickets").find({ ticketID: id }).value();
    },

    removeTicket(name, id) {    
        return db.get("events").find({ name: name }).get("bookedTickets").remove({ ticketID: id }).write();
    }
};

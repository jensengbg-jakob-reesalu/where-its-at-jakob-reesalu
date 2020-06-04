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

    findTicket(id) {
        let ticketInfo = {
            eventName: "",
            exists: false
        };
        let events = db.get("events").value();
        events.forEach(event => {
            let bookedTickets = event.bookedTickets;
            let found = bookedTickets.find(object => object.ticketID == id);
            if (found) {
                ticketInfo.eventName = event.name;
                ticketInfo.exists = true;
            };    
        });
        return ticketInfo;
    },

    removeTicket(name, id) {    
        return db.get("events").find({ name: name }).get("bookedTickets").remove({ ticketID: id }).write();
    },
    
    increaseSold(name) {    
        let ticketsSold = db.get("events").find({ name: name }).get("ticketsSold").value();
        ticketsSold++;
        return db.get("events").find({ name: name }).assign({ ticketsSold: ticketsSold }).write();
    }
};

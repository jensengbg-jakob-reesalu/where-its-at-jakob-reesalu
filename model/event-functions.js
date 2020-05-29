const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = low(adapter);

module.exports = {
    addEvent(body) {
        db.get("events").push(body).write();
        return true; 
    },

    findEvent(body) {
        return db.get("events").find({ name: body.name }).value();
    },

    getEvents() {
        return db.get("events").value();
    }
};
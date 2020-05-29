const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("database.json");
const db = low(adapter);

module.exports = {
    addEvent(body) {
        db.get("events").push(body).write();
        return true; 
    },

    findEvent(name) {
        return db.get("events").find({ name: name }).value();
    },

    getEvents() {
        return db.get("events").value();
    }
};
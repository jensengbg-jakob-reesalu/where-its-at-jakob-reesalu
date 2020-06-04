export function getValues(array) {
    let obj = {};
    array.forEach(element => {
        let property = element.placeholder;
        property = property.toLowerCase();
        if (property.includes("date")) {
            property = "date";
        } else if (property.includes("from")) {
            property = "fromTime";
        } else if (property.includes("to")) {
            property = "toTime";
        } else if (property.includes("ticket")) {
            property = "ticketsAvailable";
        };
        obj[property] = element.value;
    });
    return obj;
};
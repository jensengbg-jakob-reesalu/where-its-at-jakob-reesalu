export async function orderTicket(inputName) {
    let url = "http://localhost:8000/api/order";
    let eventName = inputName;
    console.log(eventName);
    let obj = { name: eventName };
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });
    let data = await response.json();
    console.log(data);
};
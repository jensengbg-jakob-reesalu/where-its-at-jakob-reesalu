export async function verifyTicket(id) {
    let obj = {
        ticketID: id
    };
    let url = "http://localhost:8000/api/verify";
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" }
    });
    let data = await response.json();
    return data;
};
export async function getEvents() {
    let url = "http://localhost:8000/api/events";
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    return data;
};
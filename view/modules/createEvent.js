export async function createEvent(object) {
    let url = "http://localhost:8000/api/create";
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(object),
        headers: { "Content-Type": "application/json" }
    });
    let data = await response.json();
    return data;
} 
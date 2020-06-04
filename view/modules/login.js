export async function login(input) {
    let url = "http://localhost:8000/api/login";
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" } 
    });
    let data = await response.json();
    return data;
};
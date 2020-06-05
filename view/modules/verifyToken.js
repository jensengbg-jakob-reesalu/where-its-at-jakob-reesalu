export async function verifyToken(token) {
    let url = "http://localhost:8000/api/auth";
    let response = await fetch(url, {
        method: "GET",
        headers: { "Authorization": "Bearer " + token }
    });
    let data = await response.json();
    return data;
};
let eventsContainer = document.querySelector(".events-container");

const events = getEvents();

async function getEvents() {
    let url = "http://localhost:8000/api/events";
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    await listEvents(data);
};

function listEvents(array) {    
    array.forEach(object => {
        let section = document.createElement("section");
        section.classList.toggle("event-section");
        let sectionDate = document.createElement("section");
        sectionDate.classList.toggle("section-date")
        let sectionRest = document.createElement("section");
        sectionRest.classList.toggle("section-rest")
        let divTimePrice = document.createElement("div");
        divTimePrice.classList.toggle("div-time-price")
        
        let dateString = object.date;
        let dateArray = dateString.split(" ");
        sectionDate.innerHTML += `<span>${dateArray[0]}</span>`;
        sectionDate.innerHTML += `<span>${dateArray[1]}</span>`;
        sectionRest.innerHTML += `<span class="rest-name">${object.name}</span>`;
        sectionRest.innerHTML += `<span class="rest-where">${object.where}</span>`;
        divTimePrice.innerHTML += `<span class="rest-time">${object.fromTime} - ${object.toTime}</span>`;
        divTimePrice.innerHTML += `<span class="rest-price">${object.price}</span>`;
        
        eventsContainer.appendChild(section);
        section.appendChild(sectionDate);
        section.appendChild(sectionRest);
        sectionRest.appendChild(divTimePrice);

        section.addEventListener("click", () => {
            sessionStorage.setItem("event-object", JSON.stringify(object));
            location.href = "buy.html";
        });
    });
}

# where-its-at-jakob-reesalu

1. Staff-konto
användare: staff
lösenord: pwd

2. Admin-konto
användare: admin
lösenord: pwd



<!-- OLD CODE BACKUP -->
// let section = document.createElement("section");
// let sectionDate = document.createElement("section");
// let sectionRest = document.createElement("section");
// let divTimePrice = document.createElement("div");
// section.classList.toggle("event-section");
// sectionDate.classList.toggle("section-date")
// sectionRest.classList.toggle("section-rest")
// divTimePrice.classList.toggle("div-time-price")

// let dateString = object.date;
// let dateArray = dateString.split(" ");
// sectionDate.innerHTML += `<span>${dateArray[0]}</span>`;
// sectionDate.innerHTML += `<span>${dateArray[1]}</span>`;
// sectionRest.innerHTML += `<span class="rest-name">${object.name}</span>`;
// sectionRest.innerHTML += `<span class="rest-where">${object.where}</span>`;
// divTimePrice.innerHTML += `<span class="rest-time">${object.fromTime} - ${object.toTime}</span>`;
// divTimePrice.innerHTML += `<span class="rest-price">${object.price}</span>`;

// containerElem.appendChild(section);
// section.appendChild(sectionDate);
// section.appendChild(sectionRest);
// sectionRest.appendChild(divTimePrice);

<!-- create.js -->
function listEvents(array) {    
    array.forEach(object => {
        let nameP = document.createElement("p");
        let whereP = document.createElement("p");
        let ticketsP = document.createElement("p");
        let soldP = document.createElement("p");
        nameP.classList.toggle("grid-p");
        nameP.classList.toggle("grid-p-name");
        whereP.classList.toggle("grid-p");
        ticketsP.classList.toggle("grid-p");
        soldP.classList.toggle("grid-p");

        nameP.innerHTML += object.name;
        whereP.innerHTML += object.where;
        ticketsP.innerHTML += object.ticketsAvailable;
        soldP.innerHTML += object.ticketsSold;
        
        gridElem.appendChild(nameP);
        gridElem.appendChild(whereP);
        gridElem.appendChild(ticketsP);
        gridElem.appendChild(soldP);
    });
};

document.querySelector("#submit").addEventListener("click", function() {

    const departureCity = document.querySelector("#depart").value;
    const arrivalCity = document.querySelector("#arrivee").value;
    const departureDate = document.querySelector("#date-input").value;
    const rightPanel = document.querySelector("#right-panel");

    fetch(`http://localhost:3000/trips/${departureCity}/${arrivalCity}/${departureDate}`)
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            rightPanel.innerHTML = "";
            for (let i = 0; i < data.trips.length; i++) {
               
                rightPanel.innerHTML += `
                
                <div class="row">
                    <p class="travel">${data.trips[i].departure} > ${data.trips[i].arrival}</p>
                    <p class="departure-hour">${formatDepartureTime(data.trips[i].date)}</p>
                    <p class="price">${data.trips[i].price}€<p>
                    <button class="book">Réserver</button>
                </div>
                `;    
            } 
            
        } else {
            document.querySelector("#train-img").src = "./images/notfound.png";
            rightPanel.lastElementChild.textContent = "Pas de voyage trouvé."
        }       
    });
});
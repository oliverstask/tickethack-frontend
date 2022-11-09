document.querySelector(".options").innerHTML = ""; 

document.querySelector('.options').innerHTML += `
<h2>Mon panier</h2>
    <div class="row">
        <p class="travel">Paris > Lyon</p>
        <p class="departure-time">22:10</p>
        <p class="price">39€</p>
        <span class="delete">✖</span>	
    </div>
`;

document.querySelector('.options').innerHTML += `
    <div class="row">
        <p class="travel">Paris > Lyon</p>
        <p class="departure-time">22:10</p>
        <p class="price">39€</p>
        <span class="delete">✖</span>	
    </div>
`;

document.querySelector('.options').innerHTML += `
    <div id="finalcart">
        <p id="total">Total : 60€<p>
        <div></div>
        <button id="purchase">Acheter</button>
    </div>
`;


/*fetch('http://localhost:3000/trips')
	.then(response => response.json())
	.then(data => {
		if (data.cart) {
			for (let i = 0; i < data.cart.length; i++) {
				document.querySelector('simple-container').innerHTML += `
                <h2>Mon panier</h2>
				    <div class="options">
                        <div class="row">
				            <p class="travel">${data.cart[i].departure} > ${data.cart[i].arrival}</p>
				            <p class="departure-time">${data.cart[i].date}</p>
	                        <p class="price">${data.cart[i].price}€</p>
                            <span class="delete">✖</span>	
				        </div>
			        </div>
			`;
			}
			updateDeleteCityEventListener();
		}
	});*/


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeStoreName(newName) {
    document.getElementById("store-name").innerText = newName;
}
changeStoreName("MotionSport");


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
changeBackgroundColor("green")

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeFooterAddress(newAddress) {
    const footer = document.querySelector("footer p");
    footer.innerText = newAddress;
}
changeFooterAddress("Via Roma, 123, Milano");

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addClassToAmazonLinks() {
    const links = document.querySelectorAll("table a");
    links.forEach(link => link.classList.add("amazon-link"));
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function toggleImageVisibility() {
    const images = document.querySelectorAll(".product-img");
    images.forEach(img => img.classList.toggle("hidden"));
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function cambiaColorePrezzi() {
    const prezzi = document.querySelectorAll("table td:nth-child(4)");
    prezzi.forEach(prezzo => {
        prezzo.style.color = ("green")
    });
}
    

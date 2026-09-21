const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(item) {
            item.style.fontWeight = "normal";
        });

        this.style.fontWeight = "bold";
    });
});

const menuCards = document.querySelectorAll(".menu-card");

menuCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const dishName = card.querySelector("h3").textContent;

        alert("You selected: " + dishName);
    });
});

const reservationForm = document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const date = document.getElementById("reservationDate").value;
    const time = document.getElementById("reservationTime").value;
    const guests = document.getElementById("guests").value;

    document.getElementById("reservationMessage").textContent =
        "Thank you, " + name + "! Your table for " + guests +
        " guest(s) is requested for " + date + " at " + time + ".";

    reservationForm.reset();
});
// Navbar submenu logic
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    const button = item.querySelector("button");
    const submenu = item.querySelector(".submenu");

    button.addEventListener("click", () => {
        closeAllSubmenus();
        submenu.classList.add("show");
    });

    item.addEventListener("mouseleave", () => {
        submenu.classList.remove("show");
    });
});

function closeAllSubmenus() {
    document.querySelectorAll(".submenu").forEach(menu => {
        menu.classList.remove("show");
    });
}

// Mobile menu toggle
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

// Modal
function openModal(text) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalText").innerText = text;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

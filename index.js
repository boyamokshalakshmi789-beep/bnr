// ================= MENU DATA =================

const menuData = {
    "ఎమ్మిగనూరు టౌన్": [
        { text: "వార్డు 1", url: "http://127.0.0.1:5500/js%20folder/new%20js%2028.06.2026/index.html" },
        { text: "వార్డు 2", url: "https://website2.com" },
        { text: "వార్డు 3", url: "https://website3.com" },
        { text: "వార్డు 4", url: "https://website4.com" },
        { text: "వార్డు 5", url: "https://website5.com" }
    ],

    "ఎమ్మిగనూరు రూరల్": [
        { text: "వార్డు 1", url: "https://speechnotes.co/dictate/" },
        { text: "వార్డు 2", url: "https://website2.com" },
        { text: "వార్డు 3", url: "https://website3.com" },
        { text: "వార్డు 4", url: "https://website4.com" },
        { text: "వార్డు 5", url: "https://website5.com" }
    ],

    "గోనెగండ్ల మండలం": [
        { text: "గ్రామం 1", url: "https://website1.com" },
        { text: "గ్రామం 2", url: "https://website2.com" },
        { text: "గ్రామం 3", url: "https://website3.com" },
        { text: "గ్రామం 4", url: "https://website4.com" },
        { text: "గ్రామం 5", url: "https://website5.com" }
    ],

    "నందవరం మండలం": [
        { text: "గ్రామం 1", url: "https://website1.com" },
        { text: "గ్రామం 2", url: "https://website2.com" },
        { text: "గ్రామం 3", url: "https://website3.com" },
        { text: "గ్రామం 4", url: "https://website4.com" },
        { text: "గ్రామం 5", url: "https://website5.com" }
    ],

    "సంప్రదించండి": [
        { text: "📞 8142193789", url: "#" },
        { text: "Facebook", url: "https://facebook.com" },
        { text: "WhatsApp", url: "https://wa.me/918142193789" },
        { text: "🌐 Website", url: "#" },
        { text: "🕒 Monday - Saturday", url: "#" }
    ]
};

// ================= DROPDOWN =================

function showList(btn, name) {

    const old = btn.parentElement.querySelector(".dropdown-list");

    document.querySelectorAll(".dropdown-list").forEach(x => x.remove());

    if (old) return;

    let div = document.createElement("div");
    div.className = "dropdown-list";

    menuData[name].forEach(item => {

        let a = document.createElement("a");

        a.href = item.url;

        a.target = "_blank";

        a.textContent = item.text;

        div.appendChild(a);

    });

    btn.parentElement.appendChild(div);

    btn.parentElement.onmouseleave = () => div.remove();

}

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closePopup();

    }

});

// ================= POPUP DATA =================

const data = [

    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },

    {
        title: "Moksha Lakshmi",
        img: "bvj1.jpg",
        text: "ఇది రెండవ వివరాలు."
    },

    {
        title: "Shivamurthy",
        img: "3.jpg",
        text: "ఇది మూడవ వివరాలు."
    },

    {
        title: "Lalitha",
        img: "4.JPG",
        text: "ఇది నాల్గవ వివరాలు."
    },

    {
        title: "Lakshmi",
        img: "govindhu4.jpg",
        text: "ఇది ఐదవ వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "Boya Nagaraju",
        img: "moksha33.jpg",
        text: "ఇది మొదటి వివరాలు."
    }

];

// ================= POPUP =================
function details(i) {

    if (!data[i]) return;

    const popup = document.getElementById("popup");

    popup.style.display = "flex";

    popup.style.opacity = "0";

    setTimeout(() => {

        popup.style.opacity = "1";

    }, 10);

    document.getElementById("popImg").src = data[i].img;

    document.getElementById("popTitle").textContent = data[i].title;

    document.getElementById("popText").textContent = data[i].text;

}

// ================= MOBILE MENU =================

function openMenu() {
    document.getElementById("menu").classList.toggle("show");
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
window.addEventListener("click", function (e) {
    const popup = document.getElementById("popup");

    if (e.target === popup) {
        closePopup();
    }
});

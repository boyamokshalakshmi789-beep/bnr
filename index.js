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
        { text: "హాలహర్వి ", url: "https://website1.com" },
        { text: "ధర్మాపురం", url: "https://website2.com" },
        { text: "జగ్గాపురం", url: "https://website3.com" },
        { text: "హెచ్ బాపురం", url: "https://website4.com" },
        { text: "ముగతి", url: "https://website5.com" },
        { text: "నందవరం", url: "https://website5.com" },
        { text: "మాచపురం", url: "https://website5.com" },
        { text: "పూలచింత", url: "https://website5.com" },
        { text: "ఇబ్రహీంపురం", url: "https://website5.com" },
        { text: "నదికైరవాడి", url: "https://website5.com" },
        { text: "గంగవరం", url: "https://website5.com" },
        { text: "పెద్దకొత్తిలి", url: "https://website5.com" },
        { text: "చిన్నకొత్తిలి", url: "https://website5.com" },
        { text: "నాగలదిన్నె", url: "https://website5.com" },
        { text: "గురుజాల", url: "https://website5.com" },
        { text: "మిట్టసోమాపురం", url: "https://website5.com" },
        { text: "కనకవీడు", url: "https://website5.com" },
        { text: "పోనకలద్దిన్నె", url: "https://website5.com" },
        { text: "సోమలగూడురు", url: "https://website5.com" }
    ],

    "సంప్రదించండి": [
        { text: "📞 8142193789", url: "#" },
        { text: "Facebook", url: "https://facebook.com" },
        { text: "WhatsApp", url: "https://wa.me/918142193789" },
        { text: "🌐 Website", url: "#" },
        { text: "🕒 Monday - Saturday", url: "#" }
    ],
    "LOGIN": [
        { text: "LOGIN", url: "login.html" }
    ],
    "UPLOAD": [
        { text: "UPLOAD", url: "upload.html" }
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
        title: "ఫోటో 1",
        img: "ha19.jpeg",
        text: "హాలహర్వి గ్రామంలో సూపర్ సిక్స్ పథకాలు గురించి ఇంటిటి ప్రచారం"
    },

    {
        title: "ఫోటో 2",
        img: "ha27.jpeg",
        text: "ఇది రెండవ వివరాలు."
    },

    {
        title: "ఫోటో 3",
        img: "ha26.jpeg",
        text: "ఇది మూడవ వివరాలు."
    },

    {
        title: "ఫోటో 4",
        img: "ha34.jpeg",
        text: "ఇది నాల్గవ వివరాలు."
    },

    {
        title: "ఫోటో 5",
        img: "govindhu4.jpg",
        text: "ఇది ఐదవ వివరాలు."
    },
    {
        title: "ఫోటో 6",
        img: "moksha25.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 7",
        img: "ha3.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 8",
        img: "ha14.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 9",
        img: "ha15.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 10",
        img: "ha16.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 11",
        img: "ha17.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 12",
        img: "ha17.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 13",
        img: "bvcolony.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 14",
        img: "ha2.jpg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 15",
        img: "ha20.jpeg",
        text: "ఇది మొదటి వివరాలు."
    },
    {
        title: "ఫోటో 16",
        img: "ha21.jpeg",
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
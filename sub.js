const fileInput = document.getElementById("file");
const preview = document.getElementById("preview");
const form = document.getElementById("uploadForm");

fileInput.addEventListener("change", () => {
    preview.innerHTML = "";
    const file = fileInput.files[0];

    if (!file) return;

    const allowed = [
        "image/jpeg",
        "image/png",
        "application/pdf"
    ];

    if (!allowed.includes(file.type)) {
        alert("JPG, JPEG, PNG, PDF మాత్రమే అనుమతించబడతాయి");
        fileInput.value = "";
        return;
    }

    if (file.type.startsWith("image")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    } else {
        preview.innerHTML = "<p>PDF ఫైల్ ఎంపిక చేయబడింది</p>";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("ఫోటో & సమాచారం సక్సెస్‌గా సబ్మిట్ అయ్యాయి ✅");
    form.reset();
    preview.innerHTML = "";
});

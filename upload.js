document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("uploadForm");
    const fileInput = document.getElementById("file");
    const preview = document.getElementById("preview");
    const message = document.getElementById("message");
    const uploadBtn = document.getElementById("uploadBtn");


    // Check HTML elements
    if (!form || !fileInput || !preview || !message || !uploadBtn) {

        console.error("Upload form elements not found.");

        return;
    }


    // ======================================
    // FILE PREVIEW
    // ======================================

    fileInput.addEventListener("change", function () {

        preview.innerHTML = "";
        message.innerHTML = "";

        const file = fileInput.files[0];

        if (!file) {
            return;
        }


        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "application/pdf"
        ];


        if (!allowedTypes.includes(file.type)) {

            message.textContent =
                "JPG, JPEG, PNG లేదా PDF మాత్రమే upload చేయండి.";

            message.style.color = "red";

            fileInput.value = "";

            return;
        }


        // IMAGE
        if (file.type.startsWith("image/")) {

            const img = document.createElement("img");

            img.src = URL.createObjectURL(file);

            img.style.width = "250px";
            img.style.maxHeight = "250px";
            img.style.objectFit = "contain";
            img.style.marginTop = "15px";
            img.style.borderRadius = "10px";

            preview.appendChild(img);
        }


        // PDF
        if (file.type === "application/pdf") {

            const pdf = document.createElement("p");

            pdf.textContent =
                "📄 PDF Selected: " + file.name;

            preview.appendChild(pdf);
        }

    });


    // ======================================
    // FORM SUBMIT
    // ======================================

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        message.innerHTML = "";

        const file = fileInput.files[0];

        const titleInput =
            document.getElementById("title");

        const title =
            titleInput.value.trim();


        // File check
        if (!file) {

            message.textContent =
                "దయచేసి photo/file select చేయండి.";

            message.style.color = "red";

            return;
        }


        // Title check
        if (title === "") {

            message.textContent =
                "File వివరాలు నమోదు చేయండి.";

            message.style.color = "red";

            return;
        }


        // File size
        const maxSize =
            5 * 1024 * 1024;

        if (file.size > maxSize) {

            message.textContent =
                "File size 5 MB కంటే తక్కువగా ఉండాలి.";

            message.style.color = "red";

            return;
        }


        // ==================================
        // FORM DATA
        // ==================================

        const formData = new FormData();

        formData.append("file", file);

        formData.append("title", title);


        uploadBtn.disabled = true;

        uploadBtn.textContent = "Uploading...";


        try {

            const response = await fetch(
                "upload.php",
                {
                    method: "POST",
                    body: formData
                }
            );


            const text = await response.text();

            console.log(
                "upload.php response:",
                text
            );


            let result;


            try {

                result = JSON.parse(text);

            } catch (error) {

                message.textContent =
                    "PHP Error: " + text;

                message.style.color = "red";

                return;
            }


            // ==================================
            // SUCCESS
            // ==================================

            if (result.success === true) {

                message.textContent =
                    result.message;

                message.style.color = "green";


                form.reset();

                preview.innerHTML = "";

            }


            // ==================================
            // ERROR
            // ==================================

            else {

                message.textContent =
                    result.message ||
                    "Upload failed.";

                message.style.color = "red";

            }

        }

        catch (error) {

            console.error(
                "Fetch Error:",
                error
            );

            message.textContent =
                "Server connection failed.";

            message.style.color = "red";

        }


        uploadBtn.disabled = false;

        uploadBtn.textContent = "Upload";

    });

});
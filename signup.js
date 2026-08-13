const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    // Stop normal submit temporarily
    event.preventDefault();


    // =========================
    // Get Values
    // =========================

    const fullName =
        document.getElementById("fullName").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    const address =
        document.getElementById("address").value.trim();


    // =========================
    // Full Name Validation
    // =========================

    if (fullName.length < 3) {

        alert("Please enter your full name.");

        document.getElementById("fullName").focus();

        return;
    }


    // =========================
    // Mobile Validation
    // =========================

    const mobilePattern = /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(mobile)) {

        alert(
            "Please enter a valid 10 digit Indian mobile number."
        );

        document.getElementById("mobile").focus();

        return;
    }


    // =========================
    // Email Validation
    // =========================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        document.getElementById("email").focus();

        return;
    }


    // =========================
    // Password Validation
    // =========================

    if (password.length < 6) {

        alert(
            "Password must be at least 6 characters."
        );

        document.getElementById("password").focus();

        return;
    }


    // =========================
    // Gender Validation
    // =========================

    if (!gender) {

        alert("Please select your gender.");

        return;
    }


    // =========================
    // Address Validation
    // =========================

    if (address.length < 5) {

        alert("Please enter your address.");

        document.getElementById("address").focus();

        return;
    }


    // =========================
    // Submit Form
    // =========================

    // All validation successful.
    // Now send the form to signup.php.

    signupForm.submit();

});
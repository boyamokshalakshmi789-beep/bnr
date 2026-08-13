```javascript
let generatedOTP = null;


/* =========================
   SEND OTP
========================= */

function sendOTP() {

    const username =
        document.getElementById("username").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();


    /* Username Validation */

    if (username === "") {

        alert("Please enter your username.");

        document.getElementById("username").focus();

        return;
    }


    /* Mobile Validation */

    const mobilePattern =
        /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(mobile)) {

        alert(
            "Please enter a valid 10 digit mobile number."
        );

        document.getElementById("mobile").focus();

        return;
    }


    /* Generate 6 Digit OTP */

    generatedOTP =
        Math.floor(
            100000 + Math.random() * 900000
        );


    /*
       DEMO ONLY

       Real websiteలో ఈ OTPని
       SMS ద్వారా mobileకి పంపాలి.
    */

    console.log("Demo OTP:", generatedOTP);


    alert(
        "OTP Sent Successfully!\n\n" +
        "Demo OTP: " + generatedOTP
    );


    /* Show OTP Section */

    document.getElementById(
        "otpSection"
    ).style.display = "block";


    /* Focus OTP */

    document.getElementById("otp").focus();
}


/* =========================
   SUBMIT OTP
========================= */

function submitOTP() {

    const enteredOTP =
        document.getElementById("otp").value.trim();


    /* OTP Validation */

    if (enteredOTP === "") {

        alert("Please enter the OTP.");

        document.getElementById("otp").focus();

        return;
    }


    /* Check OTP */

    if (enteredOTP === generatedOTP.toString()) {

        alert(
            "OTP Verified Successfully!"
        );

        /*
           Next step:
           Reset Password page
        */

        window.location.href =
            "reset-password.html";

    } else {

        alert(
            "Invalid OTP. Please try again."
        );
    }
}
```
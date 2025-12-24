document.querySelector("button").addEventListener("click", () => {
    alert("Registration Submitted Successfully!");
});
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

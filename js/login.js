document.getElementById("login-btn").addEventListener("click", function () {
    //getting user email
    const emailFeild = document.getElementById("user-email");
    const email = emailFeild.value;

    //getting user password
    const passwordFeild = document.getElementById("user-password");
    const password = passwordFeild.value;

    if (email === "mail@gmail.com" && password === "123") {
        window.location.href = "bank.html"
    }
});
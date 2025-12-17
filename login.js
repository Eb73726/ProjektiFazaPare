document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("loginBtn").addEventListener("click", function () {
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const message = document.getElementById("loginMessage");

        if (email === "" || password === "") {
            message.style.color = "red";
            message.innerText = "Ju lutem plotësoni të gjitha fushat!";
            return;
        }

        if (!email.includes("@")) {
            message.style.color = "red";
            message.innerText = "Email-i nuk është valid!";
            return;
        }

        message.style.color = "green";
        message.innerText = "Login i suksesshëm (demo)";
    });

    document.getElementById("registerBtn").addEventListener("click", function () {
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value.trim();
        const message = document.getElementById("registerMessage");

        if (firstName === "" || lastName === "" || email === "" || password === "") {
            message.style.color = "red";
            message.innerText = "Të gjitha fushat janë të detyrueshme!";
            return;
        }

        if (password.length < 6) {
            message.style.color = "red";
            message.innerText = "Fjalëkalimi duhet të ketë minimum 6 karaktere!";
            return;
        }

        message.style.color = "green";
        message.innerText = "Regjistrimi u krye me sukses (demo)";
    });

});

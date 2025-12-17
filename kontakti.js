const nameInput = document.getElementById("contactName");
const emailInput = document.getElementById("contactEmail");
const messageInput = document.getElementById("contactMessage");
const response = document.getElementById("contactResponse");

function validate(){
    if(nameInput.value === "" || emailInput.value === "" || messageInput.value === ""){
        response.style.color = "red";
        response.textContent="Ju lutem plotesoni te gjitha fushat !";
    }else {
        response.style.color = "green";
        response.textContent = "Te dhenat jane te sakta";
    }
}

nameInput.onblur = validate;
emailInput.onblur = validate;
messageInput.onblur = validate;
const form = document.getElementById("cadastro");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senhaConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Cadastrado");
})
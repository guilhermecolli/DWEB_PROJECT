//const senhaConfirmation = document.getElementById("password-confirmation");
const form = document.getElementById("cadastro");

form.addEventListener("submit", (event) => {

    const nome = document.getElementById("name").value;
    const email = document.getElementById("email-cadastro").value;
    const senha = document.getElementById("password-cadastro").value;

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    fetch("http://localhost:3000/usuario", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    })

});
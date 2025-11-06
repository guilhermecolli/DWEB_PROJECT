document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.getElementById("form-contato");
    const mensagemObrigado = document.getElementById("mensagem-obrigado");

    formulario.addEventListener("submit", function(event) {
    
    event.preventDefault(); 

        formulario.style.opacity = "0";

        setTimeout(function() {

        formulario.style.display = "none";

        mensagemObrigado.classList.remove("escondido");

        setTimeout(function() {

            mensagemObrigado.style.opacity = "1";
        }, 10);

        }, 500);
    });

});
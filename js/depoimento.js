function gerarEstrelasHTML(nota) {
    let estrelasHTML = '';
    const maxEstrelas = 5;

    for (let i = 0; i < nota; i++) {
        estrelasHTML += '<span>&#9733;</span>'; 
    }

    for (let i = nota; i < maxEstrelas; i++) {
        estrelasHTML += '<span>&#9734;</span>';
    }

    return estrelasHTML;
}

document.addEventListener("DOMContentLoaded", function() {

    const container = document.getElementById("container-depoimentos");

    depoimentos.forEach(function(depoimento) {

        const cardHTML = `
        <article class="card-depoimento">
            <header>
                <img src="${depoimento.avatar}" alt="Foto de ${depoimento.nome}">
            <div class="info-autor">
                <strong>${depoimento.nome}</strong>
            </div>
            </header>
            
            <div class="estrelas">
                ${gerarEstrelasHTML(depoimento.estrelas)} <span class="data">${depoimento.data}</span>
            </div>

            <h3>${depoimento.titulo}</h3>

            <blockquote>
                <p>${depoimento.texto}</p>
            </blockquote>
        </article>`;

        container.innerHTML += cardHTML;
    });
});
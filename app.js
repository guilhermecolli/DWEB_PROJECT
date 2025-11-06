// Ela recebe uma nota (ex: 4) e retorna o HTML das estrelas
function gerarEstrelasHTML(nota) {
    let estrelasHTML = ''; // Começa com uma string vazia
    const maxEstrelas = 5; // Definimos o total de estrelas

    // Loop 1: Adiciona as estrelas CHEIAS
    for (let i = 0; i < nota; i++) {
        estrelasHTML += '<span>&#9733;</span>'; 
    }

    // Loop 2: Adiciona as estrelas VAZIAS
    // Se a nota for 3, ele vai rodar para i = 3 e i = 4 (total de 2 vazias)
    for (let i = nota; i < maxEstrelas; i++) {
        estrelasHTML += '<span>&#9734;</span>';
    }

    return estrelasHTML; // Retorna o HTML pronto
}

// Espera a página carregar
document.addEventListener("DOMContentLoaded", function() {
    // 1. Pega o constainer-depoimentos, onde serão inseridos os cards
    const container = document.getElementById("container-depoimentos");
    // 2. Loop: para cada depoimento dentro do array depoimentos
    depoimentos.forEach(function(depoimento) {
        // 3. Cria o "Molde" HTML
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
        // 4. Insere o HTML recém-criado dentro do container
        container.innerHTML += cardHTML;
    });
});
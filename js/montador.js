document.addEventListener("DOMContentLoaded", () => {
    
    fetch('../js/exemplo.json')
        .then(response => response.json())
        .then(listaDeClientes => {
            
            const dados = listaDeClientes[0];

            // 1. SEÇÃO INICIAL
            const imgCabeca = document.getElementById('cabeca-img');
            if (imgCabeca) imgCabeca.src = dados.cabeca.imagem;

            const tituloCabeca = document.getElementById('cabeca-titulo');
            if (tituloCabeca) tituloCabeca.textContent = dados.cabeca.titulo;

            const subCabeca = document.getElementById('cabeca-subtitulo');
            if (subCabeca) subCabeca.textContent = dados.cabeca.subtitulo;

            const btnCabeca = document.getElementById('cabeca-btn');
            if (btnCabeca) btnCabeca.textContent = dados.cabeca.botaoTexto;


            // 2. SEÇÃO SOBRE
            const tituloSobre = document.getElementById('sobre-titulo');
            if (tituloSobre) tituloSobre.innerHTML = dados.sobre.tituloHtml;

            const cargoSobre = document.getElementById('sobre-cargo');
            if (cargoSobre) cargoSobre.textContent = dados.sobre.subtitulo;

            const descSobre = document.getElementById('sobre-desc');
            if (descSobre) descSobre.textContent = dados.sobre.descricao;

            const btnSobre = document.getElementById('sobre-btn');
            if (btnSobre) btnSobre.textContent = dados.sobre.botaoContato;

            const imgSobre = document.getElementById('sobre-img');
            if (imgSobre) imgSobre.src = dados.sobre.imagem;


            // 3. PROJETOS
            const containerProjetos = document.getElementById('lista-projetos');
            if (containerProjetos) {
                containerProjetos.innerHTML = "";
                
                dados.projetos.forEach(projeto => {
                    const cardHTML = `
                        <figure class="projeto-item">
                            <img src="${projeto.imagem}" alt="${projeto.titulo}">
                            <button>${projeto.titulo}</button>
                        </figure>
                    `;
                    containerProjetos.innerHTML += cardHTML;
                });
            }


            // 4. FOOTER
            const emailFooter = document.getElementById('footer-email');
            if (emailFooter) emailFooter.textContent = `Email: ${dados.footer.email}`;

            const telFooter = document.getElementById('footer-tel');
            if (telFooter) telFooter.textContent = `Phone: ${dados.footer.telefone}`;

            const copyFooter = document.getElementById('footer-copy');
            if (copyFooter) copyFooter.innerHTML = dados.footer.copy;

        })
});
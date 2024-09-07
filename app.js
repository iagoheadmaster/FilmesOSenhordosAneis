function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Concatena HTML para criar um novo elemento de resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}
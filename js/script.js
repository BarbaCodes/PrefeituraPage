//Sistema responsável por exibir as solicitações ao funcionário

//Simulando um banco de dados
let bancoDados = [];

// Puxando dados do servidor express
fetch(`http://localhost:3000/requerimentos`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            bancoDados.push(element);
            saidaElemento.innerHTML += criaHtml(element.nome, element.cpf, element.descricao, element.status);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });


let saidaElemento = document.querySelector("#lista-soliticoes")


function criaHtml(nome, cpf, descricao, status) {
    let elementoHtml = `<li class="item-lista-solicitacao">
    <ul class="dados">
        <p class="name-req">${nome}</p>
        <span class="material-symbols-outlined cancela-soli">
            close
        </span>
        <div class="litle-cont">
            <li><strong>CPF:</strong> ${cpf}</li>
            <li><strong>Descrição:</strong> ${descricao}</li>
            <li><strong>Status:</strong> ${status}</li>
        </div>
    </ul>

</li>`

    return elementoHtml;
}

//Criar elemento HTML para um usuário do serviço (FICHAS)
let exibir = document.querySelector("#lista-fichas")

function criaHtmlFicha(nome, cpf, numeroFicha) {
    let elementoHtml = `<li class="item-ficha">
    <p class="extern"><i class="far fa-user"></i> ${nome}</p>
    <div class="text-ajust">
        <p><i class="far fa-file"></i> ${cpf}</p>
        <p><i class="fas fa-key"></i> ${numeroFicha}</p>
    </div>
    <p class="more"><i class="fas fa-check"></i></p>
</li>`

    return elementoHtml;
}

document.getElementsByClassName('back')[0].addEventListener('click', () => {
    window.location.href = '../index.html'
});

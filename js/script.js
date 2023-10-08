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
        <li><strong>CPF:</strong> ${cpf}</li>
        <li><strong>Descrição:</strong> ${descricao}</li>
        <li><strong>Status:</strong> ${status}</li>
    </ul>

</li>`

    return elementoHtml;
}

//Criar elemento HTML para um usuário do serviço (FICHAS)
let exibir = document.querySelector("#lista-fichas")

function criaHtmlFicha(nome, cpf,  numeroFicha) {
    let elementoHtml = `   <li class="item-ficha">

    </p>
    <p><strong>Nome:</strong> ${nome}

    </p>
    <p><strong>CPF:</strong> ${cpf}

    </p>
    <p><strong>Número da ficha:</strong> ${numeroFicha}

    </p>
</li>`

    return elementoHtml;
}

document.getElementsByClassName('back')[0].addEventListener('click', () => {
    window.location.href = '../index.html'
});

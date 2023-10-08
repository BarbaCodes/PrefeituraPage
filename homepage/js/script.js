//Sistema responsável por exibir as solicitações ao funcionário

//Simulando um banco de dados
let bancoDados = [{
    nome: "Cauã Pires Soares",
    cpf: "113.424.543-77",
    descricao: "Remoção de árvore na rua almeida",
    data: "11/10/2023",
    entregue: false,
    emAndamento: false,
    finalizado: true
},

{
    nome: "Riquelme Oliveira",
    cpf: "141.332.613-17",
    descricao: "Consertar vazamento da água da cagepa, rua belmonte",
    data: "01/09/2023",
    entregue: false,
    emAndamento: true,
    finalizado: false
},

{
    nome: "Daniel Macho",
    cpf: "242.242.242-24",
    descricao: "Remoção de árvore na rua almeida",
    data: "11/10/2023",
    entregue: true,
    emAndamento: false,
    finalizado: false
},
{
    nome: "Carlos ALberto",
    cpf: "113.424.543-77",
    descricao: "Remoção de árvore na rua almeida",
    data: "11/10/2023",
    entregue: false,
    emAndamento: false,
    finalizado: true
}]

let saidaElemento = document.querySelector("#lista-soliticoes")


function criaHtml(nome, cpf, descricao, data, entregue, emAndamento, finalizado) {
    let elementoHtml = `<li class="item-lista-solicitacao">
    <ul class="dados">
        <p class="name-req">${nome}</p>
        <span class="material-symbols-outlined cancela-soli">
            close
        </span>
        <li><strong>CPF:</strong> ${cpf}</li>
        <li><strong>Descrição:</strong> ${descricao}</li>
        <li><strong>Data de solicitação:</strong> ${data}</li>

        <li><strong>Situação da solicitação</strong></li>

        <details class="lista-situacao">
            <input type="radio" class="entregue" ${entregue ? 'checked' : ' '}>
            <label for="entregue" >Entregue</label>
            <br>
            <input type="radio" class="andamento" ${emAndamento ? 'checked' : ' '} >
            <label for="andamento">Em andamento</label>
            <br>
            <input type="radio" class="finalizado" ${finalizado ? 'checked' : ' '}>
            <label for="finalizado">Finalizado</label>
            <br>
            <button class="at-situacao">ATUALIZAR</button>
        </details>
    </ul>

</li>`

    return elementoHtml;
}

for (let item of bancoDados) {
    let elemento = criaHtml(item.nome, item.cpf, item.descricao, item.data, item.entregue, item.emAndamento, item.finalizado)

    saidaElemento.innerHTML += `${elemento}`
}


window.onload = () => {
  let container = document.getElementById('servicos-existente')

  // Puxando dados do servidor express
  fetch(`http://localhost:3000/servicos`)
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {
        container.innerHTML += `
        <li class="item-existente">
          <p>Nome do médico: ${element.nomeDoutor}</p>
          <p>UBS: ${element.ubsNome}</p>
          <p>Área: ${element.area}</p>
          <p>Horário: ${element.horariosAtendimento}</p>
          <p>Vagas: ${element.ficha}</p>
        </li>
        `
      });
  })
  .catch(error => {
      console.error('Erro ao buscar dados:', error);
  });
};


document.getElementById('adiciona-servico').addEventListener('click', () => {
  let nomeMedico = document.getElementById('nome-m').value;
  let ubs = document.getElementById('ubs').value;
  let area = document.getElementById('area').value;
  let horario = document.getElementById('horario').value;
  let fichas = document.getElementById('fichas').value;

  // Puxando dados do servidor express
  fetch(`http://localhost:3000/servicos/${nomeMedico}-${ubs}-${area}-${horario}-${fichas}`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Erro ao buscar dados:', error);
  });

  location.reload(true);
});
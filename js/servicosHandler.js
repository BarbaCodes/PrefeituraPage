window.onload = () => {
  let container = document.getElementById('servicos-existente')

  // Puxando dados do servidor express
  fetch(`http://localhost:3000/servicos`)
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {
        container.innerHTML += `
        <li class="item-existente">
          <p><strong>Nome do médico:</strong> ${element.nomeDoutor}</p>
          <p><strong>UBS:</strong> ${element.ubsNome}</p>
          <p><strong>Área:</strong> ${element.area}</p>
          <p><strong>Horário:</strong> ${element.horariosAtendimento}</p>
          <p><strong>Vagas:</strong> ${element.ficha}</p>
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
window.onload = () => {
  let container = document.getElementById('servicos-existente')

  // Puxando dados do servidor express
  fetch(`http://localhost:3000/servicos`)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        container.innerHTML += `
        <li class="item-existente">
          <p><strong><i class="far fa-user"></i></i></strong> - ${element.nomeDoutor} - <span class="logi">(Médico)</span></p>
          <p><strong><i class="far fa-hospital"></i></strong> - ${element.ubsNome} - <span class="logi">(Bairro)</span></p>
          <p><strong><i class="fas fa-user-md"></i></strong> - ${element.area}- <span class="logi">(Área)</span></p>
          <p><strong><i class="far fa-clock"></i></strong> - ${element.horariosAtendimento} - <span class="logi">(Horário)</span></p>
          <p><strong><i class="fas fa-ticket-alt"></i></strong> - ${element.ficha} - <span class="logi">(Nº Fichas)</span></p>
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
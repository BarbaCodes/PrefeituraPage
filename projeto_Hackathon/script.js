const CPF = document.getElementById('cpf');
const senha = document.getElementById('senha');

function enviarDados(){
  fetch(`http://localhost:3000/funcionarios/${CPF.value}-${senha.value}`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Erro ao buscar dados:', error);
  });

  console.log(CPF.value, senha.value);
}
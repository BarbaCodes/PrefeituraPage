const CPF = document.getElementById('cpf');
const senha = document.getElementById('senha');

document.getElementsByClassName('btnHandlerRegister')[0].addEventListener('click', () => {
  window.location.href = `http:///localhost:3000/funcionarios/${CPF.value}-${senha.value}`;
});

document.getElementsByClassName('btnHandlerJoin')[0].addEventListener('click', () => {
  window.location.href = "login.html"
});
const buttonLogin = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function buttonInput () {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  }else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', buttonInput);
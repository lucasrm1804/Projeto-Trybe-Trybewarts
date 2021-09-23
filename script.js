const buttonLogin = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');

function buttonInput() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', buttonInput);

function enableDisableButton() {
  if (agreementCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreementCheckbox.addEventListener('click', enableDisableButton);

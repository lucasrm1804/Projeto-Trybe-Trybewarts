const buttonLogin = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const submitBtn = document.getElementById('submit-btn');
const agreementCheckbox = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputSelectorInput = document.getElementById('house');
const inputFamily = form.family;

const inputSubject = document.getElementsByClassName('subject');
const inputRate = form.rate;

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

function counterHandler() {
  counter.innerText = 500 - (textArea.textLength);
}

textArea.addEventListener('keyup', counterHandler);

document.body.addEventListener('click', (event) => {
  console.dir(event.target);
});

console.log(inputName);

inputName.addEventListener('input', () => {
  console.log(inputName.value);
});

function makeSubjectStr() {
  let subjectStr = '';
  for (let index = 0; index < inputSubject.length; index += 1) {
    const element = inputSubject[index];
    if (element.checked !== false) {
      subjectStr = `${subjectStr} ${element.value},`;
    }
  }
  return subjectStr;
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  form.innerText = `Nome: ${inputName.value} ${inputLastName.value} 
  Email: ${inputEmail.value} 
  Casa: ${inputSelectorInput.value}
  Família: ${inputFamily.value} 
  Matérias: ${makeSubjectStr()} 
  Avaliação: ${inputRate.value} 
  Observações: ${textArea.value} 
  `;
});

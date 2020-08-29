import './navigation.js';

const logo = document.querySelector('.logo');
console.log(logo);

logo.addEventListener('click', console.log('clicked'));

function goHomeByLogo() {
  returnMarkup();
}

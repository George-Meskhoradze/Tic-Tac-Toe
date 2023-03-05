const playerX = document.querySelector(".x");
const playerO = document.querySelector(".oval");
const btnCpu = document.querySelector(".btn-one");
const btnPlayer = document.querySelector(".btn-two");


playerX.addEventListener("click", function() {
  playerX.classList.add('active')
})
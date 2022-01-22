// Player 1 - versão mais explicativa

// Número randômico de 1 há 6 jogador 1
let randomNumber1 = Math.floor(Math.random() * 6 + 1);

// Usa o número gerado anteriormente e usa para mudar o texto da imagem
let randomImage1 = "dice" + randomNumber1 + ".png";

// Altera a fonte da imagem 1
let randomImageSource1 = "images/" + randomImage1;

// Seleciona a class img1 da Tag img da imagem do player 1
let image1 = document.querySelector(".img1");

// Muda o atributo src da tag img do player 1
image1.setAttribute("src", randomImageSource1);

// Player 2 - versão mais curta

//Número randômico de 1 há 6 jogador 2
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Altera a fonte da imagem 2
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Seleciona a tag img da imagem do player 2 e modifica o atributo src
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Who Win - Verifica quem ganhou

// Verifica se o player 1 venceu
if (randomNumber1 > randomNumber2) {
  // informa que o player 1 venceu
  document.querySelector("h1").textContent = "🚩 Player 1 wins!";

  // Verifica se o player 2 venceu
} else if (randomNumber2 > randomNumber1) {
  // informa que o player 2 venceu
  document.querySelector("h1").textContent = "Player 2 wins! 🚩";

  // Empate
} else {
  // informa que foi empate
  document.querySelector("h1").textContent = "Draw!";
}

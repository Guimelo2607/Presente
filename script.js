// Contador de dias
const inicioNamoro = new Date("2025-04-22"); // <--- Coloca a data do início aqui
const hoje = new Date();
const diff = Math.floor((hoje - inicioNamoro) / (1000 * 60 * 60 * 24));
document.getElementById("dias").innerText = `${diff} dias`;

// Slideshow/Users/guilhermemelo/Documents/programação /dia dos namorados
const fotos = ["img/img1.PNG", "img/img2.JPG", "img/img3.JPG"];
let index = 0;
setInterval(() => {
  index = (index + 1) % fotos.length;
  document.getElementById("foto").src = fotos[index];
}, 3000); // troca a cada 3 segundos

// Emojis flutuando
const emojis = ["❤️"];
setInterval(() => {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = "100vh";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emojis").appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}, 300);

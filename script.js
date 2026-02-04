const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const mainBox = document.getElementById("mainBox");
const loveBox = document.getElementById("loveBox");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 250) - 100;
  const y = Math.floor(Math.random() * 250) - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  mainBox.classList.add("hidden");
  loveBox.classList.remove("hidden");
});

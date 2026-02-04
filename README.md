# my-valentine
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Will You Be My Valentine?</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="container" id="mainBox">
    <h1>💘 Will you be my Valentine? 💘</h1>

    <img
      src="https://media.tenor.com/1nKJX5QZc8QAAAAi/cute.gif"
      class="gif"
      alt="Cute Gif"
    />

    <div class="buttons">
      <button id="yesBtn">Yes 💖</button>
      <button id="noBtn">No 😢</button>
    </div>
  </div>

  <div class="container hidden" id="loveBox">
    <h1>YAYYYYY 😍💞</h1>
    <h2>You just made my day ❤️</h2>

    <img
      src="https://media.tenor.com/YTw87WdiaasAAAAi/tkthao219-bubududu.gif"
      class="gif"
      alt="Happy Gif"
    />
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #ffb6c1, #ffe4e1);
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 420px;
}

h1 {
  color: #ff2d55;
  margin-bottom: 10px;
}

h2 {
  color: #333;
}

.gif {
  width: 200px;
  margin: 15px 0;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  margin: 10px;
  transition: 0.2s;
}

#yesBtn {
  background-color: #ff2d55;
  color: white;
}

#yesBtn:hover {
  transform: scale(1.1);
}

#noBtn {
  background-color: #ddd;
  color: black;
  position: relative;
}

.hidden {
  display: none;
}
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

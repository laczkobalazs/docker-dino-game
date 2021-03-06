const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  
  setTimeout(function () {
    dino.classList.remove("jump");

  }, 300)
}

let isAlive = setInterval(() => {
  // current dino Y pos
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

  // current cactus X pos
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

  // collision detection
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    console.log("collision")
    alert("Game Over")
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
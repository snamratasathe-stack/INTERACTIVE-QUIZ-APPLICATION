const score = localStorage.getItem("quizScore");
const total = localStorage.getItem("total");

document.getElementById("score").innerText = `${score} / ${total}`;

function restart() {
  window.location.href = "index.html";
}

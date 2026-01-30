let index = 0;
let score = 0;
let time = 15;
let timer;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const progressBar = document.getElementById("progress-bar");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {
  resetTimer();
  let q = questions[index];
  questionEl.innerText = q.question;

  options.forEach((btn, i) => {
    btn.innerText = q.options[i];
    btn.className = "option";
    btn.disabled = false;
  });

  progressBar.style.width = ((index + 1) / questions.length) * 100 + "%";
}

function checkAnswer(selected) {
  clearInterval(timer);
  options.forEach(btn => btn.disabled = true);

  if (selected === questions[index].answer) {
    options[selected].classList.add("correct");
    score++;
  } else {
    options[selected].classList.add("wrong");
    options[questions[index].answer].classList.add("correct");
  }

  nextBtn.style.display = "block";
}

function nextQuestion() {
  index++;
  nextBtn.style.display = "none";

  if (index < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("total", questions.length);
    window.location.href = "result.html";
  }
}

function resetTimer() {
  time = 15;
  timeEl.innerText = time;

  timer = setInterval(() => {
    time--;
    timeEl.innerText = time;
    if (time === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

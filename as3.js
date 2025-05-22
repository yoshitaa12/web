const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Uttara khand", "New Delhi", " Haryana"],
    answer: "New Delhi",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");

 
  answersEl.innerHTML = "";
  nextBtn.disabled = true;

  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = function () {
      const isCorrect = option === current.answer;
      if (isCorrect) {
        score++;
        btn.style.backgroundColor = "lightgreen";
      } else {
        btn.style.backgroundColor = "lightcoral";
      }

      const allBtns = document.querySelectorAll("#answers button");
      allBtns.forEach(b => b.disabled = true);

      nextBtn.disabled = false;
    };
    answersEl.appendChild(btn);
  });

  scoreEl.textContent = `Score: ${score}/${quizData.length}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  document.getElementById("question").textContent = "Quiz Completed!";
  document.getElementById("answers").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("score").textContent = `Final Score: ${score} out of ${quizData.length}`;
}
 
window.onload = loadQuestion;
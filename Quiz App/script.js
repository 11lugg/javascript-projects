const quizData = [
  {
    question: "What is 1 + 1?",
    a: "9",
    b: "7",
    c: "what is 1 + 1?",
    d: "2",
    correct: "d"
  },
  {
    question: "What year did we first land on the moon?",
    a: "1969",
    b: "We haven't",
    c: "2019",
    d: "1",
    correct: "a"
  },
  {
    question: "What would a selfless cat say?",
    a: "nothing",
    b: "meow",
    c: "youow",
    d: "bark",
    correct: "c"
  },
  {
    question: "What is Jon's D.O.B?",
    a: "18/12/1989",
    b: "12/12/1989",
    c: "17/12/1989",
    d: "20/12/1989",
    correct: "a"
  },
  {
    question: "have you finished this quiz?",
    a: "yes",
    b: "what??",
    c: "after this question I have",
    d: "I don't know if there are more questions to come",
    correct: "c"
  }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz-container");
const question = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

let loadQuiz = () => {
  deselectAnswers();
  const currentQuiz = quizData[currentQuestion];
  question.innerText = currentQuiz.question;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
};

let captureSelected = () => {
  let answer = undefined;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

let deselectAnswers = () => {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
};

let nextQuestion = () => {
  const answer = captureSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} correctly</h2> <button onClick="location.reload()">Reload</button>`;
    }
  }
};

loadQuiz();

//Dark Mode

function myfunc(){
  var element = document.body
  element.classList.toggle("dark-mode");
}

//Questions

const questions=[
  {
  question: "How are you?",
  answers: [ 
  {text: "add", correct: true},
  {text: "substract", correct: false},
  {text: "divide", correct: false},
  {text: "all of the above", correct: false},
]},{
  question: "What are you doing here?",
  answers: [ 
  {text: "add", correct: false},
  {text: "substract", correct: true},
  {text: "divide", correct: false},
  {text: "all of the above", correct: false},
]},{
  question: "How can I help you?",
  answers: [ 
  {text: "add" , correct: false},
  {text: "substract", correct: false},
  {text: "divide", correct: true},
  {text: "all of the above", correct: false},
]}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer  .text;
  button.classList.add("btn");
  answerButton.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
}); 
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild)
    answerButton.removeChild(answerButton.firstChild);
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled=true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "Block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});

startQuiz();


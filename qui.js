//Dark Mode

function myfunc(){
  var element = document.body
  element.classList.toggle("dark-mode");
}

//Questions

const quest=[
  {
  ques: "How are you?",
  ans: [ 
  {text: "add", correct: true},
  {text: "substract", correct: false},
  {text: "divide", correct: false},
  {text: "all of the above", correct: false},
]},{
  ques: "What are you doing here?",
  ans: [ 
  {text: "add", correct: false},
  {text: "substract", correct: true},
  {text: "divide", correct: false},
  {text: "all of the above", correct: false},
]},{
  ques: "How can I help you?",
  ans: [ 
  {text: "add" , correct: false},
  {text: "substract", correct: false},
  {text: "divide", correct: true},
  {text: "all of the above", correct: false},
]}
];

const question = document.getElementById("ques");
const answer = document.getElementById("ans-btn");
const nextbtn = document.getElementById("nxt-btn");

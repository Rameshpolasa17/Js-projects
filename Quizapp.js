const questions=[
    {
        question:"Who has the most centuries in Odi Cricket?",
        answers:[
            {text:"Rohit Sharma", correct:false},
            {text:"Virat Kohli",correct:true},
            {text:"Avesh Khan", correct:false},
            {text:"Sachin Tendulkar",correct:false}
        ]
    },
    {
        question:"Which country won the Cricket World Cup the most?",
        answers:[
            {text:"Netherlands", correct:false},
            {text:"Bangladesh",correct:false},
            {text:"Pakistan", correct:false},
            {text:"Australia",correct:true}
        ]
    },
    {
        question:"How many players are in a cricket team?",
        answers:[
            {text:"12", correct:false},
            {text:"5",correct:false},
            {text:"16", correct:false},
            {text:"11",correct:true}
        ]
    },
    {
        question:"Who scored most runs in CWC2023",
        answers:[
            {text:"Haris Rauf", correct:false},
            {text:"Virat Kohli",correct:true},
            {text:"Rohit Sharma", correct:false},
            {text:"Ms.Dhoni",correct:false}
        ]
    }
];

const questionElements=document.getElementById('questions')
const answerButton=document.getElementById('answer_button')
const nextButton=document.getElementById('next_btn')

let currentQuestionIndex=0
let score=0;

function startQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML= 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion= questions[currentQuestionIndex]
    let questionNo= currentQuestionIndex+1
    questionElements.innerHTML=questionNo+". "+ currentQuestion.question

    currentQuestion.answers.forEach(answer=>{
        const button= document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
    })
    

}
startQuiz();
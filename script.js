const quizData = [
{
question: "What does HTML stand for?",
a: "Hyper Text Markup Language",
b: "High Text Machine Language",
c: "Hyper Transfer Markup Language",
d: "Home Tool Markup Language",
correct: "a"
},
{
question: "Which language is used for styling web pages?",
a: "HTML",
b: "CSS",
c: "Python",
d: "Java",
correct: "b"
},
{
question: "Which language is used for web interactivity?",
a: "JavaScript",
b: "CSS",
c: "HTML",
d: "C++",
correct: "a"
},
{
question: "Which company developed JavaScript?",
a: "Google",
b: "Microsoft",
c: "Netscape",
d: "Apple",
correct: "c"
},
{
question: "Which tag is used to create a hyperlink?",
a: "<link>",
b: "<a>",
c: "<href>",
d: "<url>",
correct: "b"
}
];

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function deselectAnswers(){
    answerEls.forEach(answer => answer.checked = false);
}

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML = `
            <h2>You scored ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">
                Restart Quiz
            </button>
            `;
        }
    }
});
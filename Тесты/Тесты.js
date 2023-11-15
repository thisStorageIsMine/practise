const questions = [
    {
        type: "input",
        question: "2+2",
        answer: "4"
    },
    {
        type: "input",
        question: "15-7",
        answer: "8"
    },
    {
        type: "radio",
        question: "3+2",
        answers: [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        rightAnswer: "5"
    }
];

const inputQuestionsStorage = document.querySelector(".input-questions");
const radioQuestionsStorage = document.querySelector(".radio-questions");
const btn = document.querySelector("button");

function checkAnswers() {
   inputQuestions = document.querySelectorAll(".input-question");
   radioQuestions = document.querySelectorAll(".radio-question");


   for (const questionId in inputQuestions) {
        if(questionId==="entries") break;
        const question = inputQuestions[questionId];
        child = question.children;
        if(child[1].value ===  questions[questionId].answer) {
            child[1].style.border = "1px solid green";
        } else {
            child[1].style.border = "1px solid red";
        }
   }

   for (const questionId in radioQuestions) {
        if(questionId==="entries") break;
        const question = radioQuestions[questionId];
        const inputs = document.querySelector(`radio-question-${questions[questionId].question}`);
        console.log(inputs);
        console.log(question);
   }
}

btn.addEventListener("click", checkAnswers);

function renderQuestions() {
    questions.forEach((question,index) => {
        const div = document.createElement("div");
        div.innerHTML = `<p>${question.question}</p>`;
        if(question.type === "input"){
            div.innerHTML += `
                <input type="text" placeholder="Писать сюда">
            `;
            div.classList.add("input-question", `input-question-${index}`)
            inputQuestionsStorage.append(div);
        } else {
            for (const answer of question.answers) {
                const label = document.createElement("label");
                label.textContent = answer;
                const radio = document.createElement("input");
                radio.setAttribute("type", "radio")
                if(answer === question.rightAnswer) {
                    radio.setAttribute("data-answer",question.rightAnswer)
                }
                label.append(radio);
                div.append(label);
            }
            div.classList.add("radio-question", `radio-question-${index}`)
            radioQuestionsStorage.append(div);
        }
        
    });
}

renderQuestions();
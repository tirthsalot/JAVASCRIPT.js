const questions = [
{
id: 1,
question: "What does HTML stand for?",
a: "Hyper Text Markup Language",
b: "High Text Machine Language",
c: "Hyperlink Text Markup Language",
d: "Home Tool Markup Language",
correctAnswer: "a"
},
{
id: 2,
question: "Which CSS property is used to change the text color?",
a: "font-color",
b: "text-color",
c: "color",
d: "background-color",
correctAnswer: "c"
},
{
id: 3,
question: "Which keyword is used to declare a variable in JavaScript?",
a: "variable",
b: "var",
c: "declare",
d: "letvar",
correctAnswer: "b"
},
{
id: 4,
question: "Which HTML tag is used to create a hyperlink?",
a: "<link>",
b: "<href>",
c: "<a>",
d: "<url>",
correctAnswer: "c"
},
{
id: 5,
question: "Which CSS property is used to make text bold?",
a: "font-style",
b: "font-weight",
c: "text-bold",
d: "font-bold",
correctAnswer: "b"
},
{
id: 6,
question: "Which method is used to print output in the browser console?",
a: "console.print()",
b: "print.console()",
c: "console.log()",
d: "log.console()",
correctAnswer: "c"
},
{
id: 7,
question: "Which HTML tag is used to add an image?",
a: "<image>",
b: "<img>",
c: "<picture>",
d: "<src>",
correctAnswer: "b"
},
{
id: 8,
question: "Which CSS property is used to change the background color?",
a: "color",
b: "background",
c: "background-color",
d: "bg-color",
correctAnswer: "c"
},
{
id: 9,
question: "Which JavaScript function is used to select an element by its ID?",
a: "getElementById()",
b: "getElementByClass()",
c: "queryById()",
d: "selectElement()",
correctAnswer: "a"
},
{
id: 10,
question: "Which HTML tag is used to create an unordered list?",
a: "<ol>",
b: "<li>",
c: "<list>",
d: "<ul>",
correctAnswer: "d"
}
];

const question = document.getElementById("Quizqns");

let count = 0;

question.innerHTML = questions[count].question;


function loadQuestion() {

    const option = document.getElementById("option");

    option.innerHTML = "";

    const currentQuestion = questions[count];

    currentQuestion.option.forEach(function(e){

        const col = document.createElement("div");
        col.className = "col-md-6 mb-3";

        const btn = document.createElement("button");
        btn.innerHTML = e;
        btn.className = "btn btn-outline-primary w-100";

        col.appendChild(btn);
        option.appendChild(col);

    });

}

loadQuestion();
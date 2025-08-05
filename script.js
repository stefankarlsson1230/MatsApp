let button = document.getElementById("calculate");
button.addEventListener("click", calculations);

const resultFields = document.querySelectorAll(".result");
for(let i = 0; i < resultFields.length; i++) {
    resultFields[i].addEventListener("click", copyToClipboard);
}


let field_X = document.getElementById("x");
let field_X5000 = document.getElementById("x+5000");
let field_X10000 = document.getElementById("x+10000");
let field_X15000 = document.getElementById("x+15000");

let resultsDiv = document.getElementById("resultsDiv");

resultsDiv.style.display = "none";

field_X.innerText = "X";
field_X5000.innerText = "X + 5000";
field_X10000.innerText = "X + 10000";
field_X15000.innerText = "X + 15000";

function calculations() {
    let sum = Number(document.getElementById("total_sum").value);
    let incomeA = Number(document.getElementById("income_A").value);
    let incomeB = Number(document.getElementById("income_B").value);

    calculate(field_X, sum, incomeA, incomeB);
    calculate(field_X5000, sum + 5000, incomeA, incomeB);
    calculate(field_X10000, sum + 10000, incomeA, incomeB);
    calculate(field_X15000, sum + 15000, incomeA, incomeB);

    resultsDiv.style.display = "block";
}

function calculate(field, sum, incomeA, incomeB) {
    let amount_from_A = Math.round(sum * (incomeA / (incomeA + incomeB)))
    let amount_from_B = Math.round(sum - amount_from_A);

    field.innerText = `${sum} kr\n\nFör ett gemensamt belopp på ${sum} kronor så ska A betala ${amount_from_A} kronor och B ska betala ${amount_from_B} kronor. A kommer få ${incomeA - amount_from_A} kronor kvar och B kommer få ${incomeB - amount_from_B} kronor kvar`;
}

function copyToClipboard() {
    const obj = this;
    navigator.clipboard.writeText(obj.innerText);
    obj.style.backgroundColor = "white";

    setTimeout (function() {
       obj.style.backgroundColor = "rgb(189, 189, 189)"; 
    }, 50);
}

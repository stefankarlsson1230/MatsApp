let button = document.getElementById("calculate");
button.addEventListener("click", calculations);

let field_X = document.getElementById("x");
let field_X5000 = document.getElementById("x+5000");
let field_X10000 = document.getElementById("x+10000");
let field_X15000 = document.getElementById("x+15000");

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
}


function calculate(field, sum, incomeA, incomeB) {
    let amount_from_A = (sum * (incomeA / (incomeA + incomeB))).toFixed(2);
    let amount_from_B = (sum - amount_from_A).toFixed(2);

    field.innerText = `${sum}\n\nFör ett gemensamt belopp på ${sum} kronor så ska A betala ${amount_from_A} kronor och B ska betala ${amount_from_B} kronor. A kommer få ${(incomeA - amount_from_A).toFixed(2)} kronor kvar och B kommer få ${(incomeB - amount_from_B).toFixed(2)} kronor kvar`;
}

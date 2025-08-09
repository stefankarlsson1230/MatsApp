// Add event listeners
let button = document.getElementById("calculate");
button.addEventListener("click", calculations);

const resultFields = document.querySelectorAll(".result");
for(let i = 0; i < resultFields.length; i++) {
    resultFields[i].addEventListener("click", copyToClipboard);
}

// Get referenses to elements
let field_X = document.getElementById("x");
let field_X5000 = document.getElementById("x+5000");
let field_X10000 = document.getElementById("x+10000");
let field_X15000 = document.getElementById("x+15000");

let resultsDiv = document.getElementById("resultsDiv");

// Hide result-boxes until something is calculated
resultsDiv.style.display = "none";

// Load values from local storage
if(!localStorage.getItem("incomeA")) {
    document.getElementById("incomeA").value = 0;
} 
else {
    document.getElementById("incomeA").value = localStorage.getItem("incomeA");
}

if(!localStorage.getItem("incomeB")) {
    document.getElementById("incomeB").value = 0;
}
else {
    document.getElementById("incomeB").value = localStorage.getItem("incomeB");
}

if(!localStorage.getItem("minA")) {
    document.getElementById("minA").value = 0;
} 
else {
    document.getElementById("minA").value = localStorage.getItem("minA");
}

if(!localStorage.getItem("minB")) {
    document.getElementById("minB").value = 0;
} 
else {
    document.getElementById("minB").value = localStorage.getItem("minB");
}

if(!localStorage.getItem("totalSum")) {
    document.getElementById("totalSum").value = 45000;
}
else {
    document.getElementById("totalSum").value = localStorage.getItem("totalSum");
}


// Initilize the calculations
function calculations() {
    let sum = Number(document.getElementById("totalSum").value);
    let incomeA = Number(document.getElementById("incomeA").value);
    let incomeB = Number(document.getElementById("incomeB").value);

    calculate(field_X, sum, incomeA, incomeB);
    calculate(field_X5000, sum + 5000, incomeA, incomeB);
    calculate(field_X10000, sum + 10000, incomeA, incomeB);
    calculate(field_X15000, sum + 15000, incomeA, incomeB);

    resultsDiv.style.display = "block";
}

// Calculations for each result-field
function calculate(field, sum, incomeA, incomeB) {
    let amountFromA = Math.round(sum * (incomeA / (incomeA + incomeB)))
    let amountFromB = Math.round(sum - amountFromA);

    field.innerText = `${sum} kr\n\nFör ett gemensamt belopp på ${sum} kronor så ska A betala ${amountFromA} kronor och B ska betala ${amountFromB} kronor. A kommer få ${incomeA - amountFromA} kronor kvar och B kommer få ${incomeB - amountFromB} kronor kvar`;

    const minA = document.getElementById("minA").value;
    const minB = document.getElementById("minB").value;

    if(incomeA - amountFromA < minA || incomeB - amountFromB < minB) {
        field.style.borderColor = "red";
    } else {
        field.style.borderColor = "green";
    }
}

// Copying text from result-field to clipboard when clicked
function copyToClipboard() {
    const obj = this;
    navigator.clipboard.writeText(obj.innerText);
    obj.style.backgroundColor = "white";

    setTimeout (function() {
       obj.style.backgroundColor = "rgb(189, 189, 189)"; 
    }, 50);

    alert(obj.innerText + "\n\nSparat som urklipp");
}

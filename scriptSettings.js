// Add event listener
let button = document.getElementById("saveButton");
button.addEventListener("click", saveChanges);

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


// Saving changes
function saveChanges() {
    const incomeA = document.getElementById("incomeA").value;
    const incomeB = document.getElementById("incomeB").value;
    const minA = document.getElementById("minA").value;
    const minB = document.getElementById("minB").value;
    const totalSum = document.getElementById("totalSum").value;

    localStorage.setItem("incomeA", incomeA);
    localStorage.setItem("incomeB", incomeB);
    localStorage.setItem("minA", minA);
    localStorage.setItem("minB", minB);
    localStorage.setItem("totalSum", totalSum);
}


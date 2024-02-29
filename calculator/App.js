var display = document.getElementById("display");



function appendToDisplay(input){
    display.value += input;
}

function clearD(){
    display.value = "";
}

function calc(){
    display.value = eval(display.value)
}


let display = document.getElementById("displayValue");

//? To add value

function appendToDisplay(input) {
    display.value += input;
}

//? To clear display

function clearDisplay() {
    display.value = "";
}

//? To remove the last character from the display

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

//? To calculate 

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}


var display = document.getElementById("display");

function appendVal(val) {
    if (display.value === "" && isNaN(val) && val !== "") {
        return;
    }
    display.value += val;
}

function cleardisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        result = eval(display.value);

        if(!Number.isInteger(result)) {
            result = result.toFixed(2);
        }

        display.value = result;
    }
    catch(err) {
        alert("Invalid Calculation!!!");
        console.log(err)
        cleardisplay();
    }
    
}


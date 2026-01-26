let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function appendDecimal() {
  let current = display.value;
  let lastNumber = current.split(/[\+\-\*\/]/).pop();

  if (!lastNumber.includes(".")) {
    display.value += ".";
  }
}

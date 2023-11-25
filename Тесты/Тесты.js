const inputRignt = "1202",
      radioRight = "091129",
      inputText = document.querySelector("input[type='text']"),
      inputsRadio = document.querySelectorAll("input[type='radio']"),
      btn = document.querySelector("button");

btn.addEventListener("click", () => {
    inputsRadio.forEach(element => {
        element.style.outline = "";
    });
    inputText.style.border = "";

    // Обычный инпут
    if(inputText.value == inputRignt) {
        inputText.style.border = "3px solid green";
    } else {inputText.style.border = "3px solid red";}

    // Радио
    inputRadio = document.querySelector("input[type='radio']:checked");
    if(inputRadio.value == radioRight){
        inputRadio.style.outline = "3px solid green";
    } else {inputRadio.style.outline = "3px solid red";}
});
const name = document.getElementById("name"),
      price = document.getElementById("price"),
      amount = document.getElementById("amount"),
      btn = document.querySelector("button"),
      tbody = document.querySelector("tbody"),
      summary = document.getElementById("summary");

function checkIfInputsNotEmpty() {
    return (name.value!=="" && price.value!=="" && amount.value!=="")
}

function countSummary() {
    const sumTds = document.querySelectorAll(".sumTd");
    let sum = 0;
    sumTds.forEach(elem => {
        sum += +elem.textContent;
    });
    summary.textContent = sum;
}

btn.addEventListener("click", () => {
    if(checkIfInputsNotEmpty()) {
        const newTr = document.createElement("tr"),
              nameTd = document.createElement("td"),
              priceTd = document.createElement("td"),
              amountTd = document.createElement("td"),
              sumTd = document.createElement("td"),
              removeTd = document.createElement("td"),
              priceValue = +price.value,
              amountValue =  +amount.value;


        newTr.classList.add("table-row");
        nameTd.textContent = name.value;
        priceTd.textContent = priceValue;
        amountTd.textContent = amountValue;
        sumTd.textContent = priceValue * amountValue;
        sumTd.classList.add("sumTd");
        removeTd.addEventListener("click", (event) => {
            event.currentTarget.parentNode.remove();
            countSummary();
        });
        removeTd.classList.add("remove");


        newTr.append(nameTd, priceTd, amountTd,sumTd,removeTd);
        tbody.append(newTr);
        countSummary();
    }    
});
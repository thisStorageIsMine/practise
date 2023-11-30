const table = document.querySelector("table"),
      cards = document.querySelectorAll(".card"),
      title = document.querySelector("#title"),
      btn = document.querySelector("button");
      dialog = document.querySelector("#dialog");
let player = true,
    lastWords;


function Modal(text) {
    title.textContent = text;
    dialog.showModal();
    dialog.style.display = "flex"; 
}


// Эта штука нужна чтобы проверить, кто победил
function isSubstringInWord(arr) {
    if ((arr.includes("0") & arr.includes("4") & arr.includes("8")) 
        || (arr.includes("2") & arr.includes("4") & arr.includes("6"))
        || arr.includes("0") & arr.includes("1") & arr.includes("2")
        || (arr.includes("3") & arr.includes("4") & arr.includes("5"))
        || (arr.includes("6") & arr.includes("7") & arr.includes("8"))
        || arr.includes("0") & arr.includes("3") & arr.includes("6")
        || (arr.includes("1") & arr.includes("4") & arr.includes("7"))
        || (arr.includes("2") & arr.includes("5") & arr.includes("8"))) {
            return true;
    }

    return false;
}

const checkIfSomebodyWin = ()  => {
    let crossArr = "",
        circleArr = "";
    cards.forEach((card, index) => {
        
        // Берём метки ячейки - крестик или нолик
        const cardSign = card.dataset.player;

        // Кладём в нужную строку
        if(cardSign !== undefined) {
            if(cardSign === "cross") {
                crossArr += index;
            } else {
                circleArr += index;
            }

        }
    });


    // for(let item of winbos) {
        
    if(isSubstringInWord(crossArr)) {
        lastWords = "Победил крестик!";
        Modal(lastWords);
        // break;
    } else if(isSubstringInWord(circleArr)){
        lastWords = "Победил нолик!";
        Modal(lastWords);
        // break;
    } else if(crossArr.length === 5 || circleArr.length ===5){
        lastWords = "Ничья!";
        Modal(lastWords);
        // break;
    }
    }
// }


btn.addEventListener("click", ()=>{
    globalThis.location.reload();
})


// клик по ячейке
table.addEventListener("click", (event) => {
    const card = event.target.closest(".card");
    let sign;
    if(card) {
        card.classList.add("rotate");
        if(player) {
            card.children[1].classList.add("cross");
            sign = "cross";
        } else {
            card.children[1].classList.add("circle");
            sign = "circle";
        }
        player = !player;
        card.style.pointerEvents = "none";
        card.setAttribute("data-player", sign);
    }
    checkIfSomebodyWin();
});




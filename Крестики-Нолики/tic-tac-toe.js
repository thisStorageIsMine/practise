const table = document.querySelector("table"),
      cards = document.querySelectorAll(".card"),
      title = document.querySelector("#title"),
      btn = document.querySelector("button");
      dialog = document.querySelector("#dialog");
let player = true;
const winbos  = [
    "012",
    "345",
    "678", // горизонтальные все

    "036",
    "147",
    "258", // Вертикальные все

    "048",
    "246"
];
let lastWords;


function Modal(text) {
    title.textContent = text;
    dialog.showModal();
    dialog.style.display = "flex"; 
}


// Эта штука нужна чтобы проверить, кто победил
function isSubstringInWord(frozenWord, word) {
    // Отсортировать frozenWord
    const sortedFrozenWord = frozenWord.split('').sort().join('');
  
    // Инициализировать окно скользящего метода
    const windowSize = frozenWord.length;
    let window = word.split('').sort().join('').slice(0, windowSize);
  
    // Проверка первого окна
    if (window === sortedFrozenWord) {
      return true;
    }
  
    // Перебор оставшихся символов в word
    for (let i = windowSize; i < word.length; i++) {
      // Сдвинуть окно, добавив новый символ и удалив старый
      window = window.slice(1) + word[i];
  
      // Проверка текущего окна
      if (window === sortedFrozenWord) {
        return true;
      }
    }
  
    // Подстрока не найдена
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


    for(let item of winbos) {
        
        if(isSubstringInWord(item,crossArr) || (crossArr.includes("0") & crossArr.includes("4") & crossArr.includes("8")) || (crossArr.includes("2") & crossArr.includes("4") & crossArr.includes("6"))) {
            lastWords = "Победил крестик!";
            Modal(lastWords);
            break;
        } else if(isSubstringInWord(item,circleArr) || (circleArr.includes("2") & circleArr.includes("4") & circleArr.includes("6")) || (circleArr.includes("0") & circleArr.includes("4") & circleArr.includes("8"))){
            lastWords = "Победил нолик!";
            Modal(lastWords);
            break;
        } else if(crossArr.length === 5 || circleArr.length ===5){
            lastWords = "Ничья!";
            Modal(lastWords);
            break;
        }
    }
}


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




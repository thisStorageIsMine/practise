const table = document.querySelector("table"),
      cards = document.querySelectorAll(".card"),
      title = document.querySelector("#title"),
      btn = document.querySelector("button");
      dialog = document.querySelector("#dialog");
let player = true;
const winbos  = [
    "012",
    "048",
    "147",
    "258",
    "246",
    "345",
    "678"
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
        if(crossArr.length === 5 || circleArr.length ===5){
            lastWords = "Ничья!";
            Modal(lastWords);
            break;
        }
        else if(isSubstringInWord(item,crossArr)) {
            lastWords = "Победил крестик!";
            Modal(lastWords);
            break;
        } else if(isSubstringInWord(item,circleArr)){
            lastWords = "Победил нолик!";
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




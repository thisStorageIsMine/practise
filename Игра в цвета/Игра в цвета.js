const cards = document.querySelectorAll(".card"),
      colors = ["#ff0000", "#00ff00", "#0000cc"],
      title = document.querySelector("h1");
let counter = 0;
      
const randColor = () => (Math.random() * colors.length) | 0;
function checkIfWin() {
    const color = cards[0].style.background;
    for (let item of cards){

        if(color !== item.style.background) {

            return false;
        }
    }
    return true;
};




function start() {
    cards.forEach(item => {
        let randIndex = randColor()
        item.style.background = colors[randIndex];
        
        item.addEventListener("click", () => {
            item.style.background = colors[(++randIndex)%3];
            title.textContent = `Кол-во кликов: ${++counter}`;
            if(checkIfWin()) {
                alert("Победа!");
            }
        });
    })   
}

start();
const cities = [];
const input = document.querySelector("input");
const p = document.querySelectorAll("p")[1];
const playerP = document.getElementById('player');
let player = true;
let lastCity;

function check(event) {
    
    if(event.key === "Enter") {
        const city = input.value.toLocaleLowerCase();

        if(cities.includes(city)){
            p.textContent = "Такой город уже был!";
            return;
        }

        if(lastCity) {
            const lastSymbol = lastCity.substr(lastCity.length - 1);
            if(lastSymbol!==city[0]) {
                p.textContent = "Город должен начинаться с буквы: " + lastSymbol.toUpperCase() + "!";
                return;
            }
        }

        cities.push(city);
        lastCity = city;
        input.value = "";
        p.textContent = "";
        player = !player;
        playerP.textContent = (player) ? "Ходит человек № 1" : "Ходит человек № 2";
    }
}

input.addEventListener("keydown", check);
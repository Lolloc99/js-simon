// DATI
let counter = 1;
const timeout = document.getElementById("timeOver");

const clickButton = document.getElementById("clickBtn");
const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", function() {
    startButton.classList.add("hide");
    clickButton.classList.remove("hide");
    let counterText = document.getElementById("clickCounter").innerHTML = counter;
    let clickxSec = document.getElementById("clickPerSec").innerHTML = "";
    
    const timer = setTimeout(() => {
        clickButton.style.pointerEvents = "none";
        timeout.classList.remove("hide")
        counterText = document.getElementById("clickCounter").innerHTML = `${"Click totalizzati: "} ${counter}`;
        counterxSec = document.getElementById("clickPerSec").innerHTML = `${"Numero di click al secondo: "} ${counter / 5}`;
        clearTimeout(timer)
    }, 5000)
});

clickButton.addEventListener("click", function() {
    counter++;
    console.log(counter);
    counterText = document.getElementById("clickCounter").innerHTML = counter;
});
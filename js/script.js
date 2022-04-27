/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

const maxGuessNumber = 5;
// Creare un array di 5 numeri casuali unici
let rndArray = rndNumberGenerator(maxGuessNumber, 100);
// Imposto il tempo del timer (in secondi)
const timeSec = 3;
// Creo l'array vuoto dei numeri dell'utente
let userArray = [];

// Estraggo i bottoni con l'id e li affido ad una variabile per comodità
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

// Avviare il timer di "timeSec" secondi
startBtn.addEventListener("click",
    function () {
        // Tolgo la possibilità di premere ulteriormente il bottone
        startBtn.style.pointerEvents = "none";

        // Stampare in pagina il contenuto dell'array
        const numString = document.getElementById("simon");
        numString.innerHTML = rndArray;

        // Avviare il timer e al suo termine, chiedere all'utente di inserire i numeri visti, uno alla volta tramite prompt, ed inseririli dentro "userArray"
        const timer = setTimeout(timerFunction, (timeSec) * 1000);
        const timerHidden = setTimeout(timerHiddenFunction, (timeSec - 1) * 1000);

        function timerHiddenFunction() {
            numString.classList.add("hidden");
        }

        function timerFunction() {
            for (let i = 1; i <= 5; i++) {
                let digitNum = parseInt(prompt(`${"Inserisci il numero"} ${i} ${"visualizzato:"}`));
                userArray.push(digitNum);
                console.log(userArray);
                console.log(rndArray);
            }
            
            // Fare un ciclo che analizza i numeri interni all'array random e quelli interni all'array dell'utente, confrontandoli e segnalando se elemRndArray === elemUserArray, dicendo n. e oggetto di quelli ambi presenti
            let result = similaritiesExaminator(rndArray, userArray);
            console.log("I numeri simili sono:", result);
            const resultString = document.getElementById("simonResult");
            resultString.innerHTML = `${"I numeri il cui valore e la cui posizione sono state indovinate sono:"} ${result}`;
            const subResultString = document.getElementById("simonResultSub");
            subResultString.innerHTML = `${"ovvero"} ${result.length} ${"su"} ${maxGuessNumber}`;
        }
            
    }
);

// Restart button
restartBtn.addEventListener("click",
    function () {

        startBtn.style.pointerEvents = "initial";
        userArray = [];
        rndArray = [];
        

    }
);



// FUNCTIONS
/*
Descrizione: Crea un array di numeri casuali non ripetuti
    Dato 1: numero massimo di elementi da creare → "elementMax"
    Dato 2: range massimo di numeri da prendere → "rangeMax"
    Return: array[n*rangeMax]
*/
function rndNumberGenerator(elementMax, rangeMax) {
    const rndNumberArray = [];

    let index = 0;
    while (index < elementMax) {
        let rndNumber = getRndInteger (1, rangeMax);
        if (!rndNumberArray.includes(rndNumber))  {
            rndNumberArray.push(rndNumber)
            index++;
        }
    }

    return rndNumberArray;
}

/*
Descrizione: Genera numeri casuali
    Dato 1: range numero minimo → "min"
    Dato 2: range numero massimo → "max"
    Return: numero casuale compreso tra "min" e "max"
*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*
Descrizione: controlla che se il contenuto di un'array sia presente anche in un secondo array
    Dato 1: Array 1 → "firstArray"
    Dato 2: Array 2 → "secondArray"
    Return: Array dei numeri uguali nella stessa posizione
*/
function similaritiesExaminator(firstArray, secondArray) {
    const SimiliarNumberArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            SimiliarNumberArray.push(secondArray[i])
        }
    }

    return SimiliarNumberArray
}
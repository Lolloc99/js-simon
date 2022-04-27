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

// Creare un array di 5 numeri casuali unici
const rndArray = rndNumberGenerator(5, 50);
// Imposto il tempo del timer (in secondi)
const timeSec = 3;
// Creo l'array vuoto dei numeri dell'utente
const userArray = [];

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
        function timerFunction() {
            //numString.classList.add("hidden"); // I numeri scompagliono solo dopo l'inserimento dei 5 nume *ticket*
            for (let i = 1; i <= 5; i++) {
                let digitNum = parseInt(prompt(`${"Inserisci il numero"} ${i} ${"visualizzato:"}`));
                userArray.push(digitNum);
                console.log(userArray);
                console.log(rndArray);
            }
        }
            
    });

// Fare un ciclo che analizza i numeri interni all'array random e quelli interni all'array dell'utente, confrontandoli e segnalando se elemRndArray === elemUserArray, dicendo n. e oggetto di quelli ===

//function similaritiesExaminator(rndArray, userArray)


//Restart button
restartBtn.addEventListener("click",
    function () {

        startBtn.style.pointerEvents = "initial";
        //svuota ogni array
    });

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
    Return: bo
*/

function similaritiesExaminator(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            
        }
        
    }
}
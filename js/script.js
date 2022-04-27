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

// Creare un array di 5 numeri casuali
const rndArray = rndNumberGenerator(5, 50);
// Imposto il tempo del timer (in secondi)
const timeSec = 5;
// Creo l'array vuoto dei numeri dell'utente
const userArray = [];

// Avviare il timer di 30sec
document.getElementById("start-btn").addEventListener("click",
    function () {

        // Stampare in pagina il contenuto dell'array
        const textString = document.getElementById("simon");
        textString.innerHTML = rndArray;

        const timer = setTimeout(() => {
            userArray = prompt("Inserisci i numeri visualizzati nel loro ordine")
            console.log(userArray);
        }, (timeSec) * 1000);
    });
    
// Al termine del timer, chiedere all'utente di inserire i numeri visti, tramite prompt, ed inseririli in un array

// Fare un ciclo che analizza i numeri interni all'array random e quelli interni all'array dell'utente, confrontandoli e segnalando se elemRndArray === elemUserArray, dicendo n. e oggetto di quelli ===


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
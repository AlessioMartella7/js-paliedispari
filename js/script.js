/* Esercizio Palindroma
1 - recuperare gli elementi dal DOM
2 - preparo una costante dove ricevere la parola inserita dall'utente
3 - preparo un messaggio base da rimandare in pagina
4 - creo una funzione per invertire l'ordine della parola e controllare che sia palindroma
5 - invoco la funzione
6 - stampo in pagina
*/

/* 
// 1- recuperare gli elementi dal DOM
const resultElement = document.getElementById('result');

// 2- preparo una costante dove ricevere la parola inserita dall'utente
const inputText = prompt('inserisci una parola').trim();

// 3 preparo un messaggio base da rimandare in pagina
let resultMessage = 'La parola inserita non è palindroma';

// 4 -creo una funzione per invertire l'ordine della parola e controllare che sia palindroma
function isPalindrome(text) {
  let isReverse = false; 
const reversedText = text.split('').reverse().join('');
    if(text === reversedText) { 
        isReverse = true;
        resultMessage = "la parola inserita è palindroma";
    }
   return isReverse;
}

// 5 - invoco la funzione 
const resultText = isPalindrome(inputText);

// 6 - stampo in pagina
resultElement.innerText = resultMessage;

 */
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.

*/

/*  Esercizio Pari e Dispari
1 - Chiedo all'utente di scegliere tra pari e dispari
2 - Chiedo di inserire un numero compreso tra 1 e 5
3 - Creo una funzione per generare un numero random per il computer compreso tra 1 e 5
4 - Sommo i due numeri ottenuti
5 - Creo una funzione per stabilire se la somma è pari o dispari
6 - Stampo il risultato in pagina
*/

// 1 - Chiedo all'utente di scegliere tra pari e dispari

const userChoice = prompt('Pari o Dispari?').trim();

// 2 - Chiedo di inserire un numero compreso tra 1 e 5

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

// 3 - Creo una funzione per generare un numero random per il computer compreso tra 1 e 5
function getRandomNumber(min = 1, max = 5) {
return Math.floor(Math.random() * max) + min ;
}

const cpuNumber = getRandomNumber();
console.log(cpuNumber);
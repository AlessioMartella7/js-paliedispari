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

/*  Esercizio Pari e Dispari
1 - recupero dal DOM gli elementi che mi servono
2 - Chiedo all'utente di scegliere tra pari e dispari
3 - Chiedo di inserire un numero compreso tra 1 e 5
4 - Creo una funzione per generare un numero random per il computer compreso tra 1 e 5
5 - Sommo i due numeri ottenuti
6 - Creo una funzione per stabilire se la somma è pari o dispari
7 - Creo un messaggio da stampare in pagina
8 - Stampo il risultato in pagina
*/

// 1 - recuper dal DOM gli elementi che mi servono
const resultElement = document.getElementById('result');
const userElement = document.getElementById('user');
const cpuElement = document.getElementById('cpu');
const sumElement = document.getElementById('sum');

// 2 - Chiedo all'utente di scegliere tra pari e dispari

const userChoice = prompt('Pari o Dispari?', 'dispari').trim();

// 3 - Chiedo di inserire un numero compreso tra 1 e 5

const userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

// 4 - Creo una funzione per generare un numero random per il computer compreso tra 1 e 5
function getRandomNumber(min = 1, max = 5) {
return Math.floor(Math.random() * max) + min ;
}

const cpuNumber = getRandomNumber();
console.log('cpuNumber',cpuNumber);

// 5 - Sommo i due numeri ottenuti

const resultNumber = userNumber + cpuNumber;
console.log( 'resultNumber',resultNumber);

// 6 - Creo una funzione per stabilire se la somma è pari o dispari

function isEven(number) {
    if(number % 2 === 0) {
    return true;       
    } else {
    return false;
}
}
const evaluate =  isEven(resultNumber);
console.log('evaluate', evaluate)

// 7 - Creo un messaggio da stampare in pagina
let resultMessage ='Vincono i Pari!';
if(evaluate === false) {
    resultMessage = 'Vincono i Dispari!';
}

// 8 - Stampo il risultato in pagina
userElement.innerText = `Il numero scelto dal giocatore è : ${userNumber}`;
cpuElement.innerText = `Il numero realizzato dal computer è : ${cpuNumber}`;
sumElement.innerText = `La somma dei due numeri è : ${resultNumber}`;
resultElement.innerText = resultMessage;
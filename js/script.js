/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

/* Esercizio Palindroma
1 - recuperare gli elementi dal DOM
2 - preparo una costante dove ricevere la parola inserita dall'utente
3 - preparo un messaggio base da rimandare in pagina
4 - creo una funzione per invertire l'ordine della parola e controllare che sia palindroma
5 - invoco la funzione
6 - stampo in pagina
*/


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
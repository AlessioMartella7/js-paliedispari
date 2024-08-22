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
1- recuperare gli elementi dal DOM
2- preparo una costante dove ricevere la parola inserita dall'utente
3- creo una funzione per analizzare la parola
4- inverto l'ordine della parola
5- confronto la parola invertita con quella originale
6- rimando il risultato in pagina
*/

//recuperare gli elementi dal DOM

const wordField = document.getElementById('word');
const resultElement = document.getElementById('result');

//preparo una costante dove ricevere la parola inserita dall'utente
const word = wordField.value ;



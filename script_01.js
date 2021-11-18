/***** Variablen 01 *******/

/**
 * Block-Kommentar
 */

// Zeilen-Kommentar

// Konsolen-Ausgabe
// console.log("Hello, World!");
// console.log(firstName); // deklarierte Variante ---> Fehler

/***** 02 Deklaration + Wertzuweisung *******/
// 1.Möglichkeit
// let firstName = "Max"; // Deklaration (Definition) + Wertzuwesiung
// console.log(firstName);

// 2.Möglichkeit
// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuwesiung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration (Definition) + Wertzuwesiung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName);

/***** 03 Deklaration + Wertzuwesiung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben");
// familyName = prompt("Bitte Nachnamen eingeben");
// console.log(firstName + " " + familyName);

// JS ist eine untypisierte Sprache!

// let test;
// test = "moin"
// test = 10;
// test = false;
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03a Konstanten *******/

// const test = "moin"; // Variable mit KONSTANTEM Inhalt
// test = "hi"; // KEINE neue Zuweisung zur LZ möglich
// console.log("Inhalt: " + test);

/***** Beispiel *******/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();
let year = date.getFullYear();

console.log(date);
console.log(date.getFullYear());

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

//Ausgabe
console.log("birthYearJohn:" + birthYearJohn);
console.log("birthYearMark:" + birthYearMark);
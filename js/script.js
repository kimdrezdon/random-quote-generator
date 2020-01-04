"use strict";

let intervalID;
const button = document.getElementById('loadQuote');
let randomUsed = [];

/***
Creates a random RGB number string by generating 3 random numbers.
Applies that random RGB color string to the background color and button color.
Colors are limited to darker colors to prevent blending with the white font.
***/

const randomRGB = () => Math.floor(Math.random() * 180);

const randomColor = () => {
    let color = `rgb(`;
    color += `${randomRGB()},`;
    color += `${randomRGB()},`;
    color += `${randomRGB()})`;
    document.body.style.backgroundColor = color;
    button.style.backgroundColor = color;
}

/***
Calls the random number generator and returns the quote object with that index number 
from the array. Prevents repeating phrases by storing used quotes indexes in an array
***/
const getRandomNumber = array => {
    return Math.floor(Math.random() * array.length);
}

const getRandomQuote = array => {
    let randomNumber;
    do {
        randomNumber = getRandomNumber(array);
    } while (randomUsed.indexOf(randomNumber) >= 0);
    randomUsed.push(randomNumber);
    if (randomUsed.length === array.length) {
        randomUsed = [randomNumber];
    }
    return array[randomNumber];
}

/***
Calls the getRandomQuote function to get a random quote object from the quotes array.
Builds an HTML string using the properties of the quote object, only if they exist.
Replaces the contents of the 'quote-box' div element with the new HTML string.
Calls the randomColor function to randomly change the background color.
Clears and restarts the interval timer.
***/

const printQuote = () => {
    let randomQuote = getRandomQuote(quotes);
    let quoteString = ``;
    quoteString += `<p class='quote'>${randomQuote.quote}</p>`;
    quoteString += `<p class='source'>${randomQuote.source}`;
    if (randomQuote.citation) {
        quoteString += `<span class='citation'>${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
        quoteString += `<span class='year'>${randomQuote.year}</span>`;
    }
    quoteString += `</p>`;
    if (randomQuote.tags) {
        quoteString += `<p class='tags'>${randomQuote.tags}</p>`;
    }
    document.getElementById("quote-box").innerHTML = quoteString;
    randomColor();
    clearInterval(intervalID);
    autoRefresh();
}

//Auto refreshes the quote and background color by calling the printQuote function every 15 seconds.

const autoRefresh = () => intervalID = setInterval(printQuote, 10000);
autoRefresh();

//Calls the printQuote function each time the 'Show Another Quote' button is clicked.

document.getElementById("loadQuote").addEventListener("click", printQuote, false);

//Calls the printQuote function on first page load

printQuote();
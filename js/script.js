/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

let intervalID;

//Creates an array of quote objects to contain the quote properties that will be displayed on the page.

let quotes = [
  {
      quote: "There’s nothing we can’t do if we work hard, never sleep, and shirk all other responsibilities in our lives.",
      source: "Leslie Knope",
      citation: "Parks and Recreation",
      tags: "humor, motivational, hard work"
  },
  {
      quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
      source: "Michael Scott",
      citation: "The Office",
      year: 2009,
      tags: "humor, problem-solving"
  },
  {
      quote: "There is literally nothing in this world that you cannot do.",
      source: "Chris Traeger",
      citation: "Parks and Recreation",
      tags: "motivational, hard work"
  },
  {
      quote: "Pretty good. Pretty, pretty, pretty, pretty good.",
      source: "Larry David",
      citation: "Curb Your Enthusiasm",
      tags: "humor, positivity"
  },
  {
      quote: "It's not magic. It's talent and sweat.",
      source: "Gilfoyle",
      citation: "Silicon Valley",
      year: 2014,
      tags: "hard work, motivational"
  },
  {
      quote: "If you're having a bad day, just look in the mirror and say: How you doin?",
      source: "Joey Tribbiani",
      citation: "Friends",
      tags: "humor, hope, positivity"
  },
  {
      quote: "You are living an exciting new chapter in the book on tape of your life.",
      source: "Moira Rose",
      citation: "Schitt'$ Creek",
      tags: "humor, change, hope"
  },
  {
      quote: "Sometimes when I start a sentence, I don't even know where it's going, I just hope I find it along the way.",
      source: "Michael Scott",
      citation: "The Office",
      year: 2009,
      tags: "humor, hope"
  },
  {
      quote: "I've often felt that dreams are answers to questions we haven't yet figured out how to ask.",
      source: "Fox Mulder",
      citation: "The X-Files",
      year: 1995,
      tags: "dreams, problem-solving"
  }
];

/***
Creates a random RGB number string by generating 3 random numbers.
Applies that random RGB color string to the background color.
Colors are limited to darker colors to prevent blending with the white font.
***/

const randomRGB = () => Math.floor(Math.random() * 180);

const randomColor = () => {
    let color = `rgb(`;
    color += `${randomRGB()},`;
    color += `${randomRGB()},`;
    color += `${randomRGB()})`;
    document.body.style.backgroundColor = color;
}

//Generates a random number and returns the quote object with that index number from the array.

const getRandomQuote = array => {
    let randomNumber = Math.floor(Math.random() * array.length);
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
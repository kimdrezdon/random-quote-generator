/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/


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
      citation: "The Office, Season 5: The Duel",
      year: 2009,
      tags: "humor, problem-solving"
  },
  {
      quote: "I’m going to let you in on a little secret. Every day, once a day, give yourself a present. Don’t plan it, don’t wait for it, just let it happen.",
      source: "Agent Dale Cooper",
      citation: "Twin Peaks",
      tags: "motivational, positivity"
  },
  {
      quote: "Pretty, pretty, pretty, pretty good.",
      source: "Larry David",
      citation: "Curb Your Enthusiasm",
      tags: "humor, positivity"
  },
  {
      quote: "It's not magic. It's talent and sweat.",
      source: "Gilfoyle",
      citation: "Silicon Valley, Season 1: The Cap Table",
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
      tags: "humor, change, new beginnings"
  },
  {
      quote: "Sometimes when I start a sentence, I don't even know where it's going, I just hope I find it along the way.",
      source: "Michael Scott",
      citation: "The Office, Season 5: Stress Relief",
      year: 2009,
      tags: "humor, hope"
  },
  {
    quote: "I've often felt that dreams are answers to questions we haven't yet figured out how to ask.",
    source: "Fox Mulder",
    citation: "The X-Files, Season 2: Aubrey",
    year: 1995,
    tags: "dreams, problem-solving"
  }
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber]
};


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
    let randomQuote = getRandomQuote(quotes);
    let quoteString = "";
    quoteString += "<p class='quote'> " + randomQuote.quote + "</p>";
    quoteString += "<p class='source'> " + randomQuote.source ;
    if (randomQuote.citation) {
        quoteString += "<span class='citation'> " + randomQuote.citation + "</span>";
    };
    if (randomQuote.year) {
        quoteString += "<span class='year'> " + randomQuote.year + "</span>";
    };
    quoteString += "</p>"
    if (randomQuote.tags) {
        quoteString += "<p class='tags'> " + randomQuote.tags + "</p>";
    };
    document.getElementById("quote-box").innerHTML = quoteString;
};

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Changes the background color each time the Show Another Quote button is clicked.

function randomRGB() {
    return Math.floor(Math.random() * 256);
};

function randomColor() {
    var color = "rgb(";
    color += randomRGB() + ",";
    color += randomRGB() + ",";
    color += randomRGB() + ")";
    document.body.style.backgroundColor = color;
};

document.getElementById('loadQuote').addEventListener("click", randomColor, false);


//Prints a new quote to the page every 20 seconds.

let intervalID = setInterval(printQuote, 20000);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
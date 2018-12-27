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
      quote: "Maybe the dingo ate your baby.",
      source: "Elaine",
      citation: "Seinfeld",
      year: 
  }
  {
      quote: "Treat yo' self.",
      source: "Tom and Donna",
      citation: "Parks and Recreation",
      year: 
  }
  {
      quote: "Only boring people are bored.",
      source: "Betty Draper",
      citation: "Mad Men",
      year: 
  }
  {
      quote: "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV?",
      source: "Morty",
      citation: "Rick & Morty",
      year: 
  }
  {
      quote: "My log has something to tell you.",
      source: "Log Lady",
      citation: "Twin Peaks",
      year: 
  }
  {
      quote: "Pretty, pretty, pretty, pretty good.",
      source: "Larry David",
      citation: "Curb Your Enthusiasm",
      year: 
  }
  {
      quote: "Sorry if I scared you, I know I have somewhat ghostlike features.",
      source: "Jared",
      citation: "Silicon Valley",
      year: 
  }
  {
      quote: "We were on a break!",
      source: "Ross Geller",
      citation: "Friends",
      year: 
  }
  {
      quote: "The idea of my life coaching another human being should scare you. A lot.",
      source: "David Rose",
      citation: "Schitt's Creek",
      year: 
  }
  {
      quote: "Sometimes when I start a sentence, I don't even know where it's going, I just hope I find it along the way.",
      source: "Michael Scott",
      citation: "The Office",
      year: 
  }
  {
    quote: "I've made a huge mistake.",
    source: "Gob Bluth",
    citation: "Arrested Development",
    year: 
  }
  {
    quote: "Is your cat making too much noise all the time? Is your cat constantly stomping around, driving you crazy?",
    source: "Charlie Day",
    citation: "It's Always Sunny in Philadelphia",
    year: 
  }
  {
    quote: "It's not a lie if you believe it.",
    source: "George Costanza",
    citation: "Seinfeld",
    year: 1995;
  }
]

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
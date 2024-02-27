const categoryOptions = document.querySelector(".select-menu");
const selectButton = categoryOptions.querySelector(".select-btn");
const options = categoryOptions.querySelectorAll(".option");
const select_button_text = categoryOptions.querySelector(".select-btn-text");
const quoteText = document.getElementById("quote");

const categories = [
  {
    name: "Inspirational",
    quotes: [
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
        "Believe you can and you're halfway there.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It takes courage to grow up and become who you really are.",
        "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.",
        "Nothing is impossible. The word itself says 'I'm possible!'",
         "Keep your face always toward the sunshine, and shadows will fall behind you." ,
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go." ,
        "Attitude is a little thing that makes a big difference." ,
        "To bring about change, you must not be afraid to take the first step. We will fail when we fail to try."
  
    ],
  },
  {
    name: "Motivational",
    quotes: [
      "The only way to achieve the impossible is to believe it is possible.",
      "It always seems impossible until it is done.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "We cannot solve problems with the kind of thinking we employed when we came up with them.",
      "Learn as if you will live forever, live like you will die tomorrow.",
      "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
      "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.",
      "When you change your thoughts, remember to also change your world.",
      "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.",
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."
    ],
  },
];

//Provide default value for select button and quote
select_button_text.innerHTML = categories[0].name;
quoteText.innerHTML = categories[0].quotes[Math.floor(Math.random() * 10)];

selectButton.addEventListener("click", () =>
  categoryOptions.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    select_button_text.innerHTML =
      option.querySelector(".option-text").innerHTML;

    categoryOptions.classList.toggle("active");
  });
});
//Lister for click in card-footer instead of separate buttons
const cardFooter = document.querySelector(".card-footer");
cardFooter.addEventListener("click", (e) => {
  const category = select_button_text.innerHTML;
  const currentQuote = quoteText.innerHTML;
  const quotes = categories.find((cat) => cat.name === category).quotes;
  const currentIndex = quotes.indexOf(currentQuote); //Returns -1 when not present so easily handles category change
  let generatedQuote = "";

  if (e.target.id === "next-btn") {
    generatedQuote = quotes[getNextIndex(currentIndex, quotes.length)];
  } else if (e.target.id === "prev-btn") {
    generatedQuote = quotes[getPrevIndex(currentIndex, quotes.length)];
  } else if (e.target.id === "random-btn") {
    generatedQuote = quotes[getRandomIndex(quotes.length)];
    if (generatedQuote === currentQuote) {
      generatedQuote = getRandomQuote(currentQuote, quotes);
    }
  }

  if (generatedQuote) {
    quoteText.innerHTML = generatedQuote;
  }
});

function getPrevIndex(currentIndex, length) {
  return (currentIndex - 1 + length) % length;
}

function getNextIndex(currentIndex, length) {
  return (currentIndex + 1) % length;
}

function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function getRandomQuote(currentQuote, quotesArr) {
  const quote = quotesArr[getRandomIndex(quotesArr.length)];
  if (quote === currentQuote) {
    return quotesArr[getRandomIndex(quotesArr.length)];
  }
}

// Increase font size function
document.getElementById("increase").addEventListener("click", function() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.getElementById("quote")).fontSize);
    let newFontSize = currentFontSize + 2;
    document.getElementById("quote").style.fontSize = newFontSize + "px"; 
  });
  
// Decrease font size function
document.getElementById("decrease").addEventListener("click", function() {
    let currentFontSize = parseFloat(window.getComputedStyle(document.getElementById("quote")).fontSize);
    let newFontSize = currentFontSize - 2;
    if (newFontSize >= 8) { 
        document.getElementById("quote").style.fontSize = newFontSize + "px";
    }
  });
  
//dark mode

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  
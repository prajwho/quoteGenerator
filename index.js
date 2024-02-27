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
    ],
  },
  {
    name: "Motivational",
    quotes: [
      "The only way to achieve the impossible is to believe it is possible.",
      "It always seems impossible until it is done.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    ],
  },
];

//Provide default value for select button and quote
select_button_text.innerHTML = categories[0].name;
quoteText.innerHTML = categories[0].quotes[0];

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
  
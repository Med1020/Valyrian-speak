var inputText = document.querySelector("#input");
var outputText = document.querySelector(".output");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");

const serverURL = "https://api.funtranslations.com/translate/valyrian.json";

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModal();

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

let count = 0;

const getURL = (input) => {
  return serverURL + "?text=" + input;
};

const errorHandler = (error) => {
  return console.log("There was an error:", error);
};

btn.addEventListener("click", () => {
  let input = inputText.value;
  if (count < 5) {
    if (input) {
      count += 1;
      error.innerText = "";
      fetch(getURL(input))
        .then((response) => response.json())
        .then((json) => (outputText.innerText = json.contents.translated))
        .catch(errorHandler);
    } else {
      error.innerText = "*Please enter text here";
    }
  } else {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.innerText = "Sorry you've used up your 5 turns";
  }
});

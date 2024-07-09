const textareaEl = document.querySelector(".textarea");
const wordEl = document.querySelector(".stat__number-words");
const charactersEl = document.querySelector(".stat__number-characters");
const xEl = document.querySelector(".stat__number-x");
const facebookEl = document.querySelector(".stat__number-facebook");

textareaEl.addEventListener("input", function () {
  let numOfChars = textareaEl.value.length;
  const xCharsLeft = 280 - numOfChars;
  const facebookCharsLeft = 2200 - numOfChars;
  let wordsCount = textareaEl.value.split(" ").length;

  if (textareaEl.value.length === 0) {
    wordsCount = 0;
  }
  wordEl.textContent = wordsCount;
  charactersEl.textContent = numOfChars;
  xEl.textContent = xCharsLeft;
  facebookEl.textContent = facebookCharsLeft;

  if (xCharsLeft < 0) {
    xEl.classList.add("stat__number-limit");
  } else {
    xEl.classList.remove("stat__number-limit");
  }
  if (facebookCharsLeft < 0) {
    facebookEl.classList.add("stat__number-limit");
  } else {
    facebookEl.classList.remove("stat__number-limit");
  }
});

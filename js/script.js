let amount = document.querySelector(".js__input");
let score = document.querySelector(".js__score");
let button = document.querySelector("js__count");
let form = document.querySelector(".js__form");
let select = document.querySelector(".js__select");

let eurAmount = 4.36;
let usdAmount = 3.76;
let gbpAmount = 4.82;
let chfAmount = 4.16;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = +amount.value;
  let choise = select.value;
  let sum;

  switch (choise) {
    case "EUR":
      sum = inputValue / eurAmount;
      break;

    case "USD":
      sum = inputValue / usdAmount;
      break;

    case "GBP":
      sum = inputValue / gbpAmount;
      break;

    case "CHF":
      sum = inputValue / chfAmount;
      break;
  }
  score.innerHTML = `${inputValue} PLN = ${sum.toFixed(2)} ${select.value}`;
});

let reset = document.querySelector(".js__reset");

reset.addEventListener("click", () => {
  score.innerHTML !== ""
    ? (score.innerHTML = "")
    : (score.innerHTML = "Something were wrong!");
});

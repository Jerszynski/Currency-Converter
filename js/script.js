{
  const calcCurrency = (inputValue, currency) => {
    const eurAmount = 4.36;
    const usdAmount = 3.76;
    const gbpAmount = 4.82;
    const chfAmount = 4.16;

    switch (currency) {
      case "EUR":
        return inputValue / eurAmount;

      case "USD":
        return inputValue / usdAmount;

      case "GBP":
        return inputValue / gbpAmount;

      case "CHF":
        return inputValue / chfAmount;
    }
  };

  const score = document.querySelector(".js__score");
  const clearFormOnClick = () => {
    score.innerHTML !== ""
      ? (score.innerHTML = "")
      : (score.innerHTML = "Something were wrong!");
  };

  const updateResult = (inputValue, sum, currency) => {
    score.innerHTML = `${inputValue} PLN = ${sum.toFixed(2)} ${currency}`;
  };

  const formSubmit = (event) => {
    event.preventDefault();

    const amount = document.querySelector(".js__input");
    const select = document.querySelector(".js__select");

    const inputValue = +amount.value;
    const currency = select.value;

    const sum = calcCurrency(inputValue, currency);

    updateResult(inputValue, sum, currency);
  };

  const init = () => {
    const clearForm = document.querySelector(".js__reset");
    clearForm.addEventListener("click", clearFormOnClick);

    const form = document.querySelector(".js__form");
    form.addEventListener("submit", formSubmit);
  };
  init();
}

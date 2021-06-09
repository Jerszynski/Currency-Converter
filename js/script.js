{
  const calculateCurrency = (inputValue, currency) => {
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

  const scoreElement = document.querySelector(".js-score");
  const clearFormOnClick = () => {
    scoreElement.innerHTML = "";
  };

  const updateResult = (inputValue, result, currency) => {
    scoreElement.innerHTML = `${inputValue} PLN = ${result.toFixed(
      2
    )} ${currency}`;
  };

  const onformSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-input");
    const currencyValue = document.querySelector(".js-select");

    const inputValue = +amountElement.value;
    const currency = currencyValue.value;

    const result = calculateCurrency(inputValue, currency);

    updateResult(inputValue, result, currency);
  };

  const init = () => {
    const clearForm = document.querySelector(".js-reset");
    clearForm.addEventListener("click", clearFormOnClick);

    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onformSubmit);
  };
  init();
}

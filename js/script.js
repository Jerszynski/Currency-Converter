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

  const score = document.querySelector(".js-score");
  const clearFormOnClick = () => {
    score.innerHTML = "";
  };

  const updateResult = (inputValue, result, currency) => {
    score.innerHTML = `${inputValue} PLN = ${result.toFixed(2)} ${currency}`;
  };

  const onformSubmit = (event) => {
    event.preventDefault();

    const amount = document.querySelector(".js-input");
    const currencyValue = document.querySelector(".js-select");

    const inputValue = +amount.value;
    const currency = currencyValue.value;

    const result = calculateCurrency(inputValue, currency);

    updateResult(inputValue, result, currency);
  };

  const init = () => {
    const clearForm = document.querySelector(".js-reset");
    clearForm.addEventListener("click", clearFormOnClick);

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onformSubmit);
  };
  init();
}

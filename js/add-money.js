document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-add-money").value;
    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "1234") {
      const accountBalance =
        document.getElementById("account-balance").innerText;
      const addMoneyNumber = parseFloat(addMoney);
      const accountBalanceNumber = parseFloat(accountBalance);
      const newBalance = addMoneyNumber + accountBalanceNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert('Wrong "Pin Number"! Please enter your correct "Pin Number"');
    }
  });

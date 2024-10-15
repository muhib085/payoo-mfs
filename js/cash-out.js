document
  .getElementById("btn-cashout-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = document.getElementById("input-cashout-money").value;
    const pinNumber = document.getElementById("input-cashout-number").value;

    if (pinNumber === "1234") {
      const accountBalance =
        document.getElementById("account-balance").innerText;
      const cashOutMoneyNumber = parseFloat(cashOutMoney);
      const accountBalanceNumber = parseFloat(accountBalance);
      const newBalance = accountBalanceNumber - cashOutMoneyNumber;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert('Wrong "Pin Number"! Please enter your correct "Pin Number"');
    }
  });

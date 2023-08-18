document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-2:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  // step-7:clear the deposit field
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("please Provide a valid amount of money");
    return;
  } else {
  }
  // step-5

  const totalBalanceElement = document.getElementById("total-balance");
  const ExistingTotalBalanceString = totalBalanceElement.innerText;
  const ExistingTotalBalance = parseFloat(ExistingTotalBalanceString);

  if (newWithdrawAmount > ExistingTotalBalance) {
    alert("Entered amount is not available ");
    return;
  }

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  // step-6
  const currentTotalBalance = ExistingTotalBalance - newWithdrawAmount;
  totalBalanceElement.innerText = currentTotalBalance;
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // step-2:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  // step-5

  const totalBalanceElement = document.getElementById("total-balance");
  const ExistingTotalBalanceString = totalBalanceElement.innerText;
  const ExistingTotalBalance = parseFloat(ExistingTotalBalanceString);
  // step-6
  const currentTotalBalance = ExistingTotalBalance - newWithdrawAmount;
  totalBalanceElement.innerText = currentTotalBalance;
  // step-7:clear the deposit field
  withdrawField.value = "";
});

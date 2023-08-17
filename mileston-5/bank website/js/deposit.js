// step-1:add event listener to deposit btn
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit input field
  //for input field use.value to get the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3: get the deposit total amount
  //for non-input(element other than text area,input) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const ExistingTotalDepositString = depositTotalElement.innerText;
  const ExistingTotalDeposit = parseFloat(ExistingTotalDepositString);
  //step-4: add numbers to set the total deposit

  const CurrentDepositTotal = ExistingTotalDeposit + newDepositAmount;
  depositTotalElement.innerText = CurrentDepositTotal;
  // step-5:get balance current Total
  const totalBalanceElement = document.getElementById("total-balance");
  const ExistingTotalBalanceString = totalBalanceElement.innerText;
  const ExistingTotalBalance = parseFloat(ExistingTotalBalanceString);
  //step-6:calculate current total balance
  const currentTotalBalance = ExistingTotalBalance + newDepositAmount;
  totalBalanceElement.innerText = currentTotalBalance;
  // step-7:clear the deposit field
  depositField.value = "";
});

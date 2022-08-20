document.getElementById("withdraw-btn").addEventListener("click", function () {
  //getting the new withdraw amount
  const newWithdrawFeild = document.getElementById("new-withdraw");
  const newWithdrawString = newWithdrawFeild.value;
  const newWithdrawAmount = parseFloat(newWithdrawString);

  //clearing newWithdrawFeild
  newWithdrawFeild.value = "";

  //checking isNaN for newDepositAmount
  if (isNaN(newWithdrawAmount)) {
    alert("Please Provide a valid amount");
    return;
  }
  //getting previousTotalBalanceAmount
  const previousTotalBalanceElement = document.getElementById("total-balance");
  const previousTotalBalanceString = previousTotalBalanceElement.innerText;
  const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);

  //check if withdraw amount is sufficient or not
  if (newWithdrawAmount > previousTotalBalanceAmount) {
    alert("Insufficient balance. Please provide a valid amount");
    return;
  } else {
    //getting the previous total withdraw amount
    const previousTotalWithdrawElement =
      document.getElementById("total-withdraw");
    const previousTotalWithdrawString = previousTotalWithdrawElement.innerText;
    const previousTotalWithdrawAmount = parseFloat(previousTotalWithdrawString);

    //calculating current total withdraw amount
    const currentTotalWithdrawAmount =
      newWithdrawAmount + previousTotalWithdrawAmount;

    //setting the current total withdraw amount into previous total withdraw element
    previousTotalWithdrawElement.innerText = currentTotalWithdrawAmount;
    //calculating current total balance after withdraw
    const currentTotalBalanceAmount =
      previousTotalBalanceAmount - newWithdrawAmount;

    //setting the current total balance into previous total balance element
    previousTotalBalanceElement.innerText = currentTotalBalanceAmount;
  }
});

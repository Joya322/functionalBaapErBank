document.getElementById("deposit-btn").addEventListener("click", function () {
    //getting new deposit amount
    const newDepositFeild = document.getElementById("new-deposit");
    const newDepositString = newDepositFeild.value;
    const newDepositAmount = parseFloat(newDepositString);

    //clearing newDepositFeild
    newDepositFeild.value = "";

    //checking isNaN for newDepositAmount
    if (isNaN(newDepositAmount)) {
        alert("Please Provide a valid amount");
        return;
    }

    //getting previous total deposit amount
    const previousTotalDepositElement =
        document.getElementById("total-deposit");
    const previousTotalDepositString = previousTotalDepositElement.innerText;
    const previousTotalDepositAmount = parseFloat(previousTotalDepositString);

    //calculating current total deposit amount
    const currentTotalDepositAmount = newDepositAmount + previousTotalDepositAmount;

    //setting the currentTotalDepositAmount to the previousTotalDepositElement
    previousTotalDepositElement.innerText = currentTotalDepositAmount;

    //getting the previous total balance
    const previousTotalBalanceElement =
        document.getElementById("total-balance");
    const previousTotalBalanceString = previousTotalBalanceElement.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);

    //calculating current total balance amount
    const currentTotalBalanceAmount = previousTotalBalanceAmount + newDepositAmount;

    //setting the currentTotalBalanceAmount to the previousTotalBalanceElement
    previousTotalBalanceElement.innerText = currentTotalBalanceAmount;


});
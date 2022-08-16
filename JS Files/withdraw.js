// withdraw claculation here.

//step-1: add Event handler on withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2: get user input 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //Step-3 : get the current withdraw amount.
    const withdrawBox = document.getElementById('withdraw-box');
    const currentWithdrawAmountString = withdrawBox.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawAmountString);

    //S-5 : get the value of balance.
    const balanceBox = document.getElementById('balance-box');
    const previousBalanceString = balanceBox.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // substep : Error handling
    if (newWithdrawAmount > previousBalance) {
        alert('You have not sufficient amount.')
        return;
    }

    //Step-4 : set/update the value on withdraw amount.
    const liveWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    withdrawBox.innerText = liveWithdrawAmount;

    //S-6 : set/update the value on balance.
    const currentBalance = previousBalance - newWithdrawAmount;
    balanceBox.innerText = currentBalance;

    // step-7: clear the input fields
    withdrawField.value = '';

})

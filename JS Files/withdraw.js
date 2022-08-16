// withdraw claculation here.

//step-1: add Event handler on withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2: get user input 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;

    //Step-3 : get the current withdraw amount.
    const withdrawBox = document.getElementById('withdraw-box');
    const currentWithdrawAmount = withdrawBox.innerText;

    //Step-4 : set/update the value on withdraw amount.
    const liveWithdrawAmount = parseFloat(currentWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawBox.innerText = liveWithdrawAmount;

    //S-5 : get the value of balance.
    const balanceBox = document.getElementById('balance-box');
    const previousBalance = balanceBox.innerText;

    //S-6 : set/update the value on balance.
    const currentBalance = parseFloat(previousBalance) - parseFloat(newWithdrawAmount);
    balanceBox.innerText = currentBalance;


    // step-7: clear the input fields
    withdrawField.value = '';

})

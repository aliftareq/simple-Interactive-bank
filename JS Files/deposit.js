// deposit claculation here.

//step-1: add Event handler on deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    console.log('deposit button clicked')

    //step-2: get user input 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    //step-3 : get the current deposit amount 
    // element except(input & textarea) we have to use innerText.
    const depositBox = document.getElementById('deposit-box');
    const currntDepositAmount = depositBox.innerText;

    //Step-4 : set/update the value on deposit.
    // you will get the inner text as a string , so you must have to convert these string in numbers through parseInt/parsefloat.
    const liveDepositAmount = parseFloat(currntDepositAmount) + parseFloat(newDepositAmount);
    depositBox.innerText = liveDepositAmount;

    //S-5 : get the value of balance.
    const balanceBox = document.getElementById('balance-box');
    const previousBalance = balanceBox.innerText;

    //S-6 : set/update the value on balance.
    const currentBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);
    balanceBox.innerText = currentBalance;

    // step-7: clear the input fields
    depositField.value = ''
})
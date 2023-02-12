//step no 01: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step no 02: get the deposit amount from deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountSting = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountSting);
    console.log(typeof newDepositAmount);

    //set-3 get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);

    //step-4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6 calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7 clear the deposit value
    depositField.value = '';

})
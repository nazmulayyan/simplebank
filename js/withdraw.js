//step-1:add the even handelar with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2: get the withdraw value from input withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7: clear the input field value after withdraw money
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide valid number')
        return;
    }
    //step-3 get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    console.log(typeof previousWithdrawTotal)

    
    //step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal)

    if(newWithdrawAmount > previousBalanceTotal){
        alert("don't have enough balance for withdraw")
        return;
    }
    //step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-6.5: set the new balance total


    
})
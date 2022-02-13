function getInputAmount(idName) {
    // user deposite amount
    const inputFieldValue = document.getElementById(idName);
    const inputAmount = parseFloat(inputFieldValue.value);

    // clear input 
    inputFieldValue.value = '';
    return inputAmount;
};

function setStatement (idName, inputMoney){
    // user statement text
    const statementTextField = document.getElementById(idName);
    const statementFieldAmount = parseFloat(statementTextField.innerText);

    statementTextField.innerText = inputMoney + statementFieldAmount;
}

function getTotalValue(){
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);
    return totalBalanceAmount;
}

function updateTotalBalance(inputMoney, isAdd) {
    // total amount text
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);

    if( isAdd == true){
        totalBalanceField.innerText = totalBalanceAmount + inputMoney ;
    }else{
        totalBalanceField.innerText = totalBalanceAmount - inputMoney ;
    }
}




// deposite section
document.getElementById('deposite-btn').addEventListener('click', function () {

    const depositeAmount = getInputAmount('deposite-amount');
    const totalBalanceAmount = getTotalValue();

    if(depositeAmount > 0 ){
        
    setStatement ('deposite-balance', depositeAmount);

    updateTotalBalance(depositeAmount, true);

    }


})


// withraw section
document.getElementById('withraw-btn').addEventListener('click', function () {

    const withrawAmount = getInputAmount('withraw-amount');
    
    const totalBalanceAmount = getTotalValue();
    if(withrawAmount > 0 && withrawAmount <= totalBalanceAmount){

    setStatement ('withraw-balance', withrawAmount);

    updateTotalBalance(withrawAmount, false);
    }else{
        alert("You don't have enough Balance.")
    }

})

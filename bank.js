// deposite section
document.getElementById('deposite-btn').addEventListener('click', function () {

    // user deposite amount
    const depositeField = document.getElementById('deposite-amount');
    const depositeAmount = parseFloat(depositeField.value);

    // user deposite text
    const depositeTextField = document.getElementById('deposite-balance');
    const depositeFieldAmount = parseFloat(depositeTextField.innerText);

    // total amount text
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);

    // current deposite value
    const currentDepositeAmount = depositeAmount + depositeFieldAmount;

    // total balance after deposite
    const currentTotalAmount = depositeAmount + totalBalanceAmount;


    // set deposite value
    depositeTextField.innerText = currentDepositeAmount;
    // set total amount value
    totalBalanceField.innerText = currentTotalAmount;

    // clear input 
    depositeField.value = '';
})


// withraw section
document.getElementById('withraw-btn').addEventListener('click', function () {
    // user withraw amount
    const withrawField = document.getElementById('withraw-amount');
    const withrawAmount = parseFloat(withrawField.value);

    // user withraw text
    const withrawTextField = document.getElementById('withraw-balance');
    const withrawFieldAmount = parseFloat(withrawTextField.innerText);

    // total amount text
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);

    // clear input 
    withrawField.value = '';

    if (totalBalanceAmount >= withrawAmount) {


        // current deposite value
        const currentWithrawAmount = withrawAmount + withrawFieldAmount;

        // total balance after deposite
        const currentTotalAmount = totalBalanceAmount - withrawAmount;


        // set deposite value
        withrawTextField.innerText = currentWithrawAmount;
        // set total amount value
        totalBalanceField.innerText = currentTotalAmount;

        // clear input 
        withrawField.value = '';
    }
    else if (totalBalanceAmount < withrawAmount) {
        alert("Sorry you don't have enough balance!!");
    }
})

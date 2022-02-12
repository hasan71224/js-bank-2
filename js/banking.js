function getInputValue(input){
    const inputFild = document.getElementById(input);
    const amountText = inputFild.value;
    const newAmount = parseFloat(amountText);
    //input filed clear
    inputFild.value = "";
    return newAmount;
}
function updateTotalField(totalFieldId, Amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousText = totalElement.innerText;
    const previousTotal = parseFloat(previousText);
    const newTotalElement = Amount + previousTotal;
    totalElement.innerText = newTotalElement;
}
function getCurrentBalance(){
    const totalBalance = document.getElementById("total-account-balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    return previousTotalBalance;
}

function updateBalance(newtotalAmount, toAdd){
    const totalBalance = document.getElementById("total-account-balance");
    // const totalBalanceText = totalBalance.innerText;
    // const previousTotalBalance = parseFloat(totalBalanceText);
    const previousTotalBalance = getCurrentBalance();
    if(toAdd == true){
        totalBalance.innerText = previousTotalBalance + newtotalAmount;
    }
    else{
        totalBalance.innerText = previousTotalBalance - newtotalAmount;
    }
}

document.getElementById("deposit-button").addEventListener("click",function(){
    /*
     const depositInput = document.getElementById("deposit-input");
     const depositAmountText = depositInput.value;
     const newDepositAmount = parseFloat(depositAmountText);
     */
    /*--------const newDepositAmount = getInputValue("deposit-input");------------*/
    /*
    // update deposit
    // const depositTotal = document.getElementById("deposit-total");
    // const previousDepositText = depositTotal.innerText;
    // const previousDeposit = parseFloat(previousDepositText);
    // const newTotalDeposit = newDepositAmount + previousDeposit;
    // depositTotal.innerText = newTotalDeposit;
    */
   /*-------------- updateTotalField("deposit-total",newDepositAmount);-------------*/

    //update balance
    /*
    const totalBalance = document.getElementById("total-account-balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const AccounttotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = AccounttotalBalance;
*/
    const newDepositAmount = getInputValue("deposit-input");
    if(newDepositAmount>0){
        updateTotalField("deposit-total",newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    

    // //input filed clear
    // depositInput.value = "";
})
// withdraw button
document.getElementById("withdraw-button").addEventListener("click", function(){
    /*
     const totalWithdraw = document.getElementById("withdraw-input");
     const totalWithdrawText = totalWithdraw.value;
     const newtotalWithdrawAmount = parseFloat(totalWithdrawText);
    */
     /*--------------const newtotalWithdrawAmount = getInputValue("withdraw-input");-----------*/

    //update Withdraw
    /*
    const previousWithdraw= document.getElementById("withdraw-total");
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const totalWithdrawAmount = previousWithdrawAmount + newtotalWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount;
    */
   /*--------------updateTotalField("withdraw-total",newtotalWithdrawAmount);------------*/

    //update balance
    /*
    const totalBalance = document.getElementById("total-account-balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const AccounttotalBalance = previousTotalBalance - newtotalWithdrawAmount;
    totalBalance.innerText = AccounttotalBalance;
    */
    const newtotalWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if(newtotalWithdrawAmount>0 && newtotalWithdrawAmount<currentBalance){
        updateTotalField("withdraw-total",newtotalWithdrawAmount);
        updateBalance(newtotalWithdrawAmount, false);
    }
    else{
        console.log("not Alow");
    }
    
    // //clear withdraw input box
    // totalWithdraw.value="";
})
function getInputFieldById(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    // inputField.value = '';//eta dile saving calculate kora jacce na!
    if(isNaN(inputAmount)){
        alert('Please Enter a Number');
    }
    else if(inputAmount < 0){
        alert('Please Enter a positive Number')
    }
    return inputAmount;

    
}
function getTextElementById(elementId){
    const totalTextElement = document.getElementById(elementId);
    const totalTextAmountString = totalTextElement.innerText;
    const totalTextAmount = parseFloat(totalTextAmountString);
    
    return totalTextAmount;
}
function setTextElementById(elementId, newValue){
    const totalTextElement = document.getElementById(elementId); 
    totalTextElement.innerText = newValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){

    const incomeAmount = getInputFieldById('income-field');
    const foodAmount = getInputFieldById('food-field');
    const rendAmount = getInputFieldById('rend-field');
    const colthsAmount = getInputFieldById('colths-field');
    //calculate total cost
    const totalCost = foodAmount + rendAmount + colthsAmount;
     if(totalCost > incomeAmount){
        alert('Income er teke koros beshi kora jabe nah');
    }
    else{

        //Get Total Expense element
    const totalExpenseElement = getTextElementById('total-expense');
    setTextElementById('total-expense', totalCost)
       //calculate balance total
    
    }
   const totalBalance = incomeAmount - totalCost;
    //GEt total balance element
    const totalBalanceElement = getTextElementById('total-balance');
    setTextElementById('total-balance', totalBalance);
});

document.getElementById('btn-save').addEventListener('click', function(){
    const incomeAmount = getInputFieldById('income-field');
    const savingPercentage = getInputFieldById('save-field');
    const SavingElement = getTextElementById('total-saving');
    const totalBalanceElement = getTextElementById('total-balance');
    //calculate
    
    const totalSaving = incomeAmount/100*savingPercentage;
    if(totalSaving > totalBalanceElement ){
        alert('Tmr Income er teke saving beshi hobe na');
       
    }
    else if( savingPercentage >100){
        alert('You can not overight 100%')
    }
    else{

    setTextElementById('total-saving', totalSaving);
    
    //calculate remaining balance
    const remainingBalance = totalBalanceElement - totalSaving;
    //get remaining bl
    const totalRemaning = getTextElementById('total-remining');
    setTextElementById('total-remining', remainingBalance);
    }

    
});
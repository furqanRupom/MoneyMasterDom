function getFieldValue(fieldId) { 
    
    const getInputField = document.getElementById(fieldId);
    const getInputValueString = getInputField.value;

    if(isNaN(getInputValueString)){
        alert('please Enter a Positive Number of Amount')
        return
    }
    else{
        const getInputValue = parseInt(getInputValueString);  
        return getInputValue;

    }
}

function setTotalValue(TotalValueId, value) {
    const getValueText = document.getElementById(TotalValueId);
    if(isNaN(value)){
        getValueText.innerText = ''
    }else{

        getValueText.innerText = value
    }

}


document.getElementById('calculate-btn').addEventListener('click', function () {
    console.log('hello')
    const getIncomeAmount = getFieldValue('income-field');
    const getFoodAmount = getFieldValue('food-field');
    const getRentAmount = getFieldValue('rent-field');
    const getClothsAmount = getFieldValue('cloths-field');
    const getTotalAmountOfItem = getFoodAmount + getRentAmount + getClothsAmount
    const getRemainBalance = getIncomeAmount - getTotalAmountOfItem;
    setTotalValue('expense-total', getTotalAmountOfItem);
    setTotalValue('Balance-total', getRemainBalance);
})




// save

document.getElementById('save-btn').addEventListener('click', function () {
    const getIncomeAmount = getFieldValue('income-field');
    const getFoodAmount = getFieldValue('food-field');
    const getRentAmount = getFieldValue('rent-field');
    const getClothsAmount = getFieldValue('cloths-field');
    const getTotalAmountOfItem = getFoodAmount + getRentAmount + getClothsAmount
    const getRemainBalance = getIncomeAmount - getTotalAmountOfItem;
    const getPercentageAmount = getFieldValue('save-field');
    const getPercentage = (getIncomeAmount * getPercentageAmount) / 100;  
    setTotalValue('saving-total', getPercentage);
    const getRemainingBalance = getRemainBalance - getPercentage
    setTotalValue('remain-total', getRemainingBalance);
})


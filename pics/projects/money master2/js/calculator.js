function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    
    return inputFieldValue;
    
}

function getTextFieldElement(elementId){
    const textField = document.getElementById(elementId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueString);
    return textFieldValue;
}

 function setTextElementValue(elementId,newValue){
  const textField = document.getElementById(elementId);
  textField.innerText = newValue;

 }

 document.getElementById('btn-cal').addEventListener('click',function(){
    const foodEx = getInputFieldValueById('food-exp');
    const rentEx = getInputFieldValueById('rent-exp');
    const clothEx = getInputFieldValueById('clothes-exp');

    const retailEx = foodEx + rentEx + clothEx;

    const totalEx = getTextFieldElement('tot-exp');

    const newTotalEx = totalEx + retailEx;

    setTextElementValue('tot-exp',newTotalEx);

    const income = getInputFieldValueById('income-tot');
    const totalBal = getTextFieldElement('tot-bal');

    const newTotalBal = income - newTotalEx;
    
    setTextElementValue('tot-bal',newTotalBal);

 })

 document.getElementById('btn-save').addEventListener('click',function(){
    const income = getInputFieldValueById('income-tot');
    const saveFieldValue = getInputFieldValueById('save-fld');
    const savingAmount = getTextFieldElement('saving-amnt');
    const totalEx = getTextFieldElement('tot-exp');

    const newSavingAmount = (income * saveFieldValue)/100;

    setTextElementValue('saving-amnt',newSavingAmount);

    const remainingBal = getTextFieldElement('rem-bal');

    const newTotalEx = totalEx + newSavingAmount;
    const newRemainingBal = income - newTotalEx;
    setTextElementValue('rem-bal',newRemainingBal);
 })

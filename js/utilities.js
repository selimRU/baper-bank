function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId, amount) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    const newTotalDepositAmount = textElementValue + amount;
    textElement.innerText = newTotalDepositAmount;

}

function getCurrentBalance() {
    const textElement = document.getElementById('total-bal');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function newBalanceTotalValueById(amount, isAdd) {
    const textElement = document.getElementById('total-bal');
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    if (isAdd == true) {
        textElement.innerText = textElementValue + amount;
    } else {
        textElement.innerText = textElementValue - amount;
    }
}
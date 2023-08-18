document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getInputFieldValueById('depo-amount');
    if (depositAmount > 0) {
        getTextElementValueById('total-depo', depositAmount);

        newBalanceTotalValueById(depositAmount, true);
    }
    
})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withAmount = getInputFieldValueById('with-amount');
    const currentBal = getCurrentBalance()
    if (withAmount > 0 && withAmount < currentBal) {
        getTextElementValueById('tot-with', withAmount);
        newBalanceTotalValueById(withAmount, false);
    }
    if (withAmount > currentBal) {
        alert('insufficient balance')
        return;
    }

})
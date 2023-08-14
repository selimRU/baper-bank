document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithAm = getInputFieldValueById('with-amount');
    const preWithTotalAm = getTextElementValueById('tot-with');
    const newTotalWithAm = preWithTotalAm + newWithAm;
    setTextElementValueById('tot-with',newTotalWithAm);
    const preTotalBal = getTextElementValueById('total-bal');
    const newTotalBalAm = preTotalBal - newWithAm;
    setTextElementValueById('total-bal',newTotalBalAm);
})
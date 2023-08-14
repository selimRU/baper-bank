document.getElementById('btn-deposit').addEventListener('click',function(){
const newDeAm = getInputFieldValueById ('depo-amount');
const PreTotalDeAm = getTextElementValueById('total-depo');
const newDeTotalAm = newDeAm + PreTotalDeAm;
setTextElementValueById('total-depo',newDeTotalAm);
const preTotalBalAm = getTextElementValueById('total-bal');
const newTotalBal = preTotalBalAm + newDeAm;
setTextElementValueById('total-bal',newTotalBal);
})
function xiaomiNumber(isIncrease){
const xiaomiNumberField = document.getElementById('xiaomi-num');
const xiaomiNumberString = xiaomiNumberField.value
const xiaomiNumberValue = parseInt(xiaomiNumberString);
let newXiaomiNumber;
  if (isIncrease === true) {
    newXiaomiNumber = xiaomiNumberValue + 1;
  }
  else{
    newXiaomiNumber = xiaomiNumberValue - 1;
  }
  xiaomiNumberField.value = newXiaomiNumber;
  return newXiaomiNumber;
}

 function xiaomiTotaLPrice(newXiaomiNumber){
    const totalPrice = newXiaomiNumber * 5500;
    const totalPriceField = document.getElementById('xiaomi-price');
    totalPriceField.innerText = totalPrice;
 }
 function textElementValue(elementId){
    const  textElement = document.getElementById(elementId);
    const  textElementString = textElement.innerText;
    const  textElementValue = parseInt(textElementString);
  
    return textElementValue
  }
  function calSubTotal(){
    const TextElementValueIp = textElementValue('price-am-i');
    const TextElementValueXia = textElementValue('xiaomi-price');
    const currentSubTotal = TextElementValueIp + TextElementValueXia;
     
    const textElementSub = document.getElementById('sub-tot');
    textElementSub.innerText = currentSubTotal;
    const taxAmount = currentSubTotal * 0.10;
    const textElementTx = document.getElementById('tax-tot');
    textElementTx.innerText = taxAmount;
    const totalAmount = currentSubTotal + taxAmount;
    const textElemenTotAm = document.getElementById('tot-am');
    textElemenTotAm.innerText = totalAmount;

  }  
document.getElementById('btn-plus-xiaomi').addEventListener('click',function(){
    const newXiaomiNumber = xiaomiNumber(true)
    xiaomiTotaLPrice(newXiaomiNumber);
    calSubTotal();
})
document.getElementById('btn-minus-xia').addEventListener('click',function(){
    const newXiaomiNumber = xiaomiNumber(false)
    xiaomiTotaLPrice(newXiaomiNumber);
    calSubTotal()
})

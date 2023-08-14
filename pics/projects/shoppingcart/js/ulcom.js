function textElementValue(elementId){
    const  textElement = document.getElementById(elementId);
    const  textElementString = textElement.innerText;
    const  textElementValue = parseInt(textElementString);
  
    return textElementValue
}
  function calculateSubTotal(){
    const textElementValueIp = textElementValue('price-am-i');
    const textElementValueXia = textElementValue('xiaomi-price');
    //const currentSubTotal = textElementValueIp + textElementValueXia;
   // const textElementSub = document.getElementById('sub-tot');
   // textElementSub.innerText = currentSubTotal;

    const taxAmount = currentSubTotal * 0.15;
    const textElementTx = document.getElementById('tax-tot');
    textElementTx.innerText = taxAmount;

}

  
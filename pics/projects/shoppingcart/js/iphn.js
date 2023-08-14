 function iphoneNumber(isIncrease){
    const iphoneNumberField = document.getElementById('iphone-fld-i');
    const iphoneNumberValueString = iphoneNumberField.value;
    const iphoneNumberValue = parseInt(iphoneNumberValueString);
    let newIphoneNumber;
       if (isIncrease === true) {
   
        newIphoneNumber = iphoneNumberValue + 1;
   }
       else{
   
        newIphoneNumber = iphoneNumberValue - 1;
       }
       
       iphoneNumberField.value =  newIphoneNumber;
   
       return newIphoneNumber;
   }
   function iphonePriceTotal(newIphoneNumber){
       const iphoneTotalPrice = newIphoneNumber * 10500;
       const iphonePriceTextField = document.getElementById('price-am-i');
       iphonePriceTextField.innerText = iphoneTotalPrice;
       
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
   document.getElementById('btn-plus-i').addEventListener('click',function(){
      const  newIphoneNumber = iphoneNumber(true);
       iphonePriceTotal(newIphoneNumber);
       calSubTotal();
   })
   document.getElementById('btn-minus-i').addEventListener('click',function(){
       const  newIphoneNumber  = iphoneNumber(false);
       iphonePriceTotal(newIphoneNumber);
       calSubTotal();
   })
 function getPin(){
 const pin = generatePin();
 const pinString = pin + '';
 if (pinString.length === 4) {
    return pin;
 }
 else{
    return getPin();
 }

}

function generatePin(){
const random = Math.round(Math.random()*10000);
 return random;
}

 document.getElementById('gen-pin').addEventListener('click',function(){
     const pin = getPin();
     const pinGenInputField = document.getElementById('pin-field-gen');
      pinGenInputField.value = pin;
 })
 document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const pinField = document.getElementById('pin-num');
    const pinFieldValue = pinField.value;
    if (isNaN(number)) {
      if (number === 'C') {
         pinField.value = '';
      }
      else if (number === '<') {
       const digits = pinFieldValue.split('');
        digits.pop();
        const remaining = digits.join('');
        pinField.value = remaining;
      } 
    } 
    else{
      
      
      const newPinValue = pinFieldValue + number;
      pinField.value = newPinValue;

    } 
 })
  document.getElementById('btn-sub').addEventListener('click',function(){
   const pinGenInputField =document.getElementById('pin-field-gen');
   const pinGen = pinGenInputField.value;
   const pinField = document.getElementById('pin-num');
   const pinSub = pinField.value;
   const pinSuccess = document.getElementById('pin-suc');
   const pinFail = document.getElementById('pin-fail');
   if (pinGen === pinSub)  {
      pinSuccess.block;
   }
else{
   pinFail.block;
}
})
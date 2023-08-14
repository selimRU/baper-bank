function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    
    if (pinString.length === 4) {
        return pin; 
    } 
    else {
        return getPin;
}

}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('gen-pinn').addEventListener('click',function(){
      const pin = getPin();
    const pinGenFld = document.getElementById('pin-fld');
    pinGenFld.value = pin;
})
document.getElementById('calc-del').addEventListener('click',function(event){
    const number = event.target.innerText;
    const inputField = document.getElementById('sub-pin');
    const preInputNum = inputField.value;
    
    if (isNaN(number))  {
        if (number === 'C') {
            inputField.value = '';
        }
         else if (number === '<'){
            
        const digits = preInputNum.split('');
        digits.pop();
        const remaining = digits.join('');
        inputField.value = remaining;
         }
    } 
    else {
        const neweInputNum = preInputNum + number;
        inputField.value = neweInputNum;


    }
})
document.getElementById('verify').addEventListener('click',function(){
    const pinGenFld = document.getElementById('pin-fld');
    const pinnValue = pinGenFld.value;
    pinGenFld.value = '';
    const inputField = document.getElementById('sub-pin');
    const inputFieldVal = inputField.value;
    inputField.value = '';
    const successPin = document.getElementById('pin-suc');
    const failPin = document.getElementById('pin-fail');

    if (pinnValue === inputFieldVal) {
        successPin.style.display = 'block';
        failPin.style.display = 'none';
    }
     else {
        
        failPin.style.display = 'block';
        successPin.style.display = 'none'; 
    }
})

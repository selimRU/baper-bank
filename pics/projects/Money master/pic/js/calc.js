 document.getElementById('btn-cal').addEventListener('click',function(){
   const foodField = document.getElementById('food-exp');
   const foodFieldValueString = foodField.value;
   const foodFieldValue = parseFloat(foodFieldValueString);


   const rentField = document.getElementById('rent-exp');
   const rentFieldValueString = rentField.value;
   const rentFieldValue = parseFloat(rentFieldValueString);
   

   const cloField = document.getElementById('clothes-exp');
   const cloFieldValueString = cloField.value;
   const cloFieldValue = parseFloat(cloFieldValueString);
   
   
   const totExpElement = document.getElementById('tot-exp');
   const totExpElementValueString = totExpElement.innerText;
   const totExpElementValue = parseFloat(totExpElementValueString);
   

   const retailExp =  foodFieldValue + rentFieldValue + cloFieldValue;

   const newTotalExp = totExpElementValue + retailExp;
   
   totExpElement.innerText = newTotalExp;

})

document.getElementById("btns").addEventListener('click', ()=>{
 var EnterAmount = document.getElementById("enter-amount").value;
  var currencyFrom = document.getElementById("currency-from").value;
  var currencyTo = document.getElementById("currency-to").value;
  var convertCurrency = document.getElementById("abc");

console.log(EnterAmount);
console.log(currencyFrom);
console.log(currencyTo);

 var url=`https://api.forexrateapi.com/v1/convert?api_key=15f270594e18dffbe327e8e4a89b6ff4&from=${currencyFrom}&to=${currencyTo}&amount=${EnterAmount}`;
 var xhr=new XMLHttpRequest();
 xhr.onreadystatechange =()=>{
    if(xhr.readyState==4 && xhr.status==200){
        var data=JSON.parse(xhr.responseText);
        
        var result= (data.result);
        
       var currencyValue = Math.floor(result);

        convertCurrency.innerHTML = currencyValue;
       
    }
 }
 xhr.open('GET', url , true)
 xhr.send();
})
var form = document.querySelector("form");
var div =  document.querySelector("#result")

function cToF(celsius) 
{
  var cTemp = celsius;
  var fResult = cTemp * 9 / 5 + 32;
  return fResult;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var cResult = (fTemp - 32) * 5 / 9;
  return cResult
} 

form.addEventListener("submit", function(e){

    event.preventDefault();
    
    var input = form.elements[input].value;
    let convertedTemp = ""

    if (form.elements["F"].checked === true){
        
        fToC()
        div.innertext = ConvertedTemp;
        event.preventDefault()
       } else {
        cToF()
        div.innertext = ConvertedTemp;
        event.preventDefault()
       }


})





/*

VVVVVV everything I tried... in pieces 



document.getElementById(submitBtn).addEventListener("submit", () => {
    
    console.log(document.getElementById("entry").value)
    event.preventDefault()

})




  var element;
  element = document.getElementBycla("result");
  if (element) {
      element.innerHTML = "-new content-";
  }

let new= document.createElement("p")
.appendChild
e.preventDefault()



function cToF(celsius) 
{
  var cTemp = celsius;
  var fResult = cTemp * 9 / 5 + 32;
  return fResult;
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var cResult = (fTemp - 32) * 5 / 9;
  return cResult
} 
*/
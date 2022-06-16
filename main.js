var input1 = document.getElementById("n1");
var input2 = document.getElementById("n2");

function myFunction(){
 //convert to int 
 
  var num1 = parseInt(input1.value);
  var num2 = parseInt(input2.value);   
  var sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}`);

}


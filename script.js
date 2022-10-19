// alert( " Hello, thirunavukkarasu learn Javascript");
// document.write("Hello");
document.getElementById("text1").innerHTML="JAVASCRIPT!";
a=document.getElementById("first_name").innerHTML;
b=document.getElementById("last_name").innerHTML;

function addition()
{
   var x=Number(document.getElementById("first_name").value);
   var y=Number(document.getElementById("last_name").value);
   var z=x+y;
   document.getElementById("Add1").innerHTML=z;
}
function Substraction()
{
   var x=Number(document.getElementById("first_name").value);
   var y=Number(document.getElementById("last_name").value);
   var z=x-y;
   document.getElementById("Sub2").innerHTML=z;
}
function Multiplication()
{
   var x=Number(document.getElementById("first_name").value);
   var y=Number(document.getElementById("last_name").value);
   var z=x*y;
   document.getElementById("Mul3").innerHTML=z;
}
function division()
{
   var x=Number(document.getElementById("first_name").value);
   var y=Number(document.getElementById("last_name").value);
   var z=x/y;
   document.getElementById("Div4").innerHTML=z;
}
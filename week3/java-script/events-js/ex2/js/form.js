function ageTest(){
   var myAge = document.getElementById("age").value; 
   if (myAge > 18){
       document.getElementById("message").innerHTML="You can drink";
   }
   else {
       document.getElementById("message").innerHTML = "you are not allowed to drink Yet. Grow up!";
   }
}
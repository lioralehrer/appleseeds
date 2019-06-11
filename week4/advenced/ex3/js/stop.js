var counter =1;

var intervalId = setInterval(function () {
    document.getElementById("numbers").innerHTML += `${counter} <br>`; 
     counter++;
    }, 500);
  
 document.getElementById("button").addEventListener('click', endTask );
 
 function endTask(){
    clearInterval(intervalId);
 }
 
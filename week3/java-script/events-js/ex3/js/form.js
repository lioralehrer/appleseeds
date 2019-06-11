function submit(){
    var myText = document.getElementById("interest").value;
    
    if (myText.length < 100){
        document.getElementById("message").innerHTML = "You must insert at least 100 characters in the field! "
    }
    else{
        document.getElementById("message").innerHTML = "Thank You! Have a nice day!"
    }
}
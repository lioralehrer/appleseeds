var loading = setTimeout(getMessage, 15000);

function getMessage(){
    document.getElementById("message").innerHTML = "Thank you for waiting! <br> No one in their right mind would wait for so long for a webpage to load";
    
}
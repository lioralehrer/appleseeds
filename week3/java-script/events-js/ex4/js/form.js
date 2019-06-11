var counter = 2;
function showPhoto() {
    if (counter % 2 == 0) {
        document.getElementById("image").innerHTML = "<image src='http://4everstatic.com/pictures/850xX/animals/wildlife/giraffe,-head,-put-out-the-tongue-224069.jpg'/>"
    } else{
        document.getElementById("image").innerHTML = "";
    }

    counter++;

}
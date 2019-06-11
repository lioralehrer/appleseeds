function  printCallNumber(){
    var counter = 0;
    return function(){
        counter++
        console.log(`I was invoked ${counter} times`);
        document.getElementById("text").innerHTML += `I was invoked ${counter} times <br>` ;
        return counter;
    }
}

var print = printCallNumber();
document.getElementById("button").addEventListener('click', print);
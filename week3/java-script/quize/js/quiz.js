 $('.carousel').carousel({
    interval: false
 })

 var counter = 0;
function check(correct, id, q) {
    if (correct) {
        counter += 10;


    }

    document.getElementById(id).style.backgroundColor = "pink";
    quest_btns = document.getElementsByClassName(q);
    for (let index = 0; index < quest_btns.length; index++) {
        let element = quest_btns[index];
        element.disabled = true;
        
    }
  
  

}




function getMyResult() {
    var write = document.getElementById("result");
    if (counter > 80) {
        write.innerHTML = "Hey, You are an expert!!   BRAVOW!!!! <br>  you got the medal of an expert movie  medal quiz world!! ";
    } else if (counter > 60) {
        write.innerHTML = "Good for you! you know prety much!! keep on!";
    } else if (counter > 40) {
        write.innerHTML = "Well you know something .....";
    } else if (counter > 20) {
        write.innerHTML = "Go See Some Movies.....";
    } else {
        write.innerHTML = "That was bad....";
    }

}

function playAgain(){ 
    location.reload();
}
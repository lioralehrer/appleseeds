

function getTime(){
    var time = new Date();
    var h = time.getHours();
     var m = time.getMinutes();
     var s = time.getSeconds();
    document.getElementById("time").innerHTML = `${h} : ${m} : ${s}`;
    
}

var intervalId = setInterval(getTime , 500);

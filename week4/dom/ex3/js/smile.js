function drawSmile() {
    eraceSmileys();
    var num = document.getElementById('smile').value;
    let container = document.getElementById('result');
    
       for (let i = 0; i < num; i++) {
        let picture = document.createElement("img");
        picture.src = "https://image.freepik.com/free-icon/smiley_318-121680.jpg";
        container.appendChild(picture);
       
    }
}

function eraceSmileys(){
    document.getElementById('result').innerHTML = "";
}
var btn = document.getElementById('submit');
btn.addEventListener('click', drawSmile);



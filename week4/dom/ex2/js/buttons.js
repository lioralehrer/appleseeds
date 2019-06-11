
var size = 40;
var textSize = document.getElementsByTagName('p')[0];



function increaseTextSize() {
    if (size < 100) {
        size++;
        textSize.style.fontSize = `${size}px`;

    }

}


function decreaseTextSize() {
        if (size > 6) {
        size--;
        textSize.style.fontSize = `${size}px`;
    }

}

document.getElementById('increase').addEventListener('click', increaseTextSize);
document.getElementById('decrease').addEventListener('click', decreaseTextSize);
function changeImage(elementObject) {
    switch (elementObject.id) {
        case first:
            document.getElementById('picture').style.backgroundImage = "url(../images/prow-feature)";
            break;
        case second:
            document.getElementById('picture').setAttribute("backgroun-image", "../images/scarlet_tanager.jpg");
            break;
        case third:
            document.getElementById('picture').setAttribute("backgroun-image", "../images/jaco.jpg");
            break;
    }
}

document.getElementById('first').addEventListener('click', changeImage);
document.getElementById('second').addEventListener('click', changeImage);
document.getElementById('third').addEventListener('click', changeImage);

function addclass(){
    var inside = $("div");
inside.each(element => {
    inside.addClass("some-container");
    console.log(inside);
});
}


setTimeout(addclass,5000);


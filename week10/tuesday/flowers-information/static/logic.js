$.ajax({
    type: "GET",
    url: "/get_flowers",
}).done(function (data) {
    var images = JSON.parse(data);
    images.forEach(element => {
        var img = document.createElement("img");
        img.src = element.src;
        document.body.appendChild(img);
    });
});
$("img").click(function(){
    $.ajax({
        type: "GET",
        url:"/get_flowers"
    }).done(function(data){
        var paragraph = JSON.parse(data);
        paragraph.forEach(element=>{
            var p = document.createElement("p")
            $("p").html(element.description);
            document.body.appendChild(p)
        })
    })
});
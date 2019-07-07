$(document).ready(function(){
    $('.add-color').bind('click',addColor );
    $('.get-colors').bind('click', getColors);
})

let addColor = function(){
    var color = $("#color").val();
    $.ajax({
        type:"POST",
        dataType:'json',
       url:"https://jsonplaceholder.typicode.com/todos",
        // url:"https://itc-colors.appspot.com/add_color",
        data:{
            color:color
        },
        success:function(responsemsg){
            console.log(responsemsg.color);
            $(".box").css("background-color",responsemsg.color);
           
        }
    })
}
let getColors = function(){
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        data:{},
        dataType:"json",
        success:function(responsemsg){
            console.log(responsemsg);
            for(let i=0;i<responsemsg.length;i++){
                let colorBox = $("<div>");
                colorBox.css('background-color',responsemsg.color);
                $(".colors-name").append(colorBox); 
            }
        },
        error:function(msg){
            console.log("error: "+msg);
            
        }
    });
}

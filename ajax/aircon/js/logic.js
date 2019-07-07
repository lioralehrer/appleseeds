$(document).ready(function(){
    setInterval(checkState,3000);
})
let checkState=function(){
    $.ajax({
        type:"GET",
        dataType:'json',
        url:"https://itc-colors.appspot.com/aircon/state",
        data:{
            state:"",
            mode:"",
            temp:""
        },
        success:function(responsemsg){
            console.log(responsemsg);
            if (responsemsg.state === "on"){
                $(".title").text(responsemsg.state);
                $(".mode").text(responsemsg.mode);
                $(".temp").text(responsemsg.temp);
            }
            else{
                $(".title").text(responsemsg.state); 
            }
        },
        error: function(msg){
            console.log(msg);
        }
    })
}
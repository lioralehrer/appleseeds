let myName = document.getElementById("name").value;
localStorage.setItem("name",myName);
$(".sayHello").hide();
$(".submit").click(function () {
    sayHello();
});
function sayHello(){
$(".sayHello").show();
document.getElementById("sayHello").innerHTML = localStorage.getItem("name");
}

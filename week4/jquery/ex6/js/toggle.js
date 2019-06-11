var btn = $("<button/>");
btn.text("Click me");
$("body").append(btn);

$("button").click(function(){

    $("div").toggleClass("blue-bg" );
});

// $("body").append($("<ul/>"));
// function buildList(num) {
//     for (let i = 1; i <= num; i++) {
//         $("ul").append($("<li/>")).text(`list item ${i}`);

//     }
// }
// buildList(5);

var navBar = $("<ul/>");
for (var i = 1; i <= 5; i++) {
    var myItem = $("<li/>");
    myItem.text(`list item ${i}`);
    navBar.append(myItem);
}
$("body").append(navBar);
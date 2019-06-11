var painter = {
    color: "gold",
    amount: 0,
    circles: [],
    COLORS: ["lightblue", "lightpink", "coral", "gold", "wheat"]
};
function getBrush(color) {
    let color = { color: color };
    painter.color = color;
    return color;
};
var circle ={
    color:"",
    currentPainterColor: ""
};

class Shape {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

let circle = new Shape("circle", "pink");
let squere = new Shape("squere", "green");
circle.radius = 3;
squere.edgeLength = 5;
squere.calcArea = function(edgeLength){
    let area = edgeLength*4;
    console.log(area);
    return area;
};
squere.calcArea2 = function () {
   let area = this.edgeLength * 4;
   console.log(area);
    return area;
}
circle.calcArea = function(radius){
    let area = radius*radius*Math.PI;
    console.log(area);
    return area;
}
circle.calcArea2 = function () {
    let area =  Math.PI * this.radius * this.radius;
    console.log(area);
    return area
}
function calcShapeArea(shape){
    if (shape.type === "circle"){
        circle.calcArea(circle.radius);
    }
    if (shape.type === "squere"){
        squere.calcArea(squere.edgeLength);
    }
}
function calcShapeArea2(shape) {
    shape.calcArea2();
}
calcShapeArea(circle);
calcShapeArea(squere);
calcShapeArea2(circle);
calcShapeArea2(squere);


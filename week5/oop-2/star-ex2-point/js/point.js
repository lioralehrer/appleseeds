class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(point) {
        let newPoint = new Point(this.x + point.x, this.y + point.y);
        console.log(newPoint);
        return newPoint;
    }
}
let point01 = new Point (3,5);
let point02 = new Point (2,2);
point01.plus(point02);
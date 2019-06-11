class Car {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
}
let carTools = {
    getCarColor: function (car) {
        return car.color;
    },
    getCarBrand: function (car) {
        return car.brand;
    },
    isEqule: function (car1, car2) {
        if (car1.color === car2.color && car1.brand === car2.brand) {
            console.log(true);
            return true;
        }
        else {
            console.log(false);
            return false;
        }
    }
};
let mimi = new Car ("white", "toyota");
let meme = new Car ("black", "toyota");
let momo = new Car ("white", "toyota");
carTools.isEqule(mimi, momo);
carTools.isEqule(meme, momo);

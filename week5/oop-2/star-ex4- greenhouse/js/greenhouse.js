class Plant {
    constructor(season, color, isBlossom) {
        this.season = season;
        this.color = color;
        this.isBlossom = isBlossom;
    }
}
let plant01 = new Plant("summer", "red", true);
let plant02 = new Plant("spring", "red", true);
let plant03 = new Plant("winter", "yellow", false);
let plant04 = new Plant("summer", "blue", false);
let plant05 = new Plant("spring", "purple", true);
let greenhouse = [plant01, plant02, plant03, plant04, plant05];
function blossoming(array) {
    let blossoming = [];
    array.forEach(element => {
        if (element.isBlossom) {
            blossoming.push(element);
            console.log(element);
        }
    });
    return blossoming;
}
blossoming(greenhouse);


class Shoes {
    constructor(name, availableSize) {
        this.name = name;
        this.availableSize = availableSize;
    }
    checkSizeAviailable(size) {
        let exist = false;
        for (let i = 0; i < this.availableSize.length; i++) {
            if (this.availableSize[i] === size) {
                exist = true;
            }
        }
        if(exist){
            console.log(`there is size: ${size} in the stock`);
            return true;
        }
        else{
            console.log(`there isn't size: ${size} in the stock`);
            return false;
        }
    }
}

let shoe1 = new Shoes("mm", [36,37,38,39]);
shoe1.checkSizeAviailable(36);
shoe1.checkSizeAviailable(40);
class CarCompany {
    constructor(country, models) {
        this.country = country;
        this.models = models;
    }
    printModels() {
        for (let i = 0; i < this.models.length; i++) {
            console.log(this.models[i]);
        }
    }
    merge(carCompany) {
        for (let i = 0; i < carCompany.models.length; i++) {
            this.models.push(carCompany.models[i]);
        }
    }
}

let suzuki = new CarCompany("japan",["Alto","Baleno","Swift"]);
let companyB = new CarCompany("china",[1,2,3,4]);
suzuki.merge(companyB);
suzuki.printModels();
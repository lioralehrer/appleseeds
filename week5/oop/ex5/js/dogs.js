class Dog {
    constructor(name, type, age, isCuddle) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.isCuddle = isCuddle;
    }
}

var dog1 = new Dog("blacky", "Pudel", 3, true);
var dog2 = new Dog("koko", "Boxer", 1, true);
var dog3 = new Dog("silver", "Labrador", 5, false);
var dog4 = new Dog("nana", "Labrador", 2, false);
var dog5 = new Dog("biko", "Labrador", 6, true);
var dogs = [dog1, dog2, dog3, dog4, dog5];

function printDogsOfType(dogs , type){
    dogs.forEach(dog => {
        if (dog.type == type){
            console.log(dog);
        }
       
    });
}

 printDogsOfType(dogs, "Labrador");
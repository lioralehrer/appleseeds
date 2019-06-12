var spiderMan = {
    favourite_animal: "spider"
}
function printFavouriteAnimal() {
    console.log(this.favourite_animal);
    return this.favourite_animal;
}
spiderMan.printFavouriteAnimal = printFavouriteAnimal;
spiderMan.printFavouriteAnimal();
 printFavouriteAnimal.call(spiderMan);
var favourite_animal = "spiderMan";
printFavouriteAnimal();
printFavouriteAnimal.call({favourite_animal: "some animanl"});

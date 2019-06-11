var wonderWoman = {
    name: "Diana Prince"
}
var batman = {
    name: "Bruce Wayne"
}
var superHeroes = [wonderWoman, batman];

function printName() {
    console.log("my name is " + this.name);
}

//     We want to print the heroes names. Implement the printHeroes function:
// Note: you cannot change the super heroes objects
function printHeroes(heroes, printFunc) {
   heroes.forEach(element => {
         this.name = element.name;
        printFunc();
    
      
    });
}
// Test your function by invoking:
printHeroes(superHeroes, printName);

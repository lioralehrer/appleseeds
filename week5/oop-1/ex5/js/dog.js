// 1. Create a Dog constructor with the properties : name, type, age, isCuddle.
// 2. Create three different instances.
// 3. Create a function that describes the dog by printing its properties. For example:
// "this is Blacky a Chow Chow. He is 3 years old and loves to cuddle"
// 4. describe the 3 dogs you created (via the function).



let billy = new Dog("billy", "buldog", 2, true);
let zilly = new Dog("zilly", "pinch", 3, false);
let milly = new Dog("milly", "sunbrenand", 4, true);
let dogs01 = [billy, zilly, milly];

function describe(dog) {
    console.log(`This is ${dog.name} a ${dog.type}.  He is ${dog.age} years old `)
    if (dog.isCuddle) {
        console.log("He loves to cuddle");
    }
    else {
        console.log("He doesn't love to cuddle");
    }
}

function describeDogs(dogs01) {
      dogs.forEach(dog => {
       describe(dog);
   });
}

describeDogs(dogs01);


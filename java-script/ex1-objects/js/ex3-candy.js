var candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

// The function should return the candy element with the specified id.
function getCandy(candyStore, id) {
    var candy = candyStore.candies.find(obj => obj.id === id);
    return candy;
}
// test:
getCandy(candyStore, "5hd7y");
getCandy(candyStore, "as12f");
getCandy(candyStore, "iii");

// The function should return the price (number) of the candy with the specified id.
function getPrice(candyStore, id) {
    let candy = candyStore.candies.find(obj => obj.id === id);
    return candy.price;
}
// test:
getPrice(candyStore, "5hd7y");
getPrice(candyStore, "as12f");


// The function should add a new candy to the candy list in candyStore with a default amount of 1.
// The function will not return anything.
function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({
        name: name,
        id: id,
        price: price,
        amount: 1

    });
}
// test:
addCandy(candyStore, "iii", "loly-pop", 2);

// The function should add the candy price to the cashRegister, and decrease the amount property of the relevant candy.
function buy(candyStore, id) {
    let money = candyStore.candies.find(obj => obj.id === id).price;
    candyStore.cashRegister -= money;
    candyStore.candies.find(obj => obj.id === id).amount -= 1;
}
// test:
buy(candyStore, "iii");
buy(candyStore, "as12f");
buy(candyStore, "5hd7y");

function test_equal(actual, expected, msg) {
    if (Array.isArray(expected)) {
        for (var i = 0; i < expected.length; i++) {
            test_equal(actual[i], expected[i], "item in index " + i);
        }
    } else if (typeof expected === "object") {
        for (prop in expected) {
            test_equal(actual[prop], expected[prop]);
        }
    } else {
        if (actual !== expected) {
            console.log(`Error testing ${msg || ''}. expected: ${expected}, got ${actual}`)
        }
    }
}
test_equal(getCandy(candyStore, "as12f"), { name: "mint gum", id: "as12f", price: 2, amount: 2 });
test_equal(getPrice(candyStore, "5hd7y"), 5);
buy(candyStore, "as12f");
test_equal(getCandy(candyStore, "as12f").amount, 1);
test_equal(candyStore.cashRegister, 202);
buy(candyStore, "as12f");
buy(candyStore, "as12f");
test_equal(getCandy(candyStore, "as12f").amount, 0);
test_equal(candyStore.cashRegister, 204);
addCandy(candyStore, "hfy46", "Bamba", 4);
test_equal(candyStore.candies.length, 3);
buy(candyStore, "hfy46");
test_equal(getCandy(candyStore, "hfy46").amount, 0);
test_equal(candyStore.cashRegister, 208);





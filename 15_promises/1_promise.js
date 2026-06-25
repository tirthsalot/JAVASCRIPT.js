// Promise Definition:
// A Promise is an object that represents the eventual completion
// or failure of an asynchronous operation and its resulting value.

// Promise has 3 states:
// 1. Pending
// 2. Fulfilled
// 3. Rejected

const foodOrder = new Promise((resolve, reject) => {

    let menu = ["Pizza", "Thickshake", "French Fries"];


    setTimeout(() => {

        if (menu.length === 0) {
            reject("No food items available.");
        } else {
            resolve("Food items are available. Please place your order.");
        }

    }, 2000);

});

foodOrder
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
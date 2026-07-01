// async using try with example of Netflix 


function loginNetflix() {

    let account = true;

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (account) {
                console.log("Netflix Login Successful");
                resolve("User Logged In");
            }
            else {
                reject("Invalid Email or Password");
            }

        }, 1000);

    });

}

function chooseSeries(user) {

    let series = "Stranger Things";

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (series) {
                console.log("Series Selected:", series);
                resolve(series);
            }
            else {
                reject("Series Not Found");
            }

        }, 1500);

    });

}

function loadEpisode(series) {

    let internet = true;

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (internet) {
                console.log("Episode Loading...");
                resolve(series);
            }
            else {
                reject("Internet Connection Lost");
            }

        }, 2000);

    });

}

function watchSeries(series) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Watching:", series);
            resolve("Episode Completed");

        }, 3000);

    });

}

async function netflix() {

    try {

        const A1 = await loginNetflix();
        const A2 = await chooseSeries(A1);
        const A3 = await loadEpisode(A2);
        const A4 = await watchSeries(A3);

        console.log(A4);

    }
    catch (err) {

        console.log("Error:", err);

    }

}

netflix();

//another example

function chooseProducts() {

    let cart = ["Biscuit", "Chips", "Cold Drinks"];

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (cart.length > 0) {
                console.log("Products Added To Cart");
                resolve(cart);
            } else {
                reject("Cart Is Empty");
            }

        }, 1000);

    });

}

function confirmOrder(cart) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Order Confirmed");
            resolve(cart);

        }, 1500);

    });

}

function packItems(cart) {

    let stockAvailable = true;

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (stockAvailable) {
                console.log("Items Packed");
                resolve(cart);
            } else {
                reject("Items Out Of Stock");
            }

        }, 2000);

    });

}

function doorstepDelivery(cart) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Delivered In 10 Minutes");
            resolve("Happy Shopping");

        }, 2500);

    });

}

async function blinkitOrder() {

    try {

        const A1 = await chooseProducts();
        const A2 = await confirmOrder(A1);
        const A3 = await packItems(A2);
        const A4 = await doorstepDelivery(A3);

        console.log(A4);

    } catch (err) {

        console.log(err);

    }

}

blinkitOrder();
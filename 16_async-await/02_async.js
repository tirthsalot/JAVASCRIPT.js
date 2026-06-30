function choosePizza() {

    let pizza = "Cheese Pizza";

    return new Promise((resolve, reject) => {

        if (!pizza) {
            reject("Pizza Not Selected");
        } else {

            setTimeout(() => {

                console.log("Pizza Selected");
                resolve(pizza);

            }, 1000);

        }

    });

}

function bakePizza(pizza) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Pizza Baking...");
            resolve(pizza);

        }, 3000);

    });

}

function packPizza(pizza) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Pizza Packed");
            resolve(pizza);

        }, 1000);

    });

}

function deliverPizza(pizza) {

    return new Promise((resolve) => {

        console.log("Pizza Delivered");
        resolve("Enjoy Your Pizza");

    });

}

async function pizzaOrder() {

    const p1 = await choosePizza();
    const p2 = await bakePizza(p1);
    const p3 = await packPizza(p2);
    const p4 = await deliverPizza(p3);

    console.log(p4);

}

pizzaOrder();

//another example

function selectMovie() {
    let movie = {
        name: "Welcome to the Jungle",
        seats: 2
    };

    return new Promise((resolve, reject) => {

        if (movie.seats <= 0) {
            reject("Seats not available");
        } else {

            setTimeout(() => {
                console.log("Movie Selected");
                resolve(movie);
            }, 1000);

        }

    });
}

function paymentDone(movie) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Payment Successful");
            resolve(movie);

        }, 2000);

    });

}

function ticketGenerated(movie) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Ticket Generated");
            resolve(movie);

        }, 1500);

    });

}

function enjoyMovie(movie) {

    return new Promise((resolve) => {

        console.log("Enjoy Your Movie");
        resolve("Movie Completed");

    });

}

async function movieBooking() {

    const m1 = await selectMovie();
    const m2 = await paymentDone(m1);
    const m3 = await ticketGenerated(m2);
    const m4 = await enjoyMovie(m3);

    console.log(m4);

}

movieBooking();

//grocerry shopping example

function addProducts() {

    let cart = ["Rice", "Milk", "Sugar"];

    return new Promise((resolve) => {

        console.log("Items Added");
        resolve(cart);

    });

}

function billPayment(cart) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Payment Successful");
            resolve(cart);

        }, 2000);

    });

}

function delivery(cart) {

    return new Promise((resolve) => {

        console.log("Groceries Delivered");
        resolve("Shopping Completed");

    });

}

async function groceryOrder() {

    let g1 = await addProducts();
    let g2 = await billPayment(g1);
    let g3 = await delivery(g2);

    console.log(g3);

}

groceryOrder();

//Music streaming example

function chooseSong() {

    return new Promise((resolve) => {

        console.log("Song Selected");
        resolve("Believer");

    });

}

function loadSong(song) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Loading...");
            resolve(song);

        }, 2000);

    });

}

function playSong(song) {

    return new Promise((resolve) => {

        console.log("Playing:", song);
        resolve("Song Finished");

    });

}

async function musicPlayer() {

    let s1 = await chooseSong();
    let s2 = await loadSong(s1);
    let s3 = await playSong(s2);

    console.log(s3);

}

musicPlayer();
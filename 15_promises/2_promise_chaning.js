// Promise Chaining means executing asynchronous operations one after another.

// Producing Code

const series = new Promise((resolve, reject) => {

    let series = ["One Piece", "Stranger Things","From","Money Heist","Off campus","Farzi","All of us are dead","Alice in borderland"];


    setTimeout(() => {

        if (series.length > 0) {
            resolve(series);
        } else {
            reject("No movies or series are  available.");
        }

    }, 2000);

});


series

.then((series) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("series found successfully.");
            resolve(series);

        }, 2000);

    });

})

.then((series) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const subscription = true;

            if (subscription) {
                console.log("Subscription verified.");
                resolve(series);
            } else {
                reject("Subscription expired.");
            }

        }, 2000);

    });

})

.then((series) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Streaming started.");
            resolve(series);

        }, 2000);

    });

})

.then((series) => {

    console.log("Enjoy watching!", series);

})

.catch((error) => {

    console.log("Error:", error);

})

.finally(() => {

    console.log("Streaming process completed.");

});
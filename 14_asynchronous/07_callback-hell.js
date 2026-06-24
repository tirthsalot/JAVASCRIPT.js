function SelectMeal(item, callback) {

    if (!item) {
        return callback("Please choose a meal.");
    }

    setTimeout(() => {
        console.log(`${item} has been selected.`);
        callback(null, item);
    }, 1000);

}

function AcceptOrder(item, callback) {

    setTimeout(() => {
        console.log(`Restaurant accepted the order for ${item}.`);
        callback(null, item);
    }, 1000);

}

function CookMeal(item, callback) {

    setTimeout(() => {
        console.log(`${item} is being cooked.`);
        callback(null, item);
    }, 1000);

}

function PackMeal(item, callback) {

    setTimeout(() => {
        console.log(`${item} has been packed.`);
        callback(null, item);
    }, 1000);

}

function DispatchOrder(item, callback) {

    setTimeout(() => {
        console.log(`${item} is out for delivery.`);
        callback(null, item);
    }, 1000);

}

function CompleteDelivery(item, callback) {

    setTimeout(() => {
        console.log(`${item} delivered successfully.`);
        callback(null, item);
    }, 2000);

}


SelectMeal("Burger", (err, item) => {

    if (err) {
        return console.log(err);
    }

    AcceptOrder(item, (err, item) => {

        if (err) {
            return console.log(err);
        }

        CookMeal(item, (err, item) => {

            if (err) {
                return console.log(err);
            }

            PackMeal(item, (err, item) => {

                if (err) {
                    return console.log(err);
                }

                DispatchOrder(item, (err, item) => {

                    if (err) {
                        return console.log(err);
                    }

                    CompleteDelivery(item, (err, item) => {

                        if (err) {
                            return console.log(err);
                        }

                        console.log("Enjoy your meal!");

                    });

                });

            });

        });

    });

});
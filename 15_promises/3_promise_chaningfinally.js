
const bookTicket = new Promise((resolve, reject) => {

    let seats = ["A1", "A2", "A3"];


    if (seats.length === 0) {

        reject("No seats available.");

    } else {

        setTimeout(() => {

            const ticketId = "MOV12345";

            console.log("Ticket Booked");

            resolve(ticketId);

        }, 1000);

    }

});

bookTicket

.then((ticketId) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (!ticketId) {
                reject("Ticket booking failed.");
            } else {
                console.log("Payment Successful");
                resolve(ticketId);
            }

        }, 1000);

    });

})

.then((ticketId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Ticket sent to your email.");

            resolve(ticketId);

        }, 1000);

    });

})

.then((ticketId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log("Enjoy your movie!");

            resolve(ticketId);

        }, 1000);

    });

})

.then((ticketId) => {

    console.log("Ticket ID:", ticketId);

})

.catch((error) => {

    console.log(error);

})

.finally(() => {

    console.log("Thank you for booking with us!");

});
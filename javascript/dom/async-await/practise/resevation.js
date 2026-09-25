function getTrain(trainNumber) {
    let trains = new Map([
        [246790, "Udyan Express"],
        [246891, "Chennai Express"],
        [246992, "Intercity Express"]
    ]);

    return new Promise((resolve, reject) => {
        if (trains.has(trainNumber)) {
            resolve(`Your train is ${trains.get(trainNumber)}.`);
        } else {
            reject("Enter a valid train number.");
        }
    });
}

function bookTicket() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Selectin Seats...");
        }, 2000);
    });
}

function doPayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment completed successfully.");
        }, 2000);
    });
}

function downloadTicket() {
    console.log("Ticket Downloading...");

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ticket Downloaded Successfully!");
        }, 2000);
    });
}

async function reservation() {
    try {
        const train = await getTrain(246891);
        console.log(train);

        const seat = await bookTicket();
        console.log(seat);

        const payment = await doPayment();
        console.log(payment);

        const ticket = await downloadTicket();
        console.log(ticket);

        console.log("🎉 Happy Journey!");
    } catch (err) {
        console.log(err);
    }
}

reservation();
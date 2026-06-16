try {
    let temperature = 45;

    if (temperature > 40) {
        throw "Temperature is too high";
    }

    console.log("Temperature is normal");
}
catch (problem) {
    console.log(problem);
}
finally {
    console.log("Weather check completed");
}

//example

try {
    let balance = 500;

    if (balance < 1000) {
        throw "Insufficient account balance";
    }

    console.log("Transaction successful");
}
catch (errorMessage) {
    console.log(errorMessage);
}
finally {
    console.log("Thank you for using our banking service");
}
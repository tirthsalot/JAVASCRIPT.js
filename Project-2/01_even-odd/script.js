function checkNumber() {
    let number = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number.";
    } else if (number % 2 === 0) {
        result.innerHTML = number + " is Even.";
    } else {
        result.innerHTML = number + " is Odd.";
    }
}
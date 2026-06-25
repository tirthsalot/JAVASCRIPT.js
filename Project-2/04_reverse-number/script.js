document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let num = document.getElementById("number").value;
    let reversed = num.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        `Reversed Number = <span>${reversed}</span>`;
});
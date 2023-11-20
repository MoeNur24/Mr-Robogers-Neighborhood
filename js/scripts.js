//Bussiness Logic
function myLovely(neighbor) {
    let number = [];
    for (let i = 0; i <= neighbor; i++) {
        number.push(`${i}`);
        if ((number[i]).includes("3")) {
            number[i] = ("Can you be my neighbor?");
        } else if ((number[i]).includes("2")) {
            number[i] = ("Friend");
        } else if (number[i].includes("1")) {
            number[i] = ("Hello");
        }
    }
    return number;
}

//UI Logic
document.addEventListener("DOMContentLoaded", function () {
    const formUno = document.getElementById("form-Uno");
    formUno.addEventListener("submit", function (event) {
        event.preventDefault();
        const inputtedNumber = parseInt(document.getElementById("number").value);
        let result = myLovely(inputtedNumber);
        document.getElementById("output").textContent = result.join(', ');
        document.getElementById("output").style.display = "block";
    });
});


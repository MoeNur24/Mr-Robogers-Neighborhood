//Bussiness Logic
function my(neighbor) {
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



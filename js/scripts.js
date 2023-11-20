    //Bussiness Logic
function my(neighbor) {
let number = [];
for (let i =0; i <= neighbor; i++) {
number.push(i.toString());
if ((number[i]).match("3")) {
    number [i] = "Can you be my neighbor?"    
    } else if ((number[i]).match("2")) {
    number [i] = ("Friend");    
    } else if (number[i].match("1")) {
        number[i] = ("Hello");
    } else {
      number[i];
    }
return number;
}
}

$(document).ready(function() {
  $("#form-Uno").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#number").val());
    myNeighbor(inputtedNumber);
   });
  });
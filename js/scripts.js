    //Bussiness Logic
function my(neighbor) {
const number = [];
for (let i =0; i <= neighbor; i++) {
number.push(i.toString());
if ((number[i]).match("3")) {
    number [i] = "Can you be my neighbor?"    
}
}
}

$(document).ready(function() {
  $("#form-Uno").submit(function(event) {
    const inputNumber = $("#number").val();
   $("form-Uno").submit(function(event) {
    event.preventDefault();
    const inputNumber = parseInt($("#number").val());
    myNeighbor(inputtedNumber);
   })
  })
})
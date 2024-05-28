let number = 0;
document.getElementById("btn1").onclick = function(){
    console.log("btn1 working")
    number = number + 1;
    console.log(number);
    document.getElementById("num1").innerHTML = number
}
document.getElementById("btn2").onclick = function(){
    console.log("btn2 working")
    number = 0;
    console.log(number);
    document.getElementById("num1").innerHTML = number
}
document.getElementById("btn3").onclick = function(){
    console.log("btn3 working")
    number = number - 1;
    console.log(number);
    if(number < 0){
        alert("-ve value")
        number = 0;
    }
    document.getElementById("num1").innerHTML = number
}
let number2 = 0;
document.getElementById("btn4").onclick = function(){
    console.log("btn4 working")
    number2 = number2 + 2;
    console.log(number2);
    document.getElementById("num2").innerHTML = number2
}
document.getElementById("btn5").onclick = function(){
    console.log("btn5 working")
    number2 = 0;
    console.log(number2);
    document.getElementById("num2").innerHTML = number2
}
document.getElementById("btn6").onclick = function(){
    console.log("btn6 working")
    number2 = number2 - 2;
    console.log(number2);
    if(number2 < 0){
        alert("-ve value")
        number2 = 0;
    }
    document.getElementById("num2").innerHTML = number2
}
let number3 = 0;
document.getElementById("btn7").onclick = function(){
    console.log("btn7 working")
    number3 = number2 + number;
    console.log(number3);
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn8").onclick = function(){
    console.log("btn8 working")
    number3 = number2 - number;
    console.log(number3);
    if(number2 < 0){
        alert("-ve value")
        number2 = 0;
    }
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn9").onclick = function(){
    console.log("btn9 working")
    number3 = number2 * number;
    console.log(number3);
    document.getElementById("num3").innerHTML = number3
}
document.getElementById("btn10").onclick = function(){
    console.log("btn10 working")
    number3 = number2 / number;
    console.log(number3);
    document.getElementById("num3").innerHTML = number3
}

function add(num1,num2){
    console.log("Addition: "+(num1+num2));

}

function multiply(num1,num2){
    console.log("Multiplication"+(num1*num2));

}


function subtract(num1,num2){
    console.log("Subtraction: "+(num1-num2));

}

function division(num1,num2){
    console.log("Division: "+(num1/num2));

}

function evenodd(num)
{
    if(num%2==0) console.log("Number is Even")
    else console.log("Number is Odd")   
}

add(10,20);
multiply(30,10);
subtract(40,20);
division(40,20);
evenodd(11);
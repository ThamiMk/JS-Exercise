// Is the number divisible by 5
function testDiv(num)
{
    if(num % 5 == 0){
        console.log("True");
    }else {
        console.log("False");
    }
}
console.log("is div by 5")
testDiv(7);
testDiv(20);

// divisible by 3 or 5
function divNum(num)
{
    if(num % 5 == 0 && num % 3 == 0){
        console.log("False");
    }
    else if(num % 5 == 0 || num % 3 == 0){
        console.log("True");
    }
    else {
        console.log("False")
    }

}
console.log("is div by 3 or 5")
divNum(20);
divNum(30);
divNum(8);

function largerNum(num1,num2)
{
    if(num1<num2)
    {
        console.log(num2);
    }
    else if(num1>num2){
        console.log(num1);
    }
    else{
        console.log("the numbers are equal");
    }
}

console.log("Which is bigger?");
largerNum(4,10);
largerNum(8,2);
largerNum(5,5);

function wordCheck(word){
    if( word.length <6 ){
        console.log("Short");
    }
    else if (word.length == 6){
        console.log("Medium");
    }
    else{
        console.log("Long")
    }

}

console.log("Word Check");
wordCheck("Thami");
wordCheck("HelloWorld");

function count_e(word)
{
    console.log(word.split('e').length-1);
}

console.log("Count e")
count_e("Breeezy");
count_e("me");
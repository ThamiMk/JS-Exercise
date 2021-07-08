function count_A(word)
{
    console.log(word.split('A').length-1 + word.split('a').length-1);
}

console.log("Count a")
count_A("AnotherDaay");
count_A("Ama");

function Count_Vowels(word)
{
    console.log(word.split('a').length-1 + word.split('e').length-1 + word.split('i').length-1 + word.split('o').length-1 + word.split('u').length-1);
}

console.log("Count Vowels");
Count_Vowels("aeiou");
Count_Vowels("Hello");

function sum_nums(max){
    for(num=0; num<= max; ++num)
    {
        console.log(num)
    }
}

console.log("Sum_nums");
sum_nums(6);

function factorial(limit){
    console.log(limit + " is divisible by: ");
    for(num = 1; num <= limit; ++num)
{
    if(limit % num ==0){
    console.log(num);
    }
}
}
factorial(30);
factorial(50);

function reverse(word){
    console.log(word.split('').reverse().join(''));
}

reverse("HelloWord!");

function goodbye(name)
{
    console.log("bye " + name);
}

goodbye("Thami");
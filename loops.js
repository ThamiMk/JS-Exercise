// select a large number 
let limit = 100;

console.log(limit+ " is divisible by ");

// For loop to find factors
for(num = 1; num <= limit; ++num)
{
    if(limit % num ==0){
    console.log(num);
    }
}
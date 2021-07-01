// created an object 
let emp = {
    name: "Thami",
    points: 7,
    pay: 500   
}

//created a function with if statment
function raise(amount){
// less than 5 points
    if(emp.points < 5){
        console.log("Employee points too low, WORK HARDER!");
    }
    //5 and 6 poins
    else if (emp.points <= 6 &&  emp.points > 4 ){
    let newSal = amount * 1.10;
    console.log(emp.name+ " will now earn " + newSal);
    }
    // more than 7 points
    else if (emp.points >= 7)
    {
        let newSal = amount * 1.30;
        console.log(emp.name+ " Is an awsome employee and will now earn " + newSal);
    }
    else{
        console.log("No points logged");
    }
}
// output results
console.log("Point system to determine if employee should gain increase");
raise(emp.pay);

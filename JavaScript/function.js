// Function calling
function greet(){
    console.log("Good morning");
}
greet();

function powerOf(){
    console.log("Go to the rage and achieve the goals");

}
powerOf();

// calculate the milk

function price(bottles){
    let price=bottles*20;
    console.log("price of the bottles"+price);
}
price(5);

function remaining(age){
    let years=100-age;
    console.log("You have "+years+" years remaining");
    let months=years*12;
    let weeks=years*52;
    let days=years*365;
    console.log("You have "+months+" months remaining");
    console.log("You have "+weeks+" weeks remaining");
    console.log("You have "+days+" days remaining");
}

remaining(20);
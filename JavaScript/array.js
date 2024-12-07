let a=["Shraddha","Sagar","Krishna","Nikhil","Abhi"];
for(let i=0;i<a.length;i++){
     console.log(a[i]);
}
if(a.includes("Sagar")){
    console.log("Sagar will achieve his Dreams.");
}

for(let i=1;i<=100;i++){
    console.log(i)
    if(i%3==0&&i%5==0){
        console.log("Fizz Buzz")
    }
    else if(i%5){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
}
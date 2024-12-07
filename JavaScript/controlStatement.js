// var i=1;
// while(i<2){
//     console.log(i);
//     i++;
// }
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

function fibonacciGenerate(n){
var output=[];
if(n==1){
    output=[0];
}
else if (n==2){
    output=[0,1];
}
else{
    output=[0,1];
    for(var i=2;i<n;i++){
       output.push( output[output.length-2]+output[output.length-1] );
   }
}
return output;
}
console.log(fibonacciGenerate(4))
function swap(a,b){
    // let c=a;
    // a=b;
    // b=c;

    // method 2
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(a,b)

}
let a=4;
let b=2;
console.log(a,b)
swap(a,b);
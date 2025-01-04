let arr=[12,42,1,6,2];
//map
let newArr=arr.map((value)=>{
    return value*2;
})
console.log(newArr)

//filter
let newArr2 = arr.filter((value) => {
    return value % 2 == 0;
});
console.log(newArr2);

// reduce

let newArr3=arr.reduce((acc,value)=>{
    return acc+value;
},0)
console.log(newArr3)

// Find
let newArr4=arr.find((value)=>{
    return value>10;
})
console.log(newArr4)

// FindIndex
let newArr5=arr.findIndex((value=>{
    return value>10;
}))
console.log(newArr5)
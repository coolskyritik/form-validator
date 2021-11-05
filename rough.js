let arr=[2,3,4,5,6,8,9];
let arr2=arr.map((curre)=>{
    return curre*2;
}).filter((curre)=>{
    return curre>10;
})
console.log(arr2);
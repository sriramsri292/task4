let arr=[1,2,3,4,5,6,7];

let sum=((arr)=>
{
    let c=0;
    arr.forEach(element => {
        c+=element;
    });
    console.log(c);
});
sum(arr);

((arr)=>
{
    let c=0;
    arr.forEach(element => {
        c+=element;
    });
    console.log(c);
})(arr);
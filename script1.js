//Print odd numbers in an array

let arr=[1,2,3,4,5,6,7];
let oddeven=function(arr)
{
   arr.forEach(element => {
    if(element%2!=0)
    {
        console.log(element);
    }
   });
}
oddeven(arr);

((arr)=>
{
    arr.forEach(element => {
        if(element%2!=0)
        {
            console.log(element);
        }
       });
})(arr);
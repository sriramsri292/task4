let arr = ["level", "hello", "radar", "world", "madam"];

let pal=function(arr)
{
  for(let i=0;i<arr.length;i++)
  {
    let word=arr[i];
    let cheak=word.split("").reverse().join("");
    if(word==cheak)
    {
        console.log(arr[i]);
    }
  }
}
pal(arr);

((arr)=>
{
    for(let i=0;i<arr.length;i++)
  {
    let word=arr[i];
    let cheak=word.split("").reverse().join("");
    if(word==cheak)
    {
        console.log(arr[i]);
    }
  }
    
})(arr);
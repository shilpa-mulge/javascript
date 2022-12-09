 function nextPermutation(arr,n)
{
       
    //code here
    for(var i=arr.length-1;i>=0;i--){
        if(arr[i]>arr[i-1]){
            var v=nextG(i-1)
            swap(i-1,v)
            reverse(i)
            return
        }
    }
    arr.reverse()
    function nextG(breakP){
    for(var i=arr.length-1;i>breakP;i--){
        if(arr[i]>arr[breakP]){
           return i
        }
    }
    }
    function swap(i,j){
      [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    function reverse(breakP){
    var start=breakP
    var last=arr.length-1
    while(start<last){
        swap(start,last)
        start++
        last--
    }
}
};
var arr=[1,2,3]
nextPermutation(arr)
console.log(arr)
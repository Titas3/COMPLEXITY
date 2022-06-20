function majority(input){
    var n= input.length;
    for(let i = 0;i<n;i++){
        var count = 1;
        for(let j = i+1; j<n; j++){
            if(input[i] == input[j]){
                count++;
            }
            if(count>n/2){
                return input[i];
            }
        }
    }
    return null ;

}
console.log(majority([4,4,3,3,4]));



// USING MAP



// function findElement(arr)
// {
//     let map = new Map();

//     for(let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {
//                 let count = map.get(arr[i]) +1;
//                 if (count > arr.length /2) {
//                     console.log("Element found : " + arr[i]);
//                     return;
//                 } else
//                     map.set(arr[i], count);

//         }
//         else
//             map.set(arr[i],1);
//         }
//         console.log("No element coming more then n/2 times");
// }

// let a = [ 2,2,2,2,15,2,12,13,3 ];
    
// findElement(a);


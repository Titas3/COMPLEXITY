let arr = [46156,461361,496456,146,3,1,54,31,3];
function quickSort(arr){
    if(arr.length<1){
        return arr;
    }
    let left = [];
    let right = [];
    let [pivot, ...rest]= arr;
    rest.forEach((element) => {
        element>pivot?right.push(element):left.push(element);
    });
    return quickSort(left).concat(pivot).concat(quickSort(right));
}
console.log(quickSort(arr));
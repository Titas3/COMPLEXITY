// 1)Given an list of time intervals where time intervals[i] = [starti, endi],
// we need to find the least number of time intervals to be removed in order
//  to make the list of time intervals non overlapping 
// LEETCODE 435


function findIntervalToBeRemoved(arr, N)
{
     var rem = 0;
  
    if (N <= 1)
        return 0;
  
    arr.sort((a,b) => a[0]-b[0]);
  
    var end = arr[0][1];
    for (i = 1; i < N ; i++) {
  
       
        if (arr[i][0] < end) {
            rem++;   
            end = Math.min(arr[i][1], end);
        }
        else
            end = arr[i][1];
    }
    return rem;

}

var arr = [ [ 1, 2 ],
				[ 4,7 ],
				[ 3, 8 ] ];
var N = arr.length;
console.log(findIntervalToBeRemoved(arr, N));



// LEETCODE 435

// var eraseOverlapIntervals = function(intervals) {
//     intervals.sort((a, b) => {
//         if(a[0] != b[0]) return a[0] - b[0];
//         return a[1] - b[1];
//     });
//     let l = 0, r = 1, c = 0, n = intervals.length;
//     while(r < n) {
//         if(intervals[l][1] <= intervals[r][0]) {
//             l = r;
//             r++;
//         }
//         else if(intervals[l][1] < intervals[r][1]) {
//             r++;
//             c++;
//         } else {
//             l = r;
//             r++;
//             c++;
//         }
//     }
//     return c;
// }


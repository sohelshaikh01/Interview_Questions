// Two Sum - LC1

// Return Indices of two number who's sum is equal to the target
// Ex: nums = [2, 11, 7, 8], target = 9
// Output: [0, 2] = 2 + 7

// const twoSum = function(arr, target) {
//     for(let i=0; i<arr.length; i++) {
//         for(let j=i+1; j<arr.length; j++) {
//             if(arr[i] + arr[j] === target) return [i, j];
//         }
//     }
// }

// console.log(twoSum([2, 10, 7, 5], 9));

// Optimized Approach Using Objects
const twoSum = function(arr, target) {
    var obj = {}

    for(let i=0; i<arr.length; i++) {
        let n = arr[i];

        if(obj[target-n] >= 0) {
            return [obj[target - n], i];
        } else {
            obj[n] = i;
        }
    }
}

// nums = [2, 7, 11, 15]
// {
// 2: 0  // 26 - 2 = 24
// 7: 1
// 11: 2 // 26 - 11 = 15
// 15:   // 26 - 15 = 11 [obj[11], 3] => [2, 3]
// }
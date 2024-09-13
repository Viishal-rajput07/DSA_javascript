/*
Coding Exercise: Non overlapping Intervals
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of 
intervals you need to remove to make the rest of the intervals non-overlapping.

Example:

[[1, 4], [2, 5], [5, 6], [3, 4]]

Output: In this example, removing [2, 5] and [3, 4] is sufficient. Thus, the answer is 2.
*/

// Approach : Greedy , T=O(nlogn), S=O(1)
const eraseOverlappingIntervals = (arr) =>{

    arr.sort((a,b ) => a[1] - b[1])
    console.log(arr)

    let count = 0
    let end = 0
    // console.log(end)
    for(let i = 0; i< arr.length; i++){
        if(arr[i][0] < end){
            count ++
        }
        else{
            end = arr[i][1]
        }
    }
    return count
}

// console.log(eraseOverlappingIntervals([[1,2],[1,3]]))

var eraseOverlapIntervals = function(intervals) {
    // Sort intervals based on their end times
    intervals.sort((a, b) => a[1] - b[1]);
 
    let removalCount = 0;     // Initialize the count of intervals to remove
    let lastEnd = -Infinity;  // Track the end of the last non-overlapping interval
 
    // Iterate over the sorted intervals
    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        console.log(start, end)
 
        // Check if the current interval starts before the last one ended
        if (start >= lastEnd) {
            // No overlap, move the end marker to the end of the current interval
            lastEnd = end;
        } else {
            // Overlap, increment the removal count
            removalCount++;
        }
    }
 
    return removalCount;  // Return the count of intervals that need to be removed
};

console.log(eraseOverlapIntervals([[1, 4], [2, 5], [5, 6], [3, 4]]))

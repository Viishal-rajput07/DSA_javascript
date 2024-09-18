/**
Coding Exercise: Minimum # of arrows to burst baloons
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are 
represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal 
diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the 
number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its 
path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

Example:

Input: points = [[3,9],[7,14],[10,16],[17,20]]

Expected Output: The balloons can be burst by 2 arrows:

Shoot an arrow at x = 10, bursting the balloons [3,9], [7,14], and [10,16].

Shoot an arrow at x = 18, bursting the balloon [17,20].
 */
// Input: points = [[3,9],[7,14],[10,16],[17,20]]


// T=0(nlogn) | S=0(1)
const bubbleArrow = (points) =>{

    points.sort((a, b) => (a[1] - b[1]))
    console.log(points)

// let lastEnd = Infinity
    let count  = 0
    let num = 0;
    for(let i = 0; i<points.length; i++){
        
        const[start, end] = points[i]
        // console.log(start , end)
        if(start <= num && num <= end){
            // console.log(num)
            continue
        }
        else{
            num = end;
            count ++ 
        }
    }
    return count
}
console.log(bubbleArrow([[1,10],[2,8],[3,9],[7,12]]))


var findMinArrowShots = function(points) {
    if (!points.length) {
        return 0;  // Return 0 if there are no balloons to shoot
    }
 
    // Sort the balloons by their ending coordinates
    points.sort((a, b) => a[1] - b[1]);
 
    let arrows = 1;  // Start with one arrow
    let lastArrowPosition = points[0][1];  // Position the first arrow at the end of the first balloon
 
    // Iterate through the sorted list of balloons
    for (let i = 0; i < points.length; i++) {
        const [xStart, xEnd] = points[i];
 
        // If the start of the current balloon is greater than where the last arrow was placed
        if (xStart > lastArrowPosition) {
            arrows += 1;  // We need a new arrow for this balloon
            lastArrowPosition = xEnd;  // Place the new arrow at the end of the current balloon
        }
    }
 
    return arrows;  // Return the total number of arrows needed
};

console.log(findMinArrowShots([[1,10],[2,8],[3,9],[7,12]]))

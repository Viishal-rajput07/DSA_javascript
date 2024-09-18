/*
Coding Exercise: Boats to Save people
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats 
where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, 
provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Input: people = [3, 5, 3, 4], limit = 5

Output: 3
1 boat for Person 1 and Person 3.
1 boat for Person 2.
1 boat for Person 4.



Input: people = [1,2], limit = 3

Output: 1

Explanation: 1 boat (1, 2)
*/

// Time = O(nlogn) | Space = O(1)
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);  // Sort people by weight
    let i = 0, j = people.length - 1;  // Two pointers
    let boats = 0;
 
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;  // If the lightest and heaviest person can share a boat, move both pointers
        }
        j--;  // Move the heavier person pointer inward
        boats++;  // In either case, we use one boat
    }

    return boats;
};
console.log(numRescueBoats([1,2,2,3], 3))
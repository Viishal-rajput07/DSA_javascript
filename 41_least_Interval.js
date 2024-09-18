/*
Coding Exercise: Task Scheduler
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost
 of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
*/

// Time Complexity: O(n) | Space Complexity: O(1)
const leastInterval = (tasks, n) => {

    let counter = new Array(26).fill(0)
    let maxVal = 0
    let numberTasksHighestFreq = 0

    tasks.forEach((task) => {
        let indexTask = task.charCodeAt(0) - 'A'.charCodeAt(0);   // c-a = 67-65 = 2
        counter[indexTask]++

        if (maxVal === counter[indexTask]) {
            numberTasksHighestFreq++
        }
        else if (maxVal < counter[indexTask]) {
            maxVal = counter[indexTask]
            numberTasksHighestFreq = 1
        }
    })

    let parts = maxVal - 1
    let slotsPerPart = n - (numberTasksHighestFreq - 1)
    let emptySlots = parts * slotsPerPart
    let availableTask = tasks.length - maxVal * numberTasksHighestFreq
    let idles = Math.max(0, emptySlots - availableTask)


    return tasks.length - idles
}

console.log(leastInterval(['C', 'C', 'D', 'E'], 3))

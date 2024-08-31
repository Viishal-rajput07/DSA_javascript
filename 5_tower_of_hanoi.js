/*

The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is 
to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in 
the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also,
you need to find the total moves.

Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. 
Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. 

EXAMPLE: 
For Input (N = 2) 
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3

Time complexity:-  0(2^n)
space complexity:-  0(n)

*/

function tower_of_hanoi(N, from, to, aux){
    // console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);

    let count = 0;

    function helper(N, from, to, aux){
       
        if(N===1){
          count += 1;
          
          console.log("move disk " + N + " from rod " + from + " to rod " + to);
          return;
        }
        // N-1 disk from (from-aux)
        helper(N-1, from, aux, to)
        // Nth disk from(from - to)
        count += 1;
        
        console.log("move disk " + N + " from rod " + from + " to rod " + to );

        // N-1 disk from(aux-to)
        helper(N-1, aux, to, from)
    }
    helper(N, from, to, aux)
    return count;
}

console.log(tower_of_hanoi(3, 1, 3,2))

function toh(N, rod){
    // console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);

    function helper(N, rod){
       
        if(N===1){
          return 1;
        }
        // N-1 disk from (from-aux)
        return helper(N-1, rod) + 1 + helper(N-1, rod)
    }
    return helper(N, rod);
}

// console.log(toh(5, 3))

// Time complexity => 0(n) but only if given array is sorted, if not then we have to sort it which 
// makes 0(nlogn) again
// space complexity => 0(n)
function sortedSquarredArray(array){
    
    let newArray = new Array(array.length).fill(0)

    let pointerLeft = 0;
    let pointerRight = array.length - 1;

    for(let i = array.length-1; i>=0; i--){

        let leftSquared = Math.pow(array[pointerLeft], 2);
        let rightSquared = Math.pow(array[pointerRight], 2);

        if(leftSquared > rightSquared){
            newArray[i] = leftSquared;
            pointerLeft ++
        }
        else{
            newArray[i] = rightSquared;
            pointerRight --
        }
    }
    return newArray
}

console.log(sortedSquarredArray([-2, 1,11, 5,9]))


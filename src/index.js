/**
 * 
 * @param {int[]} arr1 - a non-decreasing sequence of integers
 * @param {int[]} arr2 - a non-decreasing sequence of integers
 * @returns {int[]} the merged array
 * 
 * This function will be called by our system. 
 * So fill in your code inside this function.
 * 
 */
function mergeArrays(arr1, arr2) {
    // WRITE YOUR CODE HERE....

}



/*
* **************************************************************************************
*                          DO NOT EDIT THE CODE BELOW.
* ***************************************************************************************
* This code is used to boostrap your solution to be checked for correctness by our system.
*/
function main() {
    const input = process.argv.slice(2)
    
    const arr1 = JSON.parse(input[0])
    const arr2 = JSON.parse(input[1])

    const merged = mergeArrays(arr1, arr2)
    console.log(merged)
    // console.log(JSON.stringify(merged))
}


main()